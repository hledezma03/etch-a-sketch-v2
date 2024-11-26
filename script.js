const gridContainer = document.querySelector('.grid-container');
const gridSize = document.querySelector('#grid-size');
const gridBtn = document.querySelector('#create-grid');

const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    return `rgb(${r},${g},${b})`;
};

const createGrid = (size = 16) => {
    for (let f = 0; f < size; f++) {
        for (let c = 0; c < size; c++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.style.width = `${100 / size}%`;
            square.style.height = `${100 / size}%`;
            square.style.border = '1px solid black';
            gridContainer.appendChild(square);
        };
    };
    const gridItem = document.querySelectorAll('.grid-item');
    gridItem.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = randomColor();
    });
});
};

gridBtn.addEventListener("click", ()=> {
    if (!gridSize.value) {
        return;
    } else {
        size = gridSize.value;
        gridContainer.innerHTML = ''
        createGrid(size);
    }
})


createGrid();




