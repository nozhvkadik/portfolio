let figcapt = document.getElementsByTagName("figcaption");
let img = document.getElementsByClassName("projectsimg");

const reveal = (img) => {
  img.style.display = "block";
};

const hide = (img) => {
  img.style.display = "none";
};

for (let i = 0; i < figcapt.length; i++) {
  figcapt[i].addEventListener("mouseover", () => {
    reveal(img[i]); // match corresponding image
  });
}

for (let i = 0; i < figcapt.length; i++) {
  figcapt[i].addEventListener("mouseout", () => {
    hide(img[i]);
  });
}
