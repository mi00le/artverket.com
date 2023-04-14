class Navigation {
    constructor() {
        this.links = {
            __home: document.querySelector("#__home"),
            __styling: document.querySelector("#__styling"),
            __fotografering: document.querySelector("#__fotografering"),
            __event: document.querySelector("#__event"),
            __workshop: document.querySelector("#__workshop"),
            __shop: document.querySelector("#__shop"),
            __popup: document.querySelector("#__popup"),
            __portfolio: document.querySelector("#__portfolio"),
            __om: document.querySelector("#__om"),
            __kontakt: document.querySelector("#__kontakt"),
        };
    }
    init() {
        this.addEvents();
    }

    addEvents() {
        this.links.__home.addEventListener(
            "click",
            () => {
                location.href = "./index.html";
            },
            false
        );
        this.links.__styling.addEventListener(
            "click",
            () => {
                location.href = "./styling.html";
            },
            false
        );
        this.links.__fotografering.addEventListener(
            "click",
            () => {
                location.href = "./fotografering.html";
            },
            false
        );
        this.links.__event.addEventListener(
            "click",
            () => {
                location.href = "./event.html";
            },
            false
        );
        this.links.__workshop.addEventListener(
            "click",
            () => {
                location.href = "./workshop.html";
            },
            false
        );
        this.links.__shop.addEventListener(
            "click",
            () => {
                location.href = "./shop.html";
            },
            false
        );
        this.links.__popup.addEventListener(
            "click",
            () => {
                location.href = "./popup.html";
            },
            false
        );
        this.links.__portfolio.addEventListener(
            "click",
            () => {
                location.href = "./portfolio.html";
            },
            false
        );
        this.links.__om.addEventListener(
            "click",
            () => {
                location.href = "./om.html";
            },
            false
        );
        this.links.__kontakt.addEventListener(
            "click",
            () => {
                location.href = "./kontakt.html";
            },
            false
        );
    }
}

let navigation = new Navigation();
navigation.init();
