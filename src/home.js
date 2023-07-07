function heading() {
  const div = document.createElement("div");
  div.id = "heading";
}

function home() {
  const div = document.createElement("div");
  div.id = "home";

  const h1 = document.createElement("h1");
  h1.textContent = "Home";

  div.appendChild(h1);

  return div;
}

export default home;
