const navList = document.getElementById("nav-list");
const bar = document.querySelector(".fixed-navbar");
const sectionBody = document.getElementById("section");
const btn = document.getElementById("btn");
const hiddenInput = document.getElementById("hidden-input");
const xMark = document.getElementById("x-mark");
const inputOne = document.querySelector(".one");
const inputTwo = document.querySelector(".two");
const bottomNav = document.querySelector(".bottom-fixed-input");
const container = document.getElementById("container");
const preLoader = document.querySelector(".preloader");
const boltFood = document.querySelector(".bolt-food");
const proceed = document.getElementById("proceed");
const secondContainer = document.getElementById("s-cont");
const addDesc = document.getElementById("add-desc");
const locationCont = document.querySelector(".add-stop");
const newInputCont = document.createElement("div");
const returnToHome = document.getElementById("return");
const destination = document.querySelector(".destination");
const destination2 = document.querySelector(".destination-receiver");

window.addEventListener("load", () => {
  function load() {
    preLoader.style.display = "none";
    container.style.display = "block";
  }
  const timeOut = setTimeout(load, 2000);
});

bar.addEventListener("click", () => {
  navList.style.left = 0;
});

sectionBody.addEventListener("click", () => {
  navList.style.left = "-325px";
});

btn.addEventListener("click", () => {
  hiddenInput.style.top = 0;
  bar.style.display = "none";
  if (newInputCont) {
    bottomNav.style.height = "calc(100vh - 270px )";
  } else {
    bottomNav.style.height = "calc(100vh - 210px )";
  }
  btn.style.display = "none";
  boltFood.style.display = "none";
});

xMark.addEventListener("click", () => {
  hiddenInput.style.top = "-210px";
  bar.style.display = "block";
  bar.style.display = "flex";
  bottomNav.style.height = "200px";
  btn.style.display = "block";
  btn.style.display = "flex";
  boltFood.style.display = "block";
  boltFood.style.display = "flex";
  if ((bottomNav.style.height = "calc(100vh - 210px )")) {
    hiddenInput.style.top = "-270px";
    /*  locationCont.style.display = "none"; */
    bottomNav.style.height = "200px";
  }
});

inputOne.addEventListener("click", () => {
  inputOne.classList.add("active");
  inputTwo.classList.remove("active");
});

inputTwo.addEventListener("click", () => {
  inputTwo.classList.add("active");
  inputOne.classList.remove("active");
});

proceed.addEventListener("click", () => {
  console.log("hi");
  container.style.display = "none";
  preLoader.style.display = "none";
  secondContainer.style.display = "block";
});

addDesc.addEventListener("click", addDiv);

function addDiv() {
  const newInputIcon = document.createElement("i");
  const newInput = document.createElement("input");
  const newInputIconTwo = document.createElement("i");
  const newInputIconThree = document.createElement("i");
  newInputCont.setAttribute("class", "input-one");
  newInputCont.setAttribute("id", "new-input");
  newInputCont.appendChild(newInputIcon);
  newInputIcon.setAttribute("class", "fa-solid fa-magnifying-glass");
  newInputCont.appendChild(newInput);
  newInput.setAttribute("type", "text");
  newInput.setAttribute("placeholder", "Add Stop");
  newInput.setAttribute("class", "input");
  newInputCont.appendChild(newInputIconTwo);
  newInputIconTwo.setAttribute("class", "fa-solid fa-xmark");
  newInputCont.appendChild(newInputIconThree);
  newInputIconThree.setAttribute("class", "fa-solid fa-location-dot");
  locationCont.appendChild(newInputCont);
  bottomNav.style.height = "calc(100vh - 270px )";
  console.log(newInputCont);
  addDesc.removeEventListener("click", addDiv);
}

returnToHome.addEventListener("click", () => {
  secondContainer.style.display = "none";
  preLoader.style.display = "none";
  container.style.display = "block";
});
