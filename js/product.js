class Product {
    constructor() {
        this.__product_image_container = document.querySelector(".__product_image_container");
        this.__left = document.querySelector("#__left");
        this.__right = document.querySelector("#__right");
        this.__product_info_container = document.querySelector(".__product_info_container");

        this.imgSrc = "";
        this.count = 0;
        this.loadedImages = [];
        this.animationFrameId = null;
        this.imageSets = {
            "Artverket_FP-2.jpg": ["Artverket_FP-2.jpg", "Artverket_FP-3.jpg", "Artverket_FP-4.jpg", "Artverket_FP-5.jpg", "Artverket_FP-1.jpg"],
            "Artverket_FP-7.jpg": ["Artverket_FP-7.jpg", "Artverket_FP-8.jpg", "Artverket_FP-9.jpg", "Artverket_FP-10.jpg", "Artverket_FP-6.jpg"],
            "Artverket_FP-12.jpg": ["Artverket_FP-12.jpg", "Artverket_FP-13.jpg", "Artverket_FP-14.jpg", "Artverket_FP-15.jpg", "Artverket_FP-16.jpg", "Artverket_FP-11.jpg"],
            "Artverket_FP-19.jpg": ["Artverket_FP-19.jpg", "Artverket_FP-18.jpg", "Artverket_FP-20.jpg", "Artverket_FP-21.jpg", "Artverket_FP-22.jpg", "Artverket_FP-23.jpg", "Artverket_FP-24.jpg", "Artverket_FP-17.jpg"],
            "Artverket_FP-26.jpg": ["Artverket_FP-26.jpg", "Artverket_FP-27.jpg", "Artverket_FP-28.jpg", "Artverket_FP-29.jpg", "Artverket_FP-30.jpg", "Artverket_FP-25.jpg"],
            "Artverket_FP-31.jpg": ["Artverket_FP-31.jpg", "Artverket_FP-32.jpg", "Artverket_FP-33.jpg", "Artverket_FP-34.jpg"],
            "Artverket_FP-35.jpg": ["Artverket_FP-35.jpg", "Artverket_FP-36.jpg", "Artverket_FP-37.jpg", "Artverket_FP-38.jpg", "Artverket_FP-39.jpg"],
            "Artverket_FP-40.jpg": ["Artverket_FP-40.jpg", "Artverket_FP-41.jpg", "Artverket_FP-42.jpg", "Artverket_FP-43.jpg"],
            "Artverket_FP-44.jpg": ["Artverket_FP-44.jpg", "Artverket_FP-45.jpg", "Artverket_FP-46.jpg", "Artverket_FP-47.jpg"],
            "Artverket_FP-48.jpg": ["Artverket_FP-48.jpg", "Artverket_FP-49.jpg", "Artverket_FP-50.jpg", "Artverket_FP-51.jpg"],
            "Artverket_FP-52.jpg": ["Artverket_FP-52.jpg", "Artverket_FP-53.jpg", "Artverket_FP-54.jpg", "Artverket_FP-55.jpg", "Artverket_FP-56.jpg"],
            "Artverket_FP-57.jpg": ["Artverket_FP-57.jpg", "Artverket_FP-58.jpg", "Artverket_FP-59.jpg", "Artverket_FP-60.jpg"],
            "Artverket_FP-61.jpg": ["Artverket_FP-61.jpg", "Artverket_FP-62.jpg", "Artverket_FP-63.jpg", "Artverket_FP-64.jpg", "Artverket_FP-65.jpg"],
            "Artverket_FP-67.jpg": ["Artverket_FP-67.jpg", "Artverket_FP-68.jpg", "Artverket_FP-66.jpg"],
            "Artverket_FP-69.jpg": ["Artverket_FP-69.jpg", "Artverket_FP-70.jpg", "Artverket_FP-71.jpg", "Artverket_FP-72.jpg"],
            "Artverket_FP-73.jpg": ["Artverket_FP-73.jpg", "Artverket_FP-74.jpg"],
            "Artverket_FP-75.jpg": ["Artverket_FP-75.jpg", "Artverket_FP-76.jpg"],
            "Artverket_FP-77.jpg": ["Artverket_FP-77.jpg", "Artverket_FP-78.jpg"],
            "Artverket_FP-79.jpg": ["Artverket_FP-79.jpg", "Artverket_FP-80.jpg"],
            "Artverket_FP-81.jpg": ["Artverket_FP-81.jpg"],
            "Artverket_FP-82.jpg": ["Artverket_FP-82.jpg"],
            "Artverket_FP-83.jpg": ["Artverket_FP-83.jpg"],
            "Artverket_FP-85.jpg": ["Artverket_FP-85.jpg", "Artverket_FP-86.jpg", "Artverket_FP-84.jpg", "Artverket_FP-87.jpg"],
            "Artverket_FP-88.jpg": ["Artverket_FP-88.jpg", "Artverket_FP-89.jpg"],
            "Artverket_FP-90.jpg": ["Artverket_FP-90.jpg", "Artverket_FP-93.jpg", "Artverket_FP-94.jpg"],
            "Artverket_FP-91.jpg": ["Artverket_FP-91.jpg", "Artverket_FP-92.jpg", "Artverket_FP-93.jpg", "Artverket_FP-94.jpg"],
            "Artverket_FP-95.jpg": ["Artverket_FP-95.jpg", "Artverket_FP-96.jpg", "Artverket_FP-97.jpg", "Artverket_FP-98.jpg"],
            "Artverket_FP-100.jpg": ["Artverket_FP-100.jpg", "Artverket_FP-99.jpg"],
            "Artverket_FP-100.jpg": ["Artverket_FP-100.jpg", "Artverket_FP-99.jpg", "Artverket_FP-101.jpg"],
            "Artverket_FP-102.jpg": ["Artverket_FP-102.jpg", "Artverket_FP-103.jpg"],
            "Artverket_FP-108.jpg": ["Artverket_FP-104.jpg", "Artverket_FP-105.jpg", "Artverket_FP-106.jpg", "Artverket_FP-107.jpg"],
            "Artverket_FP-108.jpg": ["Artverket_FP-108.jpg", "Artverket_FP-109.jpg", "Artverket_FP-110.jpg"],
            "Artverket_FP-111.jpg": ["Artverket_FP-111.jpg", "Artverket_FP-113.jpg", "Artverket_FP-112.jpg"],
            "Artverket_FP-114.jpg": ["Artverket_FP-114.jpg", "Artverket_FP-115.jpg", "Artverket_FP-116.jpg"],
            "Artverket_FP-118.jpg": ["Artverket_FP-118.jpg", "Artverket_FP-117.jpg", "Artverket_FP-119.jpg"],
            "Artverket_FP-121.jpg": ["Artverket_FP-121.jpg", "Artverket_FP-120.jpg", "Artverket_FP-122.jpg"],
            "Artverket_FP-123.jpg": ["Artverket_FP-123.jpg", "Artverket_FP-124.jpg", "Artverket_FP-125.jpg"],
        };
    }

    init() {
        this.getDataFromStorage();
        this.addEvents();
        requestAnimationFrame(() => this.changeSize());
    }

    getDataFromStorage(src) {
        let _src = localStorage.getItem("current-product-to-show");
        if (_src !== null) {
            this.imgSrc = _src.replace(/^bilder\/preimages\//, "");
            this.__product_image_container.src = _src;
            this.loadAllImages();
        } else {
            location.href = "./index.html";
        }
    }
    async loadAllImages() {
        const promises = [];
        for (let i = 0; i < this.imageSets[this.imgSrc].length; i++) {
            const img = new Image();
            const promise = new Promise((resolve) => {
                img.onload = () => resolve();
            });
            img.src = `bilder/${this.imageSets[this.imgSrc][i]}`;
            this.loadedImages.push(img);
            promises.push(promise);
        }
        await Promise.all(promises);
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
        if (this.loadedImages !== undefined) {
            let len = this.loadedImages.length - 1 || undefined;
            if (len) {
                if (val > 0) {
                    if (this.count >= len) {
                        this.count = 0;
                    } else {
                        this.loadedImages[this.count];
                        this.count++;
                    }
                    this.__product_image_container.src = this.loadedImages[this.count].src;
                } else {
                    if (this.count <= 0) {
                        this.count = len;
                    } else {
                        this.loadedImages[this.count];
                        this.count--;
                    }
                    this.__product_image_container.src = this.loadedImages[this.count].src;
                }
            }
        }
    }

    changeSize() {
        // Request the animation frame
        // if (this.animationFrameId === null) {
        this.animationFrameId = requestAnimationFrame(() => {
            // console.log("hej");
            this.__product_info_container.style.width = this.__product_image_container.width + "px";
            this.__product_info_container.style.paddingTop = `${this.__product_image_container.height / 2 - 160}px `;

            this.changeSize();
        });
        // }
    }
}

let product = new Product();

product.init();
