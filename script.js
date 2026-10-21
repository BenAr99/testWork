const variants = {
  100: {
    sku: '01306',
    price: '326,40 ₽',
    oldPrice: '349,20 ₽',
    discount: '−7%',
  },
  500: {
    sku: '01307',
    price: '1 432 ₽',
    oldPrice: '1 646 ₽',
    discount: '−13%',
  },
  1000: {
    sku: '01308',
    price: '2 064 ₽',
    oldPrice: '2 592 ₽',
    discount: '−20%',
  },
  5000: {
    sku: '01309',
    price: '6 320 ₽',
    oldPrice: '8 710 ₽',
    discount: '−27%',
  },
};

const weightInputs = document.querySelectorAll('input[name="weight"]');
const sku = document.querySelector('#sku');
const price = document.querySelector('#price');
const oldPrice = document.querySelector('#old-price');
const discount = document.querySelector('#discount');
const priceWeight = document.querySelector('#price-weight');

function updateProduct(weight) {
  const variant = variants[weight];

  sku.textContent = variant.sku;
  price.textContent = variant.price;
  oldPrice.textContent = variant.oldPrice;
  discount.textContent = variant.discount;
  priceWeight.textContent = `за ${weight} г`;
}

weightInputs.forEach((input) => {
  input.addEventListener('change', () => {
    updateProduct(input.value);
  });
});

updateProduct(document.querySelector('input[name="weight"]:checked').value);
