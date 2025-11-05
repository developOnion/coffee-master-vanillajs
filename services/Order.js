import { getProductById } from "./Menu.js";

export async function addToCart(id) {
    const product = await getProductById(id);
    const results = coffeeApp.store.cart.filter(
        (productInCart) => productInCart.product.id === id
    );

    if (results.length == 1) {
        coffeeApp.store.cart = coffeeApp.store.cart.map((p) =>
            p.product.id == id ? { ...p, quantity: p.quantity + 1 } : p
        );
    } else {
        coffeeApp.store.cart = [
            ...coffeeApp.store.cart,
            { product, quantity: 1 },
        ];
    }
}

export function removeFromCart(id) {
    coffeeApp.store.cart = coffeeApp.store.cart.filter(
        (p) => p.product.id !== id
    );
}
