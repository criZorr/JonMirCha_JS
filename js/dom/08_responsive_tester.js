const d =document,
w = window;

export default function responsiveTester(form) {
    const $form = d.getElementById(form);

    let ventana;

    d.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            let x = (screen.width - $form.width.value)/2,
            y = (screen.height - $form.height.value)/2;

            ventana = w.open($form.direction.value,"tester",`innerWidth=${$form.width.value}, innerHeight=${$form.height.value}, left=${x}, top=${y}`);
        }
    });
    
    d.addEventListener("click", e=>{
        if (e.target === $form.cerrar) {
            ventana.close();
        }
    });
}