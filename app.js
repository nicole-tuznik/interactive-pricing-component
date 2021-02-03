const slider = document.querySelector('.plan__slider');
let views = document.querySelector('.plan__pageviews');
let price = document.querySelector('.plan--lg-text');
const toggle = document.querySelector('.billing__toggle');

let billing = [
  {views: '10K', price: '8'},
  {views: '50K', price: '12'},
  {views: '100K', price: '16'},
  {views: '500K', price: '24'},
  {views: '1M', price: '36'}
];

slider.addEventListener('input', changePrice);
toggle.addEventListener('click', changePrice);

function changePrice() {
  let i = slider.value;
  let currentBilling = billing[i];
  console.log(i);

  views.innerHTML = `${currentBilling.views} pageviews`;

  if(!toggle.checked) {
  price.innerHTML = `$${currentBilling.price}.00`;
  } else {
    price.innerHTML = '$' + parseInt(currentBilling.price) * 0.75 + '.00';
    console.log(parseInt(currentBilling.price) * 10);
  };
};