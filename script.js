const gridContainer = document.querySelector('.grid-container');

for (let f = 0; f < 16; f++) {
    const squareF = document.createElement('div');
    squareF.style.width = `${100 / 16}%`;
    squareF.style.height = `${100 / 16}%`;
    squareF.style.border = '1px solid black';
    gridContainer.appendChild(squareF);
    for (let c = 1; c < 16; c++) {
        const squareC = document.createElement('div');
        squareC.style.width = `${100 / 16}%`;
        squareC.style.height = `${100 / 16}%`;
        squareC.style.border = '1px solid black';
        gridContainer.appendChild(squareC);
    };
};