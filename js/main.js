const grid = document.querySelector(".grid");

createGrid = () => {
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    div.classListener("mousedown", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const slider = document.querySelector("#slider");
const screenVal = document.querySelector(".value");
slider.addEventListener("input", function () {
  let val = document.getElementById("slider").value;
  screenVal.textContent = val;
  removeAllChildNodes(grid);
  grid.setAttribute(
    "style",
    `grid-template-columns: repeat(${val}, 2fr);  grid-template-rows: repeat(${val}, 2fr);`
  );
  for (let i = 0; i < val * val; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
    grid.appendChild(div);
  }
});
const erase = document.querySelector("#eraser");
erase.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "white";
    });
  }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].style.backgroundColor = "white";
  }
});

const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = getRandomColor();
    });
  }
});

const black = document.querySelector("#black");
black.addEventListener("click", function () {
  let val = document.getElementById("slider").value;
  let cell = grid.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
    });
  }
});

const rnd = document.querySelector("#rnd");
rnd.addEventListener("click", function () {
  // Create a new input element
  const pallet = document.createElement("input");
  pallet.classList.add("color-panel");
  pallet.type = "color";
  pallet.value = "#333333";

  document.body.appendChild(pallet);

  pallet.addEventListener("input", function () {
    let newColor = pallet.value;
    let cell = grid.children;
    for (let i = 0; i < val * val; i++) {
      cell[i].addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = newColor;
      });
    }
  });
});

createGrid();
