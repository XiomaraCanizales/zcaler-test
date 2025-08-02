// create grid
const grid = document.querySelector('.grid')
const cells = []
const activateBtn = document.getElementById('activateButton')

const createBoard = () => {
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div')
        grid.appendChild(cell).classList.add('cell')
        cells.push(cell)
    }
}

// random color 
activateBtn.addEventListener('click', () => {
    const cellsAll = document.querySelectorAll('.cell')
    cellsAll.forEach(cell => {
        console.log('cell', cell)
        // randomly assign a color to each cell
        const randomColor = Math.random()
        let newColor
        let dataColor
        if (randomColor < 0.5) {
            newColor = 'white'
            dataColor= 'white'
        } else {
            newColor = 'yellow'
            dataColor= 'yellow'
        }
        // removing existing classes
        cell.classList.remove('white', 'yellow')
        // adding new class
        cell.classList.add(newColor)
        // setting data attribute
        cell.dataset.currentColor = dataColor
    })
})

// hover state
grid.addEventListener('mouseover', (e) => {
    const cell = e.target
    if (cell.classList.contains('cell')) {
        const currentColor= cell.dataset.currentColor
        // remove existing classes
        cell.classList.remove('hover-white', 'hover-yellow')
        // apply hover class
        if (currentColor === 'white') {
            cell.classList.add('hover-yellow')
        } else if (currentColor === 'yellow') {
            cell.classList.add('hover-white')
        }
    }
})

createBoard()