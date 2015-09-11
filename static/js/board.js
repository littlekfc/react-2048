"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tile = function Tile(val, pos) {
    _classCallCheck(this, Tile);

    this.val = val;
    this.pos = pos;
};

var Board = (function () {
    //TODO introduce

    function Board(size) {
        _classCallCheck(this, Board);

        this.size = 4;
        this.maxTileLen = size * size;
        this.tileList = [];
        this._board = [];
        for (var i = 0; i < size; i++) {
            this._board.push([]);
        }
    }

    _createClass(Board, [{
        key: "start",
        value: function start() {}
    }, {
        key: "isGameOver",
        value: function isGameOver() {}
    }, {
        key: "move",
        value: function move(direct) {
            _randomlyLayTile();
        }
    }, {
        key: "_randomlyLayTile",
        value: function _randomlyLayTile() {
            var _this = this;

            var randomPos = Math.floor(Math.random() * (this.maxTileLen - this.tileList.length));
            var randomNum = Math.floor(Math.random() * 2 + 1) * 2;

            this._board.every(colList, function (row) {
                for (var col = 0; col < _this.size; col++) {
                    if (colList[col] === undefined) {
                        randomPos--;
                        if (randomPos === 0) {
                            colList[col] = new Tile(randomNum, [row, col]);
                            return false;
                        }
                    }
                }
            });
        }
    }]);

    return Board;
})();