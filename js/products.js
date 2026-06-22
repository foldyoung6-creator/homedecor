// BuyVistas - Product Data
const PRODUCTS = [
    // Wall Art (5 products)
    {
        id: "prod-1",
        name: "Abstract Canvas Art",
        description: "Modern abstract canvas painting with gold accents. Perfect for contemporary living spaces. Hand-painted on premium cotton canvas with museum-quality framing.",
        price: 89,
        original_price: 129,
        image: "https://images.unsplash.com/photo-1767614373251-94259ec635f3?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1767614373251-94259ec635f3?w=600&q=80",
            "https://images.unsplash.com/photo-1769720195307-262ce0616c06?w=600&q=80"
        ],
        category: "Wall Art",
        rating: 4.7,
        reviews_count: 234,
        sold_count: 890,
        stock: 8,
        features: ["Hand-painted", "Premium canvas", "Ready to hang", "UV protected"],
        is_bestseller: true
    },
    {
        id: "prod-2",
        name: "Minimalist Line Art Set",
        description: "Set of 3 minimalist line art prints featuring feminine silhouettes. Printed on archival matte paper.",
        price: 49,
        original_price: 69,
        image: "https://images.unsplash.com/photo-1758192178254-f4e4dbc1d754?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1758192178254-f4e4dbc1d754?w=600&q=80"
        ],
        category: "Wall Art",
        rating: 4.5,
        reviews_count: 156,
        sold_count: 567,
        stock: 15,
        features: ["Set of 3", "Archival paper", "Includes frames", "Versatile sizing"],
        is_bestseller: false
    },
    {
        id: "prod-3",
        name: "Botanical Print Collection",
        description: "Vintage botanical illustrations printed on premium textured paper. Elegant addition to any room.",
        price: 69,
        original_price: 89,
        image: "https://images.pexels.com/photos/1223341/pexels-photo-1223341.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/1223341/pexels-photo-1223341.jpeg?auto=compress&w=600"
        ],
        category: "Wall Art",
        rating: 4.6,
        reviews_count: 189,
        sold_count: 432,
        stock: 12,
        features: ["Vintage design", "Textured paper", "Set of 4", "Gold frames"],
        is_bestseller: false
    },
    {
        id: "prod-4",
        name: "Gold Geometric Wall Art",
        description: "3D geometric metal wall sculpture with brushed gold finish. Statement piece for modern interiors.",
        price: 149,
        original_price: 199,
        image: "https://images.pexels.com/photos/1750597/pexels-photo-1750597.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/1750597/pexels-photo-1750597.jpeg?auto=compress&w=600"
        ],
        category: "Wall Art",
        rating: 4.8,
        reviews_count: 98,
        sold_count: 234,
        stock: 5,
        features: ["3D design", "Brushed gold", "Premium metal", "Easy mounting"],
        is_bestseller: true
    },
    {
        id: "prod-5",
        name: "Macrame Wall Hanging",
        description: "Handwoven macrame wall hanging in natural cotton. Bohemian elegance for any space.",
        price: 59,
        original_price: 79,
        image: "https://images.unsplash.com/photo-1590422749897-47036da0b0ff?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1590422749897-47036da0b0ff?w=600&q=80"
        ],
        category: "Wall Art",
        rating: 4.4,
        reviews_count: 267,
        sold_count: 789,
        stock: 20,
        features: ["Handwoven", "Natural cotton", "Bohemian style", "Includes dowel"],
        is_bestseller: false
    },
    // Lighting (5 products)
    {
        id: "prod-6",
        name: "Modern Pendant Light",
        description: "Elegant pendant light with brass finish and frosted glass shade. Perfect ambient lighting.",
        price: 119,
        original_price: 159,
        image: "https://images.unsplash.com/photo-1758983304673-5a2d091e43e2?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1758983304673-5a2d091e43e2?w=600&q=80"
        ],
        category: "Lighting",
        rating: 4.7,
        reviews_count: 312,
        sold_count: 678,
        stock: 7,
        features: ["Brass finish", "Frosted glass", "Dimmable", "E27 bulb"],
        is_bestseller: true
    },
    {
        id: "prod-7",
        name: "Rattan Table Lamp",
        description: "Natural rattan table lamp with linen shade. Brings warmth and texture to any space.",
        price: 79,
        original_price: 99,
        image: "https://images.pexels.com/photos/1955549/pexels-photo-1955549.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/1955549/pexels-photo-1955549.jpeg?auto=compress&w=600"
        ],
        category: "Lighting",
        rating: 4.5,
        reviews_count: 198,
        sold_count: 456,
        stock: 11,
        features: ["Natural rattan", "Linen shade", "Warm light", "Touch dimmer"],
        is_bestseller: false
    },
    {
        id: "prod-8",
        name: "Crystal Chandelier Mini",
        description: "Compact crystal chandelier with gold accents. Adds glamour to dining areas and bedrooms.",
        price: 179,
        original_price: 239,
        image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80"
        ],
        category: "Lighting",
        rating: 4.9,
        reviews_count: 87,
        sold_count: 189,
        stock: 4,
        features: ["Crystal drops", "Gold finish", "5 lights", "LED compatible"],
        is_bestseller: true
    },
    {
        id: "prod-9",
        name: "Floor Lamp Arc",
        description: "Contemporary arc floor lamp with marble base. Statement lighting for living rooms.",
        price: 139,
        original_price: 169,
        image: "https://images.unsplash.com/photo-1768203628304-adebd5b8107a?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1768203628304-adebd5b8107a?w=600&q=80"
        ],
        category: "Lighting",
        rating: 4.6,
        reviews_count: 145,
        sold_count: 312,
        stock: 6,
        features: ["Marble base", "Arc design", "Adjustable height", "Foot switch"],
        is_bestseller: false
    },
    {
        id: "prod-10",
        name: "Wall Sconce Pair",
        description: "Set of 2 elegant wall sconces in antique brass. Perfect bedside or hallway lighting.",
        price: 89,
        original_price: 109,
        image: "https://images.unsplash.com/photo-1762423760466-2bb5a3eec495?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1762423760466-2bb5a3eec495?w=600&q=80"
        ],
        category: "Lighting",
        rating: 4.5,
        reviews_count: 176,
        sold_count: 398,
        stock: 9,
        features: ["Set of 2", "Antique brass", "Hardwired", "Candle style"],
        is_bestseller: false
    },
    // Decor (5 products)
    {
        id: "prod-11",
        name: "Ceramic Vase Set",
        description: "Set of 3 handcrafted ceramic vases in earthy tones. Perfect for dried flowers or standalone.",
        price: 49,
        original_price: 69,
        image: "https://images.unsplash.com/photo-1772632696551-3eafa2d76490?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1772632696551-3eafa2d76490?w=600&q=80"
        ],
        category: "Decor",
        rating: 4.6,
        reviews_count: 289,
        sold_count: 912,
        stock: 18,
        features: ["Set of 3", "Handcrafted", "Matte finish", "Various sizes"],
        is_bestseller: true
    },
    {
        id: "prod-12",
        name: "Decorative Tray Gold",
        description: "Elegant gold decorative tray for coffee table styling. Mirrored base with brass handles.",
        price: 39,
        original_price: 55,
        image: "https://images.unsplash.com/photo-1759929152860-136c760f17d4?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1759929152860-136c760f17d4?w=600&q=80"
        ],
        category: "Decor",
        rating: 4.4,
        reviews_count: 198,
        sold_count: 567,
        stock: 22,
        features: ["Mirrored base", "Brass handles", "Rectangular", "Scratch resistant"],
        is_bestseller: false
    },
    {
        id: "prod-13",
        name: "Marble Bookends",
        description: "Pair of natural white marble bookends with gold veining. Sophisticated desk accessory.",
        price: 65,
        original_price: 85,
        image: "https://images.unsplash.com/photo-1721190601155-1b98d316bbe2?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1721190601155-1b98d316bbe2?w=600&q=80"
        ],
        category: "Decor",
        rating: 4.7,
        reviews_count: 134,
        sold_count: 345,
        stock: 14,
        features: ["Natural marble", "Gold veining", "Heavy duty", "Felt bottom"],
        is_bestseller: false
    },
    {
        id: "prod-14",
        name: "Candle Holder Set",
        description: "Set of 5 glass candle holders in varying heights. Creates beautiful ambient lighting.",
        price: 35,
        original_price: 45,
        image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&q=80"
        ],
        category: "Decor",
        rating: 4.5,
        reviews_count: 245,
        sold_count: 789,
        stock: 25,
        features: ["Set of 5", "Clear glass", "Various heights", "Includes candles"],
        is_bestseller: true
    },
    {
        id: "prod-15",
        name: "Decorative Sphere Set",
        description: "Set of decorative orbs in gold, silver, and bronze. Perfect for bowl displays.",
        price: 29,
        original_price: 39,
        image: "https://images.unsplash.com/photo-1762553395050-ec394919a6ea?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1762553395050-ec394919a6ea?w=600&q=80"
        ],
        category: "Decor",
        rating: 4.3,
        reviews_count: 167,
        sold_count: 423,
        stock: 30,
        features: ["Set of 6", "Mixed metals", "Various sizes", "Lightweight"],
        is_bestseller: false
    },
    // Furniture (4 products)
    {
        id: "prod-16",
        name: "Accent Chair Velvet",
        description: "Luxurious velvet accent chair in sage green. Gold metal legs and button tufting.",
        price: 499,
        original_price: 649,
        image: "https://images.pexels.com/photos/5829911/pexels-photo-5829911.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/5829911/pexels-photo-5829911.jpeg?auto=compress&w=600"
        ],
        category: "Furniture",
        rating: 4.8,
        reviews_count: 89,
        sold_count: 167,
        stock: 3,
        features: ["Velvet upholstery", "Gold legs", "Button tufted", "Ergonomic"],
        is_bestseller: true
    },
    {
        id: "prod-17",
        name: "Marble Side Table",
        description: "Round marble top side table with brass legs. Perfect bedside or living room accent.",
        price: 199,
        original_price: 259,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80"
        ],
        category: "Furniture",
        rating: 4.7,
        reviews_count: 112,
        sold_count: 234,
        stock: 5,
        features: ["Marble top", "Brass legs", "Round design", "Sturdy build"],
        is_bestseller: false
    },
    {
        id: "prod-18",
        name: "Console Table Oak",
        description: "Scandinavian oak console table with two drawers. Ideal entryway or hallway furniture.",
        price: 349,
        original_price: 429,
        image: "https://images.unsplash.com/photo-1771316210386-39662a3b28fe?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1771316210386-39662a3b28fe?w=600&q=80"
        ],
        category: "Furniture",
        rating: 4.6,
        reviews_count: 78,
        sold_count: 145,
        stock: 4,
        features: ["Solid oak", "Two drawers", "Scandinavian design", "Easy assembly"],
        is_bestseller: false
    },
    {
        id: "prod-19",
        name: "Ottoman Storage",
        description: "Tufted velvet storage ottoman in cream. Hidden storage meets elegant seating.",
        price: 159,
        original_price: 199,
        image: "https://images.unsplash.com/photo-1638191376884-f371a22c719f?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1638191376884-f371a22c719f?w=600&q=80"
        ],
        category: "Furniture",
        rating: 4.5,
        reviews_count: 156,
        sold_count: 312,
        stock: 8,
        features: ["Hidden storage", "Velvet tufted", "Gold feet", "Soft close hinge"],
        is_bestseller: false
    },
    // Kitchen (3 products)
    {
        id: "prod-20",
        name: "Ceramic Dinnerware Set",
        description: "16-piece stoneware dinnerware set in matte cream. Modern rustic elegance for your table.",
        price: 139,
        original_price: 179,
        image: "https://images.pexels.com/photos/5256532/pexels-photo-5256532.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/5256532/pexels-photo-5256532.jpeg?auto=compress&w=600"
        ],
        category: "Kitchen",
        rating: 4.7,
        reviews_count: 234,
        sold_count: 567,
        stock: 10,
        features: ["16 pieces", "Stoneware", "Dishwasher safe", "Microwave safe"],
        is_bestseller: true
    },
    {
        id: "prod-21",
        name: "Glass Canisters Set",
        description: "Set of 4 glass storage canisters with bamboo lids. Organize your pantry beautifully.",
        price: 49,
        original_price: 65,
        image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80"
        ],
        category: "Kitchen",
        rating: 4.5,
        reviews_count: 189,
        sold_count: 423,
        stock: 16,
        features: ["Set of 4", "Bamboo lids", "Airtight seal", "Various sizes"],
        is_bestseller: false
    },
    {
        id: "prod-22",
        name: "Wooden Cutting Board",
        description: "Premium acacia wood cutting board with juice groove. Beautiful and functional.",
        price: 69,
        original_price: 89,
        image: "https://images.pexels.com/photos/10410282/pexels-photo-10410282.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/10410282/pexels-photo-10410282.jpeg?auto=compress&w=600"
        ],
        category: "Kitchen",
        rating: 4.6,
        reviews_count: 145,
        sold_count: 289,
        stock: 13,
        features: ["Acacia wood", "Juice groove", "Large size", "Hand finished"],
        is_bestseller: false
    },
    // Bedroom (3 products)
    {
        id: "prod-23",
        name: "Linen Bedding Set",
        description: "Premium linen bedding set in natural oatmeal. Includes duvet cover and 2 pillowcases.",
        price: 239,
        original_price: 319,
        image: "https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/3755590/pexels-photo-3755590.jpeg?auto=compress&w=600"
        ],
        category: "Bedroom",
        rating: 4.8,
        reviews_count: 312,
        sold_count: 678,
        stock: 7,
        features: ["100% linen", "Pre-washed", "King size", "Button closure"],
        is_bestseller: true
    },
    {
        id: "prod-24",
        name: "Throw Blanket Chunky",
        description: "Hand-knitted chunky throw blanket in cream. Cozy accent for beds and sofas.",
        price: 99,
        original_price: 129,
        image: "https://images.unsplash.com/photo-1766245456897-5c86726d084d?w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1766245456897-5c86726d084d?w=600&q=80"
        ],
        category: "Bedroom",
        rating: 4.6,
        reviews_count: 234,
        sold_count: 512,
        stock: 11,
        features: ["Hand-knitted", "Chunky weave", "50x60 inches", "Machine washable"],
        is_bestseller: false
    },
    {
        id: "prod-25",
        name: "Velvet Cushion Set",
        description: "Set of 4 velvet cushion covers in earthy tones. Includes covers only.",
        price: 59,
        original_price: 79,
        image: "https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&w=600",
        images: [
            "https://images.pexels.com/photos/707581/pexels-photo-707581.jpeg?auto=compress&w=600"
        ],
        category: "Bedroom",
        rating: 4.5,
        reviews_count: 198,
        sold_count: 445,
        stock: 19,
        features: ["Set of 4", "Velvet fabric", "Hidden zipper", "18x18 inches"],
        is_bestseller: false
    }
];

// Get all unique categories
const CATEGORIES = [...new Set(PRODUCTS.map(p => p.category))];

// Get bestseller products
function getBestsellers() {
    return PRODUCTS.filter(p => p.is_bestseller);
}

// Get products by category
function getProductsByCategory(category) {
    if (!category || category === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === category);
}

// Get product by ID
function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

// Search products
function searchProducts(query) {
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];
    switch(sortBy) {
        case 'price_low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price_high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'popularity':
            return sorted.sort((a, b) => b.sold_count - a.sold_count);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        default:
            return sorted;
    }
}

// Category images for homepage
const CATEGORY_IMAGES = {
    'Wall Art': 'https://images.unsplash.com/photo-1767614373251-94259ec635f3?w=600',
    'Lighting': 'https://images.unsplash.com/photo-1680358863120-3dfeb398c523?w=600',
    'Decor': 'https://images.unsplash.com/photo-1761330439582-c7fd39368cff?w=600',
    'Furniture': 'https://images.unsplash.com/photo-1759722667394-000072b59a3a?w=600',
    'Kitchen': 'https://images.unsplash.com/photo-1607791776974-5c30b43ac181?w=600',
    'Bedroom': 'https://images.unsplash.com/photo-1744974256549-8ece7cdb5dd2?w=600'
};
