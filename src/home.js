function heading() {
  const div = document.createElement("div");
  div.id = "heading";

  const h1 = document.createElement("h1");
  h1.textContent = "Beary's Breakfast Bar";

  div.appendChild(h1);

  return div;
}

function intro() {
  const div = document.createElement("div");
  const p = document.createElement("p");

  p.textContent =
    "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";

  const qoute = document.createElement("div");
  qoute.textContent = "Goldilocks";
  qoute.classList.add("to-left");

  div.appendChild(p);
  div.appendChild(qoute);

  return div;
}

function hours() {
  const div = document.createElement("div");
  div.id = "hours";

  const header = document.createElement("div");
  header.id = "header-hours";
  header.classList.add("to-left");
  header.textContent = "Hours";
  div.appendChild(header);

  const hours = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];

  hours.forEach((text) => {
    const hourItem = document.createElement("div");
    hourItem.id = "hour-item";
    hourItem.textContent = text;
    div.appendChild(hourItem);
  });

  return div;
}

function location() {
  const div = document.createElement("div");
  div.id = "location";

  const header = document.createElement("div");
  header.textContent = "Location";
  header.classList.add("to-left");

  const p = document.createElement("p");
  p.textContent = "123 Forest Drive, Forestville, Maine";

  div.appendChild(header);
  div.appendChild(p);

  return div;
}

function boxWrapper(child) {
  const div = document.createElement("div");
  div.classList.add("box-wrapper");
  div.appendChild(child);
  child.classList.add("box");
  return div;
}

function home() {
  const div = document.createElement("div");
  div.id = "home";

  const children = [heading(), intro(), hours(), location()];
  // children = [];

  children.forEach((child) => div.appendChild(boxWrapper(child)));
  return div;
}

export default home;
