const container = document.querySelector("main");

const circle = `<svg viewBox="0 0 100 100" data-shape="circle">
<circle cx="50" cy="50" r="50"/>
</svg>`;

const triangle = `<svg viewBox="0 0 100 100" data-shape="triangle">
<polygon points="0,100 100,100 50,0"></polygon>
</svg>`;

const square = `<svg viewBox="0 0 100 100" data-shape="square">
<polygon points="0,0 0,100 100,100, 100,0"></polygon>
</svg>`;

const makeGrid = (r, c) => {
  container.style.setProperty("--grid-rows", r);
  container.style.setProperty("--grid-cols", c);
  for (c = 0; c < r * r; c++) {
    const cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
};

const addShapes = (gridSize) => {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const shape = Math.floor(Math.random() * 3);

    switch (shape) {
      case 0:
        container.children[i].insertAdjacentHTML("afterbegin", circle);
        break;
      case 1:
        container.children[i].insertAdjacentHTML("afterbegin", triangle);
        break;
      case 2:
        container.children[i].insertAdjacentHTML("afterbegin", square);
        break;
    }
  }
};

const initGrid = (gridSize) => {
  makeGrid(gridSize, gridSize);
  addShapes(gridSize);
};

container.addEventListener("mouseover", (e) => {
  if(e.target.classList.contains("grid-item")) {
    const type = e.target.firstElementChild.dataset.shape;
    if (type === "circle") {
      console.log("circle")
      e.target.innerHTML = square;
    } else if (type === "triangle") {
      e.target.innerHTML = circle;
    } else if (type === "square") {
      e.target.innerHTML = triangle;
    }
  }

});

initGrid(Math.floor(Math.random() * 24));
