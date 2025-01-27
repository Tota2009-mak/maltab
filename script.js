// Initialize cart count
let cartCount = 0;

// Add event listeners to all "Add to Cart" buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        alert('Book added to cart!');
        updateCartCounter();
    });
});

// Update cart counter
function updateCartCounter() {
    if (!document.querySelector('.cart-counter')) {
        const counter = document.createElement('div');
        counter.classList.add('cart-counter');
        document.body.appendChild(counter);
    }
    const counter = document.querySelector('.cart-counter');
    counter.textContent = `Cart: ${cartCount}`;
    counter.style.position = 'fixed';
    counter.style.top = '10px';
    counter.style.right = '10px';
    counter.style.backgroundColor = '#4CAF50';
    counter.style.color = 'white';
    counter.style.padding = '0.5rem 1rem';
    counter.style.borderRadius = '5px';
    counter.style.fontSize = '1rem';
}
