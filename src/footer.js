import gitHubLogo from "./github-mark.svg";

function gitHubLink() {
  const div = document.createElement("div");
  div.id = "git-hub-link";

  const p = document.createElement("p");
  p.textContent = "Abbas Askari";

  const img = document.createElement("img");
  img.src = gitHubLogo;

  div.appendChild(p);
  div.appendChild(img);

  return div;
}

function footer() {
  const div = document.createElement("div");
  div.id = "footer";

  div.appendChild(gitHubLink());

  return div;
}

export default footer;
