export default function reloj(state, boton, seccion) {
    const d = document;

    d.addEventListener("click", e => {
        if (e.target.matches(boton) && state === "start") {
            let $seccion = d.getElementById(seccion);
            let $botonStart = d.getElementById(boton.replace("#", ""));
            $botonStart.setAttribute("disabled","disabled");
            let $nuevo = d.createElement("h3");
            $nuevo.setAttribute("id", "reloj");
            $seccion.insertAdjacentElement("afterbegin", $nuevo);
            $nuevo.innerText = "";
            
            setInterval(() => {
                let fecha = new Date();
                let hora = fecha.toLocaleTimeString();
                $nuevo.innerText = `${hora}`;
            }, 1000);;
        }
        else if (e.target.matches(boton) && state === "stop") {
            d.getElementById("btn-inciar-r").removeAttribute("disabled");
            d.getElementById("reloj").remove();
        }
    });
};