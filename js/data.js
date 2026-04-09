// Base de données des produits
const products = [
    {
        id: 1,
        name: "Bougie Lavande Provençale",
        scent: "Lavande",
        price: 24.90,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, huile essentielle de lavande",
        description: "Laissez-vous transporter dans les champs de lavande de Provence. Cette bougie offre un parfum apaisant et relaxant, idéal pour créer une ambiance zen dans votre intérieur.",
        color: "linear-gradient(135deg, #b4a7d6 0%, #9987c4 100%)",
        featured: true,
        reviews: 127
    },
    {
        id: 2,
        name: "Bougie Vanille Gourmande",
        scent: "Vanille",
        price: 22.50,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, extrait naturel de vanille",
        description: "Une senteur douce et réconfortante qui rappelle les gâteaux de grand-mère. Cette bougie vanille créera une atmosphère chaleureuse et accueillante.",
        color: "linear-gradient(135deg, #f5deb3 0%, #daa520 100%)",
        featured: true,
        reviews: 98
    },
    {
        id: 3,
        name: "Bougie Rose Délicate",
        scent: "Rose",
        price: 26.90,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, essence de rose de Damas",
        description: "Un parfum floral élégant et raffiné. Cette bougie à la rose apporte une touche de romantisme et de fraîcheur à votre espace.",
        color: "linear-gradient(135deg, #ffb6c1 0%, #ff69b4 100%)",
        featured: true,
        reviews: 85
    },
    {
        id: 4,
        name: "Bougie Eucalyptus Vivifiant",
        scent: "Eucalyptus",
        price: 23.90,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, huile essentielle d'eucalyptus",
        description: "Respirez profondément et laissez l'eucalyptus purifier votre espace. Parfait pour créer une ambiance spa à la maison.",
        color: "linear-gradient(135deg, #a8e6cf 0%, #56ab91 100%)",
        featured: true,
        reviews: 73
    },
    {
        id: 5,
        name: "Bougie Cannelle Épicée",
        scent: "Cannelle",
        price: 21.90,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, huile essentielle de cannelle",
        description: "Une fragrance chaleureuse et épicée qui évoque les fêtes de fin d'année. Idéale pour créer une atmosphère cosy et réconfortante.",
        color: "linear-gradient(135deg, #d2691e 0%, #8b4513 100%)",
        featured: false,
        reviews: 94
    },
    {
        id: 6,
        name: "Bougie Citron Frais",
        scent: "Citron",
        price: 19.90,
        size: "petite",
        weight: "100g",
        burnTime: "30h",
        composition: "Cire végétale de soja, essence de citron",
        description: "Un parfum frais et pétillant qui égaye instantanément votre intérieur. Parfaite pour la cuisine ou la salle de bain.",
        color: "linear-gradient(135deg, #fffacd 0%, #ffd700 100%)",
        featured: false,
        reviews: 62
    },
    {
        id: 7,
        name: "Bougie Lavande Premium",
        scent: "Lavande",
        price: 39.90,
        size: "grande",
        weight: "350g",
        burnTime: "80h",
        composition: "Cire végétale de soja premium, huile essentielle de lavande bio",
        description: "Notre bougie lavande grand format pour une expérience prolongée. Qualité premium avec une durée de combustion exceptionnelle.",
        color: "linear-gradient(135deg, #b4a7d6 0%, #7b68a2 100%)",
        featured: false,
        reviews: 156
    },
    {
        id: 8,
        name: "Bougie Vanille Intense",
        scent: "Vanille",
        price: 37.90,
        size: "grande",
        weight: "350g",
        burnTime: "80h",
        composition: "Cire végétale de soja, extrait naturel de vanille bourbon",
        description: "Une version intense de notre bougie vanille classique. Parfum puissant et longue durée pour les amateurs de vanille.",
        color: "linear-gradient(135deg, #f5deb3 0%, #cd853f 100%)",
        featured: false,
        reviews: 112
    },
    {
        id: 9,
        name: "Bougie Rose Romantique",
        scent: "Rose",
        price: 14.90,
        size: "petite",
        weight: "100g",
        burnTime: "30h",
        composition: "Cire végétale de soja, essence de rose",
        description: "Format pratique pour tester notre parfum rose. Idéale pour une chambre ou un petit espace.",
        color: "linear-gradient(135deg, #ffb6c1 0%, #ff1493 100%)",
        featured: false,
        reviews: 45
    },
    {
        id: 10,
        name: "Bougie Eucalyptus & Menthe",
        scent: "Eucalyptus",
        price: 38.90,
        size: "grande",
        weight: "350g",
        burnTime: "80h",
        composition: "Cire végétale de soja, huiles essentielles d'eucalyptus et menthe",
        description: "Un mélange rafraîchissant d'eucalyptus et de menthe. Parfait pour revitaliser votre espace et purifier l'air.",
        color: "linear-gradient(135deg, #a8e6cf 0%, #3d9970 100%)",
        featured: false,
        reviews: 89
    },
    {
        id: 11,
        name: "Bougie Cannelle Orange",
        scent: "Cannelle",
        price: 25.90,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, huiles essentielles de cannelle et orange",
        description: "Un délicieux mélange épicé et fruité. Cette bougie apporte chaleur et convivialité à votre foyer.",
        color: "linear-gradient(135deg, #ff8c00 0%, #ff4500 100%)",
        featured: false,
        reviews: 78
    },
    {
        id: 12,
        name: "Bougie Citron Verveine",
        scent: "Citron",
        price: 23.90,
        size: "moyenne",
        weight: "200g",
        burnTime: "45h",
        composition: "Cire végétale de soja, essences de citron et verveine",
        description: "Un accord frais et tonique qui stimule les sens. Idéale pour créer une ambiance énergisante.",
        color: "linear-gradient(135deg, #ffffe0 0%, #9acd32 100%)",
        featured: false,
        reviews: 91
    }
];

// Obtenir les produits en vedette
function getFeaturedProducts() {
    return products.filter(p => p.featured);
}

// Obtenir un produit par ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Obtenir les produits par parfum
function getProductsByScent(scent) {
    return products.filter(p => p.scent.toLowerCase() === scent.toLowerCase());
}
