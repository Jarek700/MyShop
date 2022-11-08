class Basket{
    constructor(){
        this.items = this.getItems() ?? [];  //jak nie null weź z local storage jak false pusta []
    }
    clearItems(){
        this.items.length = 0; 
        localStorage.removeItem('basket');     
        //this.items.splice(0);
        //this.items = [];
    }

    addItem(item){
        this.items.push(item);
        this.saveItems();
    }
    getWholeValue(){
            return this.items.reduce((prev,curr)=>prev+curr.price,0);   
    }
    display() {
        return this.items 
                .map((item,i)=>{
                    return{
                        id: i + 1,
                        text: `${i+1} - ${item.name} - ${item.price.toFixed(2)} zł`
                    }
                })

    }
    removeItem(id){
        this.items.splice(id - 1, 1);
        this.saveItems();
    }
    saveItems() {
        localStorage.setItem('basket', JSON.stringify(this.items));
    }
    getItems() {
        return this.items = JSON.parse(localStorage.getItem('basket'));
    }

}

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    setNewPrice(newPrice){
        this.price = newPrice;
    }
}