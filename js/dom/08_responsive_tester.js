const d =document,
w = window;

export default function responsiveTester(url, width, height, openBtn, closeBtn) {
    let $url = d.getElementById(url),
    $width = d.getElementById(width),
    $height = d.getElementById(height),
    x = (screen.width - $width.value)/2,
    y = (screen.height - $height.value)/2,
    ventana,
    ventanaPropeties = `popup, width=${$width.value}, height=${$height.value}, menubar=no, left=${x}, top=${y}`;

    d.addEventListener("click", e => {
        if (e.target.matches(openBtn)) {
            ventana = w.open($url.value,undefined,ventanaPropeties);
        }

        if (e.target.matches(closeBtn)) {
            ventana.close();
        }
    });
}