class ItemPage {
    constructor() {
        this.product__container = document.querySelector(".product__container");
        this.imgSrc = "";
    }

    init() {
        this.addClickEvent();
    }

    addClickEvent() {
        for (let i of this.product__container.children) {
            i.children[0].addEventListener("click", (e) => {
                this.imgSrc = e.target.getAttribute("alt");
                this.saveToStorage(`bilder/preimages/${this.imgSrc}`);
            });
        }
    }

    saveToStorage(src) {
        localStorage.setItem("current-product-to-show", src);
        location.href = "../product.html";
    }
}

let itemPage = new ItemPage();

itemPage.init();
