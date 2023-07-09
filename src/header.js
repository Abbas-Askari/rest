import { gotoMenu, gotoHome, gotoContact } from "./app";

let buttons = [];

function createButton(text, func) {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.setAttribute("data-clicked", "false");
  btn.addEventListener("click", () => {
    buttons.forEach((btn) => btn.setAttribute("data-clicked", "false"));
    func();
    btn.setAttribute("data-clicked", "true");
  });
  //   btn.classList.add("")

  return btn;
}

function header() {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";

  buttons = [
    createButton("Home", gotoHome),
    createButton("Menu", gotoMenu),
    createButton("Contact", gotoContact),
  ];

  buttons.forEach((btn) => headerDiv.appendChild(btn));

  return headerDiv;
}

export default header;
