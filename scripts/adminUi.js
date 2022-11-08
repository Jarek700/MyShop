const addProductForm = document.querySelector('.form-add-product')
const nameInput = document.querySelector('[name="product-name"]')
const priceInput = document.querySelector('[name="product-price"]')
const prodctsList = document.querySelector('.products-list')

const saveProducts = (name, price) => {
    const existingProductsList = JSON.parse(localStorage.getItem('products')) ?? [];
    existingProductsList.push({ name, price });
    localStorage.setItem('products', JSON.stringify(existingProductsList));
}

const addProductToShop = (name, price) => {

    const newLi = document.createElement('li');

    const newStrong = document.createElement('strong');
    newStrong.innerHTML = `'${name}'`;

    const newPriceText = document.createTextNode(` - ${price.toFixed(2)} `);

    const newButton = document.createElement('button');
    newButton.classList.add('btn-buy');
    newButton.dataset.name = name;
    newButton.dataset.price = String(price);
    newButton.innerText = 'Dodaj do Koszyka';
    newButton.addEventListener('click', addProductToBasket);

    newLi.appendChild(newStrong);
    newLi.appendChild(newPriceText);
    newLi.appendChild(newButton);

    prodctsList.appendChild(newLi);
}

const renderProductsList = () => {
    const existingProductsList = JSON.parse(localStorage.getItem('products')) ?? [];
    for (const product of existingProductsList) {
        const { name, price } = product;
        addProductToShop(name, price);
    }
}

const handleAddProductFormSubmit = event => {
    event.preventDefault();

    const name = nameInput.value;
    const price = Number(priceInput.value);

    addProductToShop(name, price);
    saveProducts(name, price);
}

addProductForm.addEventListener('submit', handleAddProductFormSubmit)

renderProductsList();

