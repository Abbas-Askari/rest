import { gotoMenu, gotoHome, gotoContact } from "./app";

function createButton(text, func) {
  const btn = document.createElement("button");
  btn.textContent = text;

  btn.addEventListener("click", func);
  //   btn.classList.add("")

  return btn;
}

function header() {
  const headerDiv = document.createElement("div");
  headerDiv.id = "header";

  headerDiv.appendChild(createButton("Home", gotoHome));
  headerDiv.appendChild(createButton("Menu", gotoMenu));
  headerDiv.appendChild(createButton("Contact", gotoContact));

  return headerDiv;
}

export default header;
