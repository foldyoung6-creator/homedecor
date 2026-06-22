// BuyVistas - Cart Functionality
const CART_STORAGE_KEY = 'buyvistas_cart';

// Initialize cart from localStorage
function getCart() {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : { items: [], total: 0 };
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount();
    return cart;
}

// Add item to cart
function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const product = getProductById(productId);
    
    if (!product) return cart;
    
    const existingIndex = cart.items.findIndex(item => item.product_id === productId);
    
    if (existingIndex > -1) {
        cart.items[existingIndex].quantity += quantity;
    } else {
        cart.items.push({
            product_id: productId,
            quantity: quantity,
            product: product
        });
    }
    
    recalculateCart(cart);
    return saveCart(cart);
}

// Remove item from cart
function removeFromCart(productId) {
    const cart = getCart();
    cart.items = cart.items.filter(item => item.product_id !== productId);
    recalculateCart(cart);
    return saveCart(cart);
}

// Update item quantity
function updateQuantity(productId, newQuantity) {
    const cart = getCart();
    const item = cart.items.find(item => item.product_id === productId);
    
    if (item) {
        if (newQuantity <= 0) {
            return removeFromCart(productId);
        }
        item.quantity = newQuantity;
    }
    
    recalculateCart(cart);
    return saveCart(cart);
}

// Recalculate cart totals
function recalculateCart(cart) {
    cart.total = cart.items.reduce((sum, item) => {
        const product = item.product || getProductById(item.product_id);
        item.subtotal = (product?.price || 0) * item.quantity;
        return sum + item.subtotal;
    }, 0);
}

// Clear cart
function clearCart() {
    const emptyCart = { items: [], total: 0 };
    return saveCart(emptyCart);
}

// Get cart count for header badge
function getCartCount() {
    const cart = getCart();
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
}

// Update cart count in header
function updateCartCount() {
    const count = getCartCount();
    const badges = document.querySelectorAll('[data-cart-count]');
    
    badges.forEach(badge => {
        if (count > 0) {
            badge.textContent = count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

// Calculate shipping
function calculateShipping(subtotal) {
    return subtotal >= 99 ? 0 : 9.99;
}

// Format price
function formatPrice(amount) {
    return '$' + amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

// Show toast notification
function showToast(message, type = 'success') {
    // Remove existing toasts
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `toast-notification toast-${type}`;
    toast.innerHTML = `
        <span>${message}</span>
    `;
    document.body.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});
