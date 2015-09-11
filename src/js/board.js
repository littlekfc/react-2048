class Tile {
    constructor(val, pos) {
        this.val = val;
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
    }

    start() {
    }

    isGameOver() {
    }

    move(direct) {
        _randomlyLayTile();
    }

    _randomlyLayTile() {
        let randomPos = Math.floor(Math.random() * (this.maxTileLen - this.tileList.length));
        let randomNum = Math.floor(Math.random() * 2 + 1) * 2;

        this._board.every(colList, row => {
            for (let col = 0; col < this.size; col ++) {
                if (colList[col] === undefined) {
                    randomPos --;
                    if (randomPos === 0) {
                        colList[col] = new Tile(randomNum, [row, col]);
                        return false;
                    }
                }
            }
        })
    }


}
