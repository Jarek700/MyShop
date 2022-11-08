const btnBuy = document.querySelectorAll('[data-name]');
const btnBuyTable = ([...btnBuy]);
const renderedBasket = document.querySelector('.basket-list');
const btnBuyAll = document.querySelector('.btn-buy-all')

const basket = new Basket();

const renderBasket = ()=>{
    renderedBasket.innerText = ""
    for (const oneItem of basket.display()) {
        const newLi = document.createElement('li');
        newLi.innerText = oneItem.text;
        newLi.addEventListener('click',removeItem)
        newLi.dataset.id = oneItem.id;
        renderedBasket.appendChild(newLi);
    }
    const basketTotalValue = basket.getWholeValue();
    btnBuyAll.innerText = `Zakup produkty ! za ${basketTotalValue.toFixed(2)} zł`

    btnBuyAll.disabled = basketTotalValue === 0;
    // if (basketTotalValue > 0){
    //     btnBuyAll.removeAttribute('disabled');
    // } else{
    //     btnBuyAll.setAttribute('disabled','true');
    // }
};

const addProductToBasket = event =>{    
        const name = event.target.dataset.name; 
        const price = Number(event.target.dataset.price);
        
        const newProduct = new Product(name,price);
        basket.addItem(newProduct);
        renderBasket();
}

for (const btn of btnBuyTable) {
    btn.addEventListener('click', addProductToBasket);
}

const buyAllItems=()=>{
    alert(`Kupiłeś produkty za ${basket.getWholeValue().toFixed(2)} zł`)
    basket.clearItems();
    renderBasket();
}

btnBuyAll.addEventListener('click',buyAllItems);

const removeItem = event =>{
    const id = Number(event.target.dataset.id);
    basket.removeItem(id);
    renderBasket();
}
renderBasket();