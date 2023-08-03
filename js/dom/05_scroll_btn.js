const d = document;

export function scrollBtn(btn) {
    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            d.documentElement.scrollTop = 0;
            d.querySelector(btn).classList.remove("is-active");
        }
    });

    window.onscroll = function () {
        if (window.scrollY > 500) {
            d.querySelector(btn).classList.add("is-active");
        }
        if (window.scrollY < 500) {
            d.querySelector(btn).classList.remove("is-active");
        }
    };

}