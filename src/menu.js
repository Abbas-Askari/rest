function menu() {
  const div = document.createElement("div");
  div.id = "menu";

  const h1 = document.createElement("h1");
  h1.textContent = "menu";

  div.appendChild(h1);

  return div;
}

export default menu;
