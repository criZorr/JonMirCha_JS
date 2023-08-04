const d = document,
ls = localStorage;

export function darkTheme(btn, classDark) {
    const $darkBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");

    let moon = "🌙",
    sun = "☀️";

    //transición
    let sheet = d.createElement("style");
    let styles = "";
    $selectors.forEach(el => {
        if (el.className !== "") styles += `${el.className}{ transition: all 0.5s ease; }`;
        else styles += `${el.localName}{ transition: all 0.4s ease; }`;
    });
    sheet.innerHTML = styles;
    d.head.appendChild(sheet);

    const lightMode = () => {
        $selectors.forEach(el => el.classList.remove(classDark));
        $darkBtn.textContent = moon;
        ls.setItem("theme", "light");
    };

    const darkMode = () => {
        $selectors.forEach(el => el.classList.add(classDark));
        $darkBtn.textContent = sun;
        ls.setItem("theme", "dark");
    };

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($darkBtn.textContent === moon) darkMode();
            else lightMode();
        }
    });

    d.addEventListener("DOMContentLoaded", e=>{
        if(ls.getItem("theme") === null) ls.setItem("theme", "light");
        if(ls.getItem("theme") === "light") lightMode();
        if(ls.getItem("theme") === "dark") darkMode();
    });
}