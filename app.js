import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// custom components
import DetailsPage from "./components/DetailsPage.js";
import MenuPage from "./components/MenuPage.js";
import OrderPage from "./components/OrderPage.js";
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

window.coffeeApp = {};
coffeeApp.store = Store;
coffeeApp.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
    await loadData();
    coffeeApp.router.init();
});

window.addEventListener("coffeeappcartchange", () => {
    const badge = document.getElementById("badge");
    const quantity = coffeeApp.store.cart.reduce(
        (accumalator, item) => accumalator + item.quantity,
        0
    );
    badge.textContent = quantity;
    badge.hidden = quantity == 0;
});
