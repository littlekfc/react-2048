'use strict';

var TileView = React.createClass({
    displayName: 'TileView',

    render: function render() {}
});
var BoardView = React.createClass({
    displayName: 'BoardView',

    getInitialState: function getInitialState() {
        this.board = this.props.board;
        return {};
    },
    render: function render() {
        var gridRows = [];
        var gridCols = [];
        var cellLength = 100 / this.board.size;
        var cellStyle = {
            width: cellLength + '%'
        };
        var rowStyle = {
            height: cellLength + '%'
        };
        for (var i = 0; i < this.board.size; i++) {
            gridCols.push(React.createElement('div', { className: 'grid-cell', style: cellStyle }));
        }
        for (var i = 0; i < this.board.size; i++) {
            var gridRow = React.createElement(
                'div',
                { className: 'grid-row', style: rowStyle },
                gridCols
            );
            gridRows.push(gridRow);
        }
        return React.createElement(
            'div',
            { className: 'grid-container' },
            gridRows
        );
    }
});

React.render(React.createElement(BoardView, { board: new Board(4) }), document.getElementById('board'));