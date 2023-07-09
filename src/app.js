import header from "./header";
import footer from "./footer";
import homeF from "./home";
import contactF from "./contact";
import menuF from "./menu";

const div = document.createElement("div");
const home = homeF();
home.classList.add("main-content");
const menu = menuF();
menu.classList.add("main-content");
const contact = contactF();
contact.classList.add("main-content");

function clean() {
  div.removeChild(div.childNodes[1]);
}

function gotoHome() {
  clean();
  div.insertBefore(home, div.lastChild);
}

function gotoMenu() {
  clean();
  div.insertBefore(menu, div.lastChild);
}

function gotoContact() {
  clean();
  div.insertBefore(contact, div.lastChild);
}

function app() {
  div.id = "content";
  div.appendChild(header());
  div.appendChild(home);
  div.appendChild(footer());
  return div;
}

export default app;
export { gotoHome, gotoMenu, gotoContact };
