
let cart = [];

function updateCartCount() {
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const cartLink = document.getElementById('cart-link');
    if (cartLink) {
        cartLink.innerHTML = `Cart (${count})`;
    }
}

function addToCart(item, price, quantity) {
    quantity = parseInt(quantity) || 1;
    cart.push({ item, price: price * quantity, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(quantity + ' ' + item + '(s) added to cart!');
}

window.onload = () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    if (document.getElementById('cart-items')) {
        let list = document.getElementById('cart-items');
        let total = 0;
        cart.forEach(i => {
            let li = document.createElement('li');
            li.textContent = i.quantity + " x " + i.item + " - GHS " + i.price;
            list.appendChild(li);
            total += i.price;
        });
        document.getElementById('total').textContent = total;
    }
};
function orderNow() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }
    alert("Thank you for your order! Our team will contact you soon.");
    cart = [];
    localStorage.removeItem('cart');
    updateCartCount();
    if (document.getElementById('cart-items')) {
        document.getElementById('cart-items').innerHTML = '';
        document.getElementById('total').textContent = '0';
    }
}

function clearCart() {
    if (confirm("Are you sure you want to clear the cart?")) {
        cart = [];
        localStorage.removeItem('cart');
        updateCartCount();
        if (document.getElementById('cart-items')) {
            document.getElementById('cart-items').innerHTML = '';
            document.getElementById('total').textContent = '0';
        }
    }
}
window.onload = () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartCount();

    if (document.getElementById('cart-items')) {
        let list = document.getElementById('cart-items');
        let total = 0;
        cart.forEach(i => {
            let itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';

            itemDiv.innerHTML = `
                <img src="${i.image}" alt="${i.item}" class="cart-img">
                <div>
                    <strong>${i.item}</strong><br>
                    Quantity: ${i.quantity}<br>
                    Price: GHS ${i.price}
                </div>
            `;
            list.appendChild(itemDiv);
            total += i.price;
        });
        document.getElementById('total').textContent = total;
    }
};

function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    if (email && password) {
      alert('Login successful!');
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    if (name && email && password) {
      alert('Signup successful! You can now log in.');
    } else {
      alert('Please complete all fields.');
    }
  }
  