const grid = document.querySelector('.grid')
const cells = []
const activateBtn = document.getElementById('activateButton')
const resetBtn = document.getElementById('resetButton')

// image variables
let imageElement
let imageCell = null
let hoverCount = 0
const counterDisplay = document.getElementById('counter')
let gameActive = false

// create grid
const createBoard = () => {
    for (let i = 0; i < 25; i++) {
        const cell = document.createElement('div')
        grid.appendChild(cell).classList.add('cell')
        cells.push(cell)
    }
}

// start game
const startGame = () => {
    gameActive = true
    hoverCount = 0
    updateCounterDisplay()

    // remove image if it exists
    if (imageElement && imageElement.parentNode) {
        imageElement.parentNode.removeChild(imageElement)
    }
    imageCell = null

    // same logic as before
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
        cell.classList.remove('white', 'yellow')
        cell.classList.add(newColor)
        cell.dataset.currentColor = dataColor
    })
    // add image to a random cell
    const yellowCells = Array.from(document.querySelectorAll('.cell.yellow'))
    if (yellowCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * yellowCells.length)
        imageCell = yellowCells[randomIndex]
        imageElement = document.createElement('img')   
        imageElement.src = 'imagen-suplente.jpg' 
        imageElement.style.display = 'none'
        imageCell.appendChild(imageElement)
    }
}

// hover effect
grid.addEventListener('mouseover', (e) => {
    const cell = e.target.closest('.cell')
    if (!cell || !gameActive) return 

    const currentColor = cell.dataset.currentColor

    if (cell === imageCell) {
        gameActive = false

        if (imageElement) {
            imageElement.style.display = 'block'
            imageElement.style.width = '100%'
            counterDisplay.textContent = 'You found the treasure!'
        }

    } else {
        cell.classList.remove('hover-yellow', 'hover-white')
        if (currentColor === 'white') {
            cell.classList.add('hover-yellow')
            hoverCount++
            updateCounterDisplay()
        } else {
            cell.classList.add('hover-white')
        }
    }
}) 

grid.addEventListener('mouseout', (e) => {
    const cell = e.target.closest('.cell')
    if (cell.classList.contains('cell')) {
        cell.classList.remove('hover-yellow', 'hover-white')
    }
})

// update counter display
const updateCounterDisplay = () => {
    counterDisplay.textContent = `Hover Count: ${hoverCount}`
}

// initialize the board
createBoard()

// initialize game
activateBtn.addEventListener('click', startGame)