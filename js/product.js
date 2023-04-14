class Product {
    constructor() {
        this.__product_image_container = document.querySelector(".__product_image_container");
        this.__left = document.querySelector("#__left");
        this.__right = document.querySelector("#__right");

        this.imgSrc = "";
        this.count = 0;
        this.imageSets = {
            "Artverket_FP-2.jpg": ["Artverket_FP-2.jpg", "Artverket_FP-3.jpg", "Artverket_FP-4.jpg", "Artverket_FP-5.jpg", "Artverket_FP-1.jpg"],
            "Artverket_FP-7.jpg": ["Artverket_FP-7.jpg", "Artverket_FP-8.jpg", "Artverket_FP-9.jpg", "Artverket_FP-10.jpg", "Artverket_FP-6.jpg"],
            "Artverket_FP-12.jpg": ["Artverket_FP-12.jpg", "Artverket_FP-13.jpg", "Artverket_FP-14.jpg", "Artverket_FP-15.jpg", "Artverket_FP-16.jpg", "Artverket_FP-11.jpg"],
            "Artverket_FP-19.jpg": ["Artverket_FP-19.jpg", "Artverket_FP-18.jpg", "Artverket_FP-20.jpg", "Artverket_FP-21.jpg", "Artverket_FP-22.jpg", "Artverket_FP-23.jpg", "Artverket_FP-24.jpg", "Artverket_FP-17.jpg"],
        };
    }

    init() {
        this.getDataFromStorage();
        this.addEvents();
    }

    getDataFromStorage(src) {
        let _src = localStorage.getItem("current-product-to-show");
        this.imgSrc = _src.replace(/^bilder\//, "");
        this.__product_image_container.style.backgroundImage = `url('${_src}')`;
    }

    addEvents() {
        this.__left.addEventListener(
            "click",
            () => {
                this.imageScroll(-1);
            },
            false
        );
        this.__right.addEventListener(
            "click",
            () => {
                this.imageScroll(1);
            },
            false
        );
    }

    imageScroll(val) {
        if (this.imageSets[this.imgSrc] !== undefined) {
            let len = this.imageSets[this.imgSrc].length - 1 || undefined;

            if (len) {
                if (val > 0) {
                    if (this.count >= len) {
                        this.count = 0;
                    } else {
                        this.imageSets[this.imgSrc][this.count];
                        this.count++;
                    }
                    this.__product_image_container.style.backgroundImage = `url('./bilder/${this.imageSets[this.imgSrc][this.count]}')`;
                } else {
                    if (this.count <= 0) {
                        this.count = len;
                    } else {
                        this.imageSets[this.imgSrc][this.count];
                        this.count--;
                    }
                    this.__product_image_container.style.backgroundImage = `url('./bilder/${this.imageSets[this.imgSrc][this.count]}')`;
                }
            }
        }
    }
}

let product = new Product();

product.init();
