async function addItem(userCart, item) {
    userCart.push(item);
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name); //se o nome não estiver contido, a função findeIndex retorna -1
    
    if (index != -1){
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name === item.name)

    if (indexFound == -1){
        console.log("Produto não encontrado no carrinho");
    }else if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity--;
    }else{
        userCart.splice(indexFound, 1);
    }
}

async function calculateTotal(userCart) {
    console.log("\nTotal do carrinho da Shopee:");
    console.log("🛒 Total: R$" + (userCart.reduce((total, item) => total + item.subtotal(), 0)));
}

async function displayCart(userCart) {
    console.log("\n📝 Lista do carrinho Shopee: ");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal = R$${item.subtotal()}`);
    });
}

export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal, 
    displayCart,
}