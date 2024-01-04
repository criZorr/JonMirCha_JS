import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { PostCard } from "./PostCard.js";

export function Router() {
  const d = document,
    w = window,
    $posts = d.getElementById("posts");

  let { hash } = location;

  $posts.innerHTML = null;

  if (!hash || hash === "#/") {
    ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        d.querySelector(".loader").style.display = "none";
        $posts.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2>Sección del Buscador</h2>";
  } else if (hash === "#/contacto") {
    $posts.innerHTML = "<h2>Sección del Contacto</h2>";
  } else {
    $posts.innerHTML = "<h2>Aquí cargará el contenido del post</h2>";
  }
}
