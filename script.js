const gridContainer = document.querySelector('.grid-container');

for (let f = 0; f < 16; f++) {
    for (let c = 0; c < 16; c++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        square.style.width = `${100 / 16}%`;
        square.style.height = `${100 / 16}%`;
        square.style.border = '1px solid black';
        gridContainer.appendChild(square);
    };
};


const gridItem = document.querySelectorAll('.grid-item');

gridItem.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = 'red';
    })
})

