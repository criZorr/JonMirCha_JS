const d = document;

export function darkTheme(btn, screen) {
    const $darkBtn = d.querySelector(btn);

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            $darkBtn.classList.toggle("is-active");

            d.querySelector(screen[0]).classList.toggle("dark");
            d.querySelector(screen[1]).classList.toggle("dark");

            if ($darkBtn.classList.contains("is-active")) {
                $darkBtn.innerHTML = "☀️";
            }
            else {
                $darkBtn.innerHTML = "🌙";
            }

        }
    })
}