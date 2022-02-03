// ITERATION 1

function updateSubtotal(product) {
  //getting dom elements
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  //getiing the values
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;

  //Calculate  subtotal
  const subTotalValue = priceValue * quantityValue;

  //getting DOM element subtotal
  const subtotal = product.querySelector('.subtotal span');

  // Setting subtotal in the DOM element subtotal
  subtotal.innerHTML = subTotalValue;
  return subTotalValue;

  // console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2

  // getting DOM elements by class for each product
  const products = document.getElementsByClassName('product');
  // console.log(products);
  //Calling the function updateSubtotal to iterat on every tr.product and setting it into a variable.
  let eachSubtotal = 0;
  for (const eachProductSubt of products) {
    eachSubtotal += updateSubtotal(eachProductSubt);
    //it works with += too. Investigate the diference.
    console.log(eachSubtotal);
  }

  // ITERATION 3
  //Putting the total value of all products. Careful: if we don't return subtotalValue in updateSubtotal function, we get NaN response.
  let totalValueProducts = document.querySelector('#total-value span');
  totalValueProducts.innerHTML = eachSubtotal;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const trProduct = target.parentNode.parentNode;
  //console.log('row: ', trProduct);
  const rowProduct = trProduct.parentNode;
  // console.log('row to remove is: ', rowProduct);
  rowProduct.removeChild(trProduct);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.querySelectorAll('.btn-remove');
  // console.log(removeBtns);
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }
});
