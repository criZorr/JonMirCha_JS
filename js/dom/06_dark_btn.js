const d = document;

export function darkTheme(btn, classDark) {
    const $darkBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
    console.log($selectors);

    let moon = "🌙",
    sun = "☀️";

    let sheet = d.createElement("style");
    let styles = "";

    $selectors.forEach(el => {
        if (el.className !== "") styles += `${el.className}{ transition: all 0.5s ease; }`;
        else styles += `${el.localName}{ transition: all 0.4s ease; }`;
    });

    sheet.innerHTML = styles;
    d.head.appendChild(sheet);

    d.addEventListener("click", e => {
        if (e.target.matches(btn)) {
            if ($darkBtn.textContent === moon) {
                $selectors.forEach(el => el.classList.add(classDark));
                $darkBtn.textContent = sun;
            }
            else {
                $selectors.forEach(el => el.classList.remove(classDark));
                $darkBtn.textContent = moon;
            }
        }
    })
}