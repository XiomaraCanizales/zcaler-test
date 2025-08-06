const grid = document.querySelector('.grid')
const cells = []
const activateBtn = document.getElementById('activateButton')
const resetBtn = document.getElementById('resetButton')

// create grid
const createBoard = () => {
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div')
        grid.appendChild(cell).classList.add('cell')
        cells.push(cell)
    }
}

// initialize the board
createBoard()

// random color 
activateBtn.addEventListener('click', () => {
    const cellsAll = document.querySelectorAll('.cell')
    cellsAll.forEach(cell => {
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

    // add hover effect
    grid.addEventListener('mouseover', (e) => {
        const cell = e.target
        if (cell.classList.contains('cell')) {
            const currentColor = cell.dataset.currentColor
            if (currentColor === 'white') {
                cell.classList.add('hover-yellow')
            } else {
                cell.classList.add('hover-white')
            }
        }
    }) 
    // remove hover effect
    grid.addEventListener('mouseout', (e) => {
        const cell = e.target
        if (cell.classList.contains('cell')) {
            cell.classList.remove('hover-yellow', 'hover-white')
        }
    }) 
})

// reset colors
resetBtn.addEventListener('click', () => {
    const cellsAll = document.querySelectorAll('.cell')
    cellsAll.forEach(cell => {
        // removing existing classes
        cell.classList.remove('white', 'yellow')
        // resetting data attribute
        cell.dataset.currentColor = ''
    })
})