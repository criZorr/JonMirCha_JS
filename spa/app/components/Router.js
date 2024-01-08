import { ajax } from "../helpers/ajax.js";
import api from "../helpers/wp_api.js";
import { ContactForm } from "./ContactForm.js";
import { Post } from "./Post.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";

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
    let query = localStorage.getItem("wpSearch");

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    }

    await ajax({
      url: api.SEARCH + query,
      cbSuccess: (search) => {
        let html = "";
        if (search.length === 0) {
          html = `
            <p class="error">
              No existen resultados de búsqueda para el término
              <mark>${query}</mark>
            </p>
          `;
        } else {
          console.log(search);
          search.forEach((post) => (html += SearchCard(post)));
        }
        $main.innerHTML = html;
      },
    });
  } else if (hash === "#/contacto") {
    $main.appendChild(ContactForm());
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
