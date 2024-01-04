import api from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/Loader.js";
import { Header } from "./components/Header.js";

export function App() {
  const d = document,
    $root = d.getElementById("root");
  $root.appendChild(Header());
  $root.appendChild(Loader());
}
