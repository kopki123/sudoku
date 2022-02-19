const board = []
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for(let y = 0; y < 9; y++ ) {
    let row = [];

    for(let x = 0; x < 9; x++) {
        row.push({
            x,
            y,
            x0: Math.floor(x/3) * 3,
            y0: Math.floor(y/3) * 3,
            num: 0,
        })
    }

    board.push(row)
}

fillboard() 

for(let y = 0; y < 9; y++) {
    for(let x = 0; x < 9; x++) {
        let n = 0

        while(!checkRow(board[y][x])) {
            board[y][x].num = numberArray[n]
            n += 1;
        }

        n = 0

        while(!checkCol(board[y][x])) {
            board[y][x].num = numberArray[n]
            n += 1;
        }

    }
}



const boardElem = document.querySelector('.board')
board.forEach(row => {
    const rowElem = document.createElement('div');
    rowElem.classList.add('row')

    row.forEach(tile => {
        const tileElem = document.createElement('div');
        tileElem.classList.add('tile')

        tileElem.innerText = tile.num

        rowElem.append(tileElem)
    })


    boardElem.append(rowElem)
})

// ----------------------------------------------------------------------------------------------------------------

function fillboard() {
    for(let y = 0; y < 9; y++) {
        for(let x = 0; x < 9; x++) {
            if(board[y][x].num === 0) {
                board[y][x].num = getRandomNumber()

                
            }
        }
    }
}

function getRandomNumber() {
    return numberArray[Math.floor(Math.random() * 9)]
}

function checkRow(tile) {
    for(let x = 0; x < 9; x++) {
        if(board[tile.y][x].num === tile.num && x !== tile.x) {
            return false
        } 
    }

    return true
}

function checkCol(tile) {
    for(let y = 0; y < 9; y++) {
        if(board[y][tile.x].num === tile.num && y !== tile.y) {
            return false;
        }
    }

    return true
}

function checkBox(tile) {
    for(let y = tile.y0; y < tile.y0 + 3; y++) {
        for(let x = tile.x0; x < tile.x0 + 3; x++) {
            if(board[y][x].num === tile.num && !(x === tile.x && y === tile.y)) {
                return false;
            }
        }
    }

    return true
}

function checkNumber(tile) {
    for(let x = 0; x < 9; x++) {
        if(board[tile.y][x].num === tile.num && x !== tile.x) {
            return false
        } 
    }

    for(let y = 0; y < 9; y++) {
        if(board[y][tile.x].num === tile.num && y !== tile.y) {
            return false;
        }
    }

    for(let y = tile.y0; y < tile.y0 + 3; y++) {
        for(let x = tile.x0; x < tile.x0 + 3; x++) {
            if(board[y][x].num === tile.num && !(x === tile.x && y === tile.y)) {
                return false;
            }
        }
    }

    return true;
}

