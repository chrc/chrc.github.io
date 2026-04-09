// Gestion du panier avec localStorage

// Obtenir le panier
function getCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

// Sauvegarder le panier
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Ajouter un produit au panier
function addToCart(productId, quantity = 1) {
    const cart = getCart();
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ id: productId, quantity: quantity });
    }

    saveCart(cart);
}

// Retirer un produit du panier
function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    
    // Recharger la page panier si on est dessus
    if (window.location.pathname.includes('cart.html')) {
        location.reload();
    }
}

// Vider le panier
function clearCart() {
    localStorage.removeItem('cart');
    updateCartCount();
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCounts = document.querySelectorAll('.cart-count');
    cartCounts.forEach(count => {
        count.textContent = totalItems;
    });
}

// Obtenir le total du panier
function getCartTotal() {
    const cart = getCart();
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.id === item.id);
        if (product) {
            total += product.price * item.quantity;
        }
    });

    return total;
}

// Obtenir le nombre d'articles dans le panier
function getCartItemCount() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Initialiser le compteur au chargement de la page
document.addEventListener('DOMContentLoaded', updateCartCount);
