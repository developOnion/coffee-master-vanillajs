const Router = {
    init: () => {
        document.querySelectorAll(".navlink").forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const path = event.target.getAttribute("href");
                Router.go(path);
            });
        });

        window.addEventListener("popstate", (event) => {
            event.preventDefault();
            Router.go(event.state.path, false);
        });

        Router.go(location.pathname);
    },
    go: (path, addToHistory = true) => {
        if (addToHistory) {
            history.pushState({ path }, null, path);
        }

        let pageElement = null;
        switch (path) {
            case "/":
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                pageElement = document.createElement("order-page");
                break;
            default:
                if (path.startsWith("/product-")) {
                    pageElement = document.createElement("details-page");
                    pageElement.dataset.productId = path.substring(
                        path.lastIndexOf("-") + 1
                    );
                }
                break;
        }

        if (pageElement) {
            const main = document.querySelector("main");
            main.innerHTML = "";
            main.appendChild(pageElement);
            window.screenX = 0;
            window.screenY = 0;
        }
    },
};

export default Router;
