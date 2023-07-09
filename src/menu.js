function heading() {
  const div = document.createElement("div");
  div.id = "heading";

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  div.appendChild(h1);
  div.classList.add("box");

  return div;
}

function subHeading(text) {
  const div = document.createElement("div");
  div.classList.add("sub-heading");
  const h3 = document.createElement("h3");
  h3.textContent = text;
  div.appendChild(h3);
  return div;
}

function food(dish) {
  const div = document.createElement("div");
  div.classList.add("food");
  const h3 = document.createElement("h3");
  h3.textContent = dish.name;

  const p = document.createElement("p");
  p.textContent = dish.line;

  const price = document.createElement("div");
  price.textContent = dish.price;

  const img = document.createElement("img");

  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(price);
  div.appendChild(img);
  return div;
}

const getRandomDish = () => {
  return {
    name: "aksjdla",
    price: "$5",
    line: "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
    img: "./food.img",
  };
};

function menu() {
  const div = document.createElement("div");
  div.id = "menu";

  const boxes = [
    heading(),
    subHeading("Beverages"),
    food(getRandomDish()),
    food(getRandomDish()),
    food(getRandomDish()),
    food(getRandomDish()),
    subHeading("Main Dishes"),
    food(getRandomDish()),
    food(getRandomDish()),
  ];

  boxes.forEach((box) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("box-wrapper");
    box.classList.add("box");
    wrapper.appendChild(box);
    div.appendChild(wrapper);
  });

  return div;
}

export default menu;
