import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const myCart = [];

console.log("Bem vindo ao carrinho da Shopee");

const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//await cartService.deleteItem(myCart, item2.name);

await cartService.removeItem(myCart, item2);

await cartService.displayCart(myCart);
await cartService.calculateTotal(myCart);

 