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
  //console.log('The target in remove is:', target);
  //... your code goes here
  const trProduct = target.parentNode.parentNode;
  //console.log('row: ', trProduct);
  const rowProduct = trProduct.parentNode;
  // console.log('row to remove is: ', rowProduct);
  rowProduct.removeChild(trProduct);
  calculateAll();
}

// ITERATION 5
//... your code goes here

function createProduct(event) {
  //Aqui primero localizamos los elementos del DOM de donde obtenemos los inputs de la tabla para crear un nuevo producto. Tambien definimos/espcificamos el tipo de valores que obtenemos: en este caso; un nombre de producto como text y un precio de producto como number.
  const createProductRow = document.querySelector('.create-product');
  let newProductName = createProductRow.querySelector('input');
  let productNameValue = newProductName.value;
  let newPriceInput = createProductRow.querySelector("input[type='number']");
  let priceValue = Number(newPriceInput.valueAsNumber).toFixed(2);

  //Ahora creamos los elementos HTML que van a llevar los valores que especificamos anteriormente. Asi que cremos una tr que contiene los campos que queremos mostrar: nombre de producto, precio, cantidad, subtotal y boton de eliminar.

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${productNameValue}</span>
    </td>
    <td class="price">$<span>${priceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;

  //Ahora, nos falta finalmente mostrar los elementos creados anteriormente en el DOM y para ello, primero localizamos el elemento parent que va a contener el elemento newTableRow como child(hijo)
  // get the parent of this newly created row
  const parent = document.querySelector('#cart tbody');

  // append the newly created row to the parent
  parent.appendChild(newTableRow);

  //En este punto, ya se muestra el producto creado, pero el boton remove no tiene funcionalidad, asi que la vamos a implementar llamando a la function removeProduct que creamos anteriormente.
  //Localizamos el boton en el DOM y que fue creado con el HTML newTableRow en la linea 91 y le pasamos el evento removeProduct cuando se hace click.
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  //BONUS: una pequena funcionalidad es limpiar los campos de la funcion "crear nuevo producto", despues de hacer click en el boton create product.

  newProductName.value = '';
  newPriceInput.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  //ITERATIO 4 remove button
  const removeBtns = document.querySelectorAll('.btn-remove');
  // console.log(removeBtns);
  for (let removeBtn of removeBtns) {
    removeBtn.addEventListener('click', removeProduct);
  }
  //ITERATION 5 create Product. Disparador para el create button.
  //Localizando el boton en el DOM
  const createBtn = document.getElementById('create');
  // Diciendole lo que tiene que hacer cuando se haga click y active la funcion crear producto.
  createBtn.addEventListener('click', createProduct);
});
