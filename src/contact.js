function heading() {
  const div = document.createElement("div");
  div.id = "heading";

  const h1 = document.createElement("h1");
  h1.textContent = "Contact";

  div.appendChild(h1);
  div.classList.add("box");

  return div;
}

function contact() {
  const div = document.createElement("div");
  div.id = "contact";

  const boxes = [heading()];

  boxes.forEach((box) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("box-wrapper");
    box.classList.add("box");
    wrapper.appendChild(box);
    div.appendChild(wrapper);
  });

  return div;
}

export default contact;
