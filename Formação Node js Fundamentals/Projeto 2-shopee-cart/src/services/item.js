async function createItem(name, price, quantity) {
    const item = {
        name,
        price,
        quantity,
    };

    item.subtotal = () => item.price * item.quantity;

    return item;
}

export default createItem;
