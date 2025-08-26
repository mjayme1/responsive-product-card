document.addEventListener('DOMContentLoaded', function() {
    const itemsInCart = document.querySelector('.header__cart-items');

    if (parseInt(itemsInCart.textContent) === 0) {
        itemsInCart.classList.add('hidden');
    }

    const products = [
        {
            id: 1,
            name: "The North Face",
            description: "Stormbreak 1 Person Camping Tent",
            price: 229.99,
            image: "assets/products-images/tnf-stormbreak-1-tent.webp",   
            image2: "assets/products-images/tnf-stormbreak-1-tent-without-cover.webp",
            alt: "The North Face Stormbreak 1 Person Camping Tent",
            alt2: "The North Face Stormbreak 1 person camping tent without rain fly, showing tent structure and mesh ventilation",
            rating: 4.3,
            reviews: 181
        },
        {
            id: 2,
            name: "Zenbivy",
            description: "Flex™ Air Mattress",
            price: 156.75,
            image: "assets/products-images/flex-air-mattress-main.webp",
            image2: "assets/products-images/flex-air-mattress-angle-verticle.webp",
            alt: "Zenbivy Flex Air Mattress inflated",   
            alt2: "Zenbivy Flex Air Mattress shown from vertical angle, displaying thickness",
            rating: 4.5,
            reviews: 49
        },
        {
            id: 3,
            name: "Zenbivy",
            description: "Universal Sheet 30º Synthetic",
            price: 65,
            image: "assets/products-images/universal-sheet-synthetic.webp",
            image2: "assets/products-images/universal-sheet-synthetic-zip-detail.webp",
            alt: "Zenbivy Universal Sheet 30º Synthetic sleeping bag in neon green color",
            alt2: "Zenbivy Universal Sheet showing zip detail",
            rating: 4.5,
            reviews: 9
        },
        {
            id: 4,
            name: "Zenbivy",
            description: "Ultralight Quilt Muscovy Down",
            price: 288.15,
            image: "assets/products-images/ultralight-quilt-muscovy-down-fill.webp",
            image2: "assets/products-images/ultralight-quilt-muscovy-down-fill-logo-detail.webp",
            alt: "Zenbivy Ultralight Quilt Muscovy Down",
            alt2: "Zenbivy Ultralight Quilt Muscovy Down bottom logo detail",
            rating: 4.5,
            reviews: 77
        },
        {
            id: 5,
            name: "Marmot",
            description: "Marmot Trestles Eco Elite Sleeping Bag",
            price: 259,
            image: "assets/products-images/marmot-trestles-eco-elite-sleeping-bag.webp",
            image2: "assets/products-images/marmot-trestles-eco-elite-sleeping-bag-opened.webp",
            alt: "Marmot Trestles Eco Elite Sleeping Bag",
            alt2: "Marmot Trestles Eco Elite Sleeping Bag opened",
            rating: 5,
            reviews: 45
        },
        {
            id: 6,
            name: "Sea to Summit",
            description: "Flex™ 3D Mattress",
            price: 159.99,
            image: "assets/products-images/flex-3d-mattress.webp",
            image2: "assets/products-images/flex-3d-mattress-angle-verticle.webp",
            alt: "Sea to Summit Flex 3D Mattress",
            alt2: "Sea to Summit Flex 3D Mattress shown from vertical angle, displaying thickness",
            rating: 4,
            reviews: 5
        },
        {
            id: 7,  
            name: "Zenbivy",
            description: "Ultralight Pillow (Pillowcase + Air Bladder)", 
            price: 30,
            image: "assets/products-images/ultralight-pillow.webp",
            image2: "assets/products-images/ultralight-pillow-contents.webp",
            alt: "Zenbivy Ultralight Pillow",
            alt2: "Zenbivy Ultralight Pillow opened showing the pillowcase and pillow air bladder inside",
            rating: 5,
            reviews: 5
        },
        {
            id: 8,  
            name: "Jetboil",
            description: "Jetboil Flash 0.8L Fast Boil System",
            price: 179.99,
            image: "assets/products-images/jetboil-flash-1l-fast-boil-system.webp",
            image2: "assets/products-images/jetboil-flash-1l-fast-boil-system-box.webp",
            alt: "Jetboil Flash 0.8L Fast Boil System",
            alt2: "Jetboil Flash 0.8L Fast Boil System box",
            rating: 4.8,
            reviews: 135
        },
        {
            id: 9,  
            name: "Grayl",
            description: "Grayl Ultra Press 0.5L Purifier",
            price: 124.95,
            image: "assets/products-images/grayl-ultra-press-purifier.webp",
            image2: "assets/products-images/grayl-ultra-press-purifier-contents.webp",
            alt: "Grayl Ultra Press Purifier",
            alt2: "Grayl Ultra Press Purifier opened showing the components",
            rating: 4.5,
            reviews: 18
        },
    ];

    function renderProducts() {
        const productCardsContainer = document.querySelector('.product-cards');
        productCardsContainer.innerHTML = '';

        products.forEach(product => {
            const priceString = product.price.toString();
            const priceParts = priceString.split('.');
            const dollars = priceParts[0];
            const cents = priceParts[1] || '00';
            
            const productCard = `
                <article class="product-card" data-product-id="${product.id}">  
                    <a href="#" class="product-card__image-link" aria-label="Product Image">
                        <img src="${product.image}" 
                            srcset="${product.image.replace('.webp', '-480w.webp')} 480w,
                                    ${product.image.replace('.webp', '-800w.webp')} 800w,
                                    ${product.image} 1200w"
                            sizes="(max-width: 768px) 480px, 
                                    (max-width: 1024px) 800px, 
                                    1200px"
                            alt="${product.alt}" 
                            class="product-card__image product-card__image--primary" 
                            width="440" 
                            height="440"
                            loading="lazy">
                    ${product.image2 ? `
                        <img src="${product.image2}" 
                            srcset="${product.image2.replace('.webp', '-480w.webp')} 480w,
                                    ${product.image2.replace('.webp', '-800w.webp')} 800w,
                                    ${product.image2} 1200w"
                            sizes="(max-width: 768px) 480px, 
                                    (max-width: 1024px) 800px, 
                                    1200px"
                            alt="${product.alt2 || product.alt}" 
                            class="product-card__image product-card__image--secondary" 
                            width="440" 
                            height="440"
                            loading="lazy"> 
                        ` : ''}
                    </a>
                    <div class="product-card__content">
                        <span class="product-card__name">${product.name}</span>
                        <h3 class="product-card__desc">
                            <a href="#" aria-label="Product Description">${product.description}</a>
                        </h3>
                        <p class="product-card__price" aria-label="Price">
                            <span class="product-card__price-currency">$</span>
                            <span class="product-card__price-value">${dollars}</span>
                            <span class="product-card__price-decimal">.${cents}</span>
                        </p>
                        <p class="product-card__rating">
                            <span class="product-card__rating-stars">
                                ${generateStarRating(product.rating)}
                            </span>
                            <span class="product-card__rating-reviews">
                                (<a href="#" aria-label="Number of Reviews">${product.reviews}</a>)
                            </span>
                        </p>
                        <button class="product-card__add-to-cart-btn" type="button" data-product-id="${product.id}">
                            <img src="assets/icons/cart-shopping-solid-white-full.svg" width="20" height="20" alt="Cart Icon">
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </article>
            `;
            productCardsContainer.innerHTML += productCard;
        });

        attachAddToCartListeners();
    }

    function attachAddToCartListeners() {
        const addToCartBtns = document.querySelectorAll('.product-card__add-to-cart-btn');
        
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const originalContent = btn.innerHTML;
                
                btn.innerHTML = `<div class="loading-spinner"></div>`;
                btn.disabled = true;
                
                setTimeout(() => {
                    let currentCount = parseInt(itemsInCart.textContent) || 0;
                    currentCount += 1;
                    
                    itemsInCart.textContent = currentCount;
                    itemsInCart.classList.remove('hidden');
                    
                    btn.innerHTML = `
                        <img src="assets/icons/circle-check-solid-full.svg" width="20" height="20" alt="Checkmark">
                        <span>Added to Cart</span>
                    `;
                    btn.classList.add('success');
                    
                    setTimeout(() => {
                        btn.innerHTML = originalContent;
                        btn.disabled = false;
                        btn.classList.remove('success');
                    }, 2000);
                    
                }, 1000);   
            });
        });
    }

    function generateStarRating(rating) {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<img src="assets/icons/star-solid-full.svg" width="20" height="20" alt="Full Star">';
        }
        
        if (hasHalfStar) {
            starsHTML += '<img src="assets/icons/star-half-stroke-solid-full.svg" width="20" height="20" alt="Half Star">';
        }
        
        const outlineStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < outlineStars; i++) {
            starsHTML += '<img src="assets/icons/star-regular-full.svg" width="20" height="20" alt="Outline Star">';
        }
        
        return starsHTML;
    }

    renderProducts();
});