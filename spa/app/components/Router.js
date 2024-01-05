import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");

  let { hash } = location;

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: api.POSTS,
      cbSuccess: (posts) => {
        let html = "";
        posts.forEach((post) => (html += PostCard(post)));
        $main.innerHTML = html;
      },
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2>Sección del Buscador</h2>";
  } else if (hash === "#/contacto") {
    $main.innerHTML = "<h2>Sección del Contacto</h2>";
  } else {
    await ajax({
      // url: `${api.POST}/${localStorage.getItem("wpPostId")}`,
      url: api.POSTSLUG + hash.replace("#/", ""),
      cbSuccess: (post) => {
        $main.innerHTML = Post(post[0]);
      },
    });
  }
  d.querySelector(".loader").style.display = "none";
}
