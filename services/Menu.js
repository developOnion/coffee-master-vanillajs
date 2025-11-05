import API from "./API.js";

export async function loadData() {
    coffeeApp.store.menu = await API.fetchMenu();
}

export async function getProductById(id) {
    if (coffeeApp.store.menu == null) {
        await loadData();
    }

    for (let category of coffeeApp.store.menu) {
        for (let product of category.products) {
            if (product.id == id) {
                return product;
            }
        }
    }

    return null;
}
