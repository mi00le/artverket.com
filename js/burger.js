document.body.onload = () => {
    const menuBtn = document.querySelector(".menu-btn");
    const boxShadow = document.querySelector(".menu__box__shadow");
    let menuOpen = false;
    menuBtn.addEventListener(
        "click",
        () => {
            if (!menuOpen) {
                menuBtn.classList.add("open");
                boxShadow.classList.add("menu__box__shadow__enabled");
                document.body.style.overflowY = "auto";
                document.body.style.position = "fixed";
                // document.body.style.position = "fixed";

                document.body.style.width = "100%";

                menuOpen = true;
            } else {
                menuBtn.classList.remove("open");
                boxShadow.classList.remove("menu__box__shadow__enabled");
                document.body.style.overflowY = "auto";
                document.body.style.position = "static";

                document.body.style.width = "100%";
                menuOpen = false;
            }
        },
        false
    );
};

document.querySelector("#services__dropdown").addEventListener(
    "click",
    () => {
        let items = document.querySelector(".services__items");
        let toggle = items.getAttribute("toggle");
        if (toggle == "false") {
            items.style.display = "block";
            items.setAttribute("toggle", true);
        } else {
            items.style.display = "none";
            items.setAttribute("toggle", false);
        }
    },
    false
);
