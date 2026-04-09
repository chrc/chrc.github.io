// Gestion de la page produits avec filtres et tri

let filteredProducts = [...products];

// Afficher les produits
function displayProducts(productsToDisplay) {
    const container = document.getElementById('products-container');
    const productCount = document.getElementById('product-count');

    if (productsToDisplay.length === 0) {
        container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--secondary-color);"><h3>Aucun produit trouvé</h3><p>Essayez de modifier vos critères de recherche</p></div>';
        productCount.textContent = '0';
        return;
    }

    productCount.textContent = productsToDisplay.length;

    container.innerHTML = productsToDisplay.map(product => `
        <div class="product-card" data-id="${product.id}">
            <a href="product-detail.html?id=${product.id}">
                <div class="product-image" style="background: ${product.color};">
                    <span class="image-icon">🕯️</span>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="product-scent">${product.scent}</p>
                    <p class="product-price">${product.price.toFixed(2)} €</p>
                </div>
            </a>
            <button class="btn btn-secondary btn-small" onclick="addToCart(${product.id}); event.preventDefault(); showAddedNotification();">
                Ajouter au panier
            </button>
        </div>
    `).join('');
}

// Notification d'ajout au panier
function showAddedNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = '✓ Produit ajouté au panier';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Appliquer les filtres
function applyFilters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedScents = Array.from(document.querySelectorAll('.filter-scent:checked')).map(cb => cb.value);
    const selectedSizes = Array.from(document.querySelectorAll('.filter-size:checked')).map(cb => cb.value);
    const priceRange = document.querySelector('.filter-price:checked')?.value || 'all';

    filteredProducts = products.filter(product => {
        // Recherche textuelle
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.scent.toLowerCase().includes(searchTerm);

        // Filtre parfum
        const matchesScent = selectedScents.length === 0 || 
                            selectedScents.includes(product.scent.toLowerCase());

        // Filtre taille
        const matchesSize = selectedSizes.length === 0 || 
                           selectedSizes.includes(product.size);

        // Filtre prix
        let matchesPrice = true;
        if (priceRange !== 'all') {
            if (priceRange === '0-15') matchesPrice = product.price < 15;
            else if (priceRange === '15-25') matchesPrice = product.price >= 15 && product.price < 25;
            else if (priceRange === '25-40') matchesPrice = product.price >= 25 && product.price < 40;
            else if (priceRange === '40+') matchesPrice = product.price >= 40;
        }

        return matchesSearch && matchesScent && matchesSize && matchesPrice;
    });

    applySorting();
}

// Appliquer le tri
function applySorting() {
    const sortValue = document.getElementById('sort-select').value;

    switch(sortValue) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
            break;
        default:
            // Tri par défaut (ordre original)
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    displayProducts(filteredProducts);
}

// Réinitialiser les filtres
function clearFilters() {
    document.getElementById('search-input').value = '';
    document.querySelectorAll('.filter-scent').forEach(cb => cb.checked = false);
    document.querySelectorAll('.filter-size').forEach(cb => cb.checked = false);
    document.querySelector('.filter-price[value="all"]').checked = true;
    document.getElementById('sort-select').value = 'default';
    
    filteredProducts = [...products];
    displayProducts(filteredProducts);
}

// Initialiser la page produits
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si on est sur la page produits
    if (!document.getElementById('products-container')) return;

    // Afficher tous les produits au chargement
    displayProducts(products);

    // Écouteurs d'événements pour les filtres
    document.getElementById('search-input').addEventListener('input', applyFilters);
    
    document.querySelectorAll('.filter-scent, .filter-size, .filter-price').forEach(input => {
        input.addEventListener('change', applyFilters);
    });

    document.getElementById('sort-select').addEventListener('change', applySorting);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
});
