
const addToDb = (id) => {
    let shopingCart = {};
    const storedCard = localStorage.getItem('set-items');
        if (storedCard) {
            shopingCart = JSON.parse(storedCard);
        }
    const quantity = shopingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shopingCart[id] = newQuantity;
    }
    else {
        shopingCart[id] = 1
    }
    
    localStorage.setItem('set-items', JSON.stringify(shopingCart))
}

const removeFromDb = (id) => {
    const storedCard = localStorage.getItem('set-items');
    if (storedCard) {
        const shopingCart = JSON.parse(storedCard);
        if (id in shopingCart) {
            delete shopingCart[id];
            localStorage.setItem('set-items', JSON.stringify(shopingCart));
        }
    }     
}

export {addToDb, removeFromDb}