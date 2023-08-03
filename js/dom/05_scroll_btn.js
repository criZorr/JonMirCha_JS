const d = document,
    w = window;

export default function scrollBtn(btn) {
    const $btnScroll = d.querySelector(btn);

    w.addEventListener("scroll", e => {
        let scrollTop = w.scrollY || d.documentElement.scrollTop;
        if (scrollTop > 500) {
            $btnScroll.classList.add("is-active");
        }
        if (scrollTop < 500) {
            $btnScroll.classList.remove("is-active");
        }
    })

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0
            });
        }
    });

}