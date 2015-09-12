let deepcopy = require('deepcopy');

let isBrowser = typeof window !== 'undefined';

class Tile {
    constructor(val, pos) {
        this.val = val;
        this.pos = pos;
        this.setPos(pos);
    }

    setPos(pos) {
        this.previousPos = this.pos;
        this.pos = pos;
    }
}

class Board {
    //TODO introduce 
    constructor(size) {
        this.size = 4;
        this.maxTileLen = size*size;
        this.tileList = [];
        this._board = [];
        for (let i = 0; i < size; i ++) {
            this._board.push([]);
        }
        this.start();
    }

    start() {
        this.randomlyLayTile();
        this.randomlyLayTile();
    }

    isGameOver() {
        this._move('left', deepcopy(this._board), deepcopy(this.tileList));
    }

    move(direct) {

        return this.tileList;
    }

    updateTile() {
        let newTileList = [];
        this.tileList.forEach(tile => {
            if (!tile.isRemoved) {
                newTileList.push(tile);
                if (tile.isUpdated) {
                    tile.val = tile.updatedVal;
                }
            }
        });
        this.tileList = newTileList;
        return this.tileList;
    }

    randomlyLayTile() {
        let randomPos = Math.floor(Math.random() * (this.maxTileLen - this.tileList.length));
        let randomNum = Math.floor(Math.random() * 2 + 1) * 2;
        let self = this;

        this._board.every(function(colList, row) {
            for (let col = 0; col < self.size; col ++) {
                if (colList[col] === undefined) {
                    randomPos --;
                    if (randomPos === 0) {
                        colList[col] = new Tile(randomNum, [row, col]);
                        self.tileList.push(colList[col]);
                        return false;
                    }
                }
            }
            return true;
        })
    }

    _move(direct, board, tileList) {
        debugger;
    }
};

module.exports = Board;

if (isBrowser) {
    global.Board = Board;
}
