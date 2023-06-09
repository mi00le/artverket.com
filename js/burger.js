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
                document.body.style.overflowY = "hidden";

                //handle click on box shadow
                document.querySelector(".menu__box__shadow__enabled").addEventListener(
                    "click",
                    (e) => {
                        menuOpen = false;
                        menuBtn.classList.remove("open");
                        boxShadow.classList.remove("menu__box__shadow__enabled");
                        document.body.style.overflowY = "auto";
                    },
                    false
                );

                menuOpen = true;
            } else {
                menuBtn.classList.remove("open");
                boxShadow.classList.remove("menu__box__shadow__enabled");
                document.body.style.overflowY = "scroll";

                menuOpen = false;
            }
        },
        false
    );
};

document.querySelector("#services__dropdown").addEventListener(
    "click",
    (e) => {
        let items = document.querySelector(".services__items");
        let toggle = items.getAttribute("toggle");
        if (toggle == "false") {
            items.style.display = "block";
            items.setAttribute("toggle", true);
            e.target.style.fontWeight = "bold";
        } else {
            items.style.display = "none";
            items.setAttribute("toggle", false);
            e.target.style.fontWeight = "normal";
        }
    },
    false
);
