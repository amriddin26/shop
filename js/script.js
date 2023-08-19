const card = document.querySelectorAll('.cart');
const total = document.querySelector('.total b');

//

const totalPrice = () => {
    let price = 0;
    for (let i = 0; i < card.length; i++) {
        const attribute = card[i].getAttribute('data-price');
        if (card[i].classList.contains('cart-active')) {
            price += +attribute;
        }
    }
    total.innerHTML = price + '$';
};

card.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('cart-active');
        totalPrice();
    });
});