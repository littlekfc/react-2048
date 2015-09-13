'use strict';

var BOARD_SIZE = 4;
var TileView = React.createClass({
    displayName: 'TileView',

    render: function render() {}
});
var BoardView = React.createClass({
    displayName: 'BoardView',

    getInitialState: function getInitialState() {
        this.board = new Board(BOARD_SIZE);
        return {
            tileList: this.board.tileList,
            isStart: false
        };
    },

    createTileOnCell: function createTileOnCell(tile) {
        var cell = '[data-row="' + tile.pos[0] + '"] [data-cell="' + tile.pos[1] + '"]';
        var $cell = $(cell);
        var offset = $cell.offset();
        var tileStyle = {
            top: offset.top,
            left: offset.left,
            width: offset.width + 'px',
            height: offset.height + 'px'
        };
        return React.createElement(
            'div',
            { className: 'tile color_' + tile.val, style: tileStyle },
            tile.val
        );
    },

    start: function start() {
        this.setState({
            isStart: true,
            tileList: this.state.tileList
        });
    },
    render: function render() {
        var gridRows = [];
        var gridCols = [];
        var cellLength = 100 / this.board.size;
        var tiles = [];
        var cellStyle = {
            width: cellLength + '%'
        };
        var self = this;
        var rowStyle = {
            height: cellLength + '%'
        };
        for (var i = 0; i < this.board.size; i++) {
            gridCols.push(React.createElement('div', { className: 'grid-cell', 'data-cell': i, style: cellStyle }));
        }
        for (var i = 0; i < this.board.size; i++) {
            var gridRow = React.createElement(
                'div',
                { className: 'grid-row', 'data-row': i, style: rowStyle },
                gridCols
            );
            gridRows.push(gridRow);
        }
        if (this.state.isStart) {
            for (var i = 0; i < this.state.tileList.length; i++) {
                tiles.push(this.createTileOnCell(this.state.tileList[i]));
            }
        }
        setTimeout(function () {
            self.setState({
                isStart: true,
                tileList: self.state.tileList
            });
        }, 0);
        return React.createElement(
            'div',
            { className: 'grid-container', onClick: this.start },
            tiles,
            gridRows
        );
    }
});

React.render(React.createElement(BoardView, null), document.getElementById('board'));