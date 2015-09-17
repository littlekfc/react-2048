let BOARD_SIZE = 4;
let TileView = React.createClass({
    render: function() {
    }
});
let BoardView = React.createClass({
    getInitialState: function() {
        this.board = new Board(BOARD_SIZE);
        return {
            tileList: this.board.tileList,
            isStart: false
        }
    },

    createTileOnCell: function(tile) {
        let cell = '[data-row="' + tile.pos[0] + '"] [data-cell="' + tile.pos[1] + '"]';
        let $cell = $(cell);
        let offset = $cell.offset();
        let tileStyle = {
            top: offset.top,
            left: offset.left,
            width: offset.width + 'px',
            height: offset.height + 'px'
        };
        return <div className={'tile color_' + tile.val}  style={tileStyle}>{tile.val}</div>;
    },

    start: function() {
            this.setState({
                isStart: true,
                tileList: this.state.tileList
            });
    },
    render: function() {
        let gridRows = [];
        let gridCols = [];
        let cellLength = 100 / this.board.size;
        let tiles = [];
        let cellStyle= {
            width: cellLength + '%'
        };
        let self = this;
        let rowStyle = {
            height: cellLength + '%'
        };
        for (let i = 0; i < this.board.size; i ++) {
            gridCols.push(<div className='grid-cell' data-cell={i} style={cellStyle}></div>);
        }
        for (let i = 0; i < this.board.size; i ++) {
            let gridRow = <div className='grid-row' data-row={i} style={rowStyle}>{gridCols}</div>;
            gridRows.push(gridRow);
        }
        if (this.state.isStart) {
            for (let i = 0; i < this.state.tileList.length; i ++) {
                tiles.push(this.createTileOnCell(this.state.tileList[i]));
            }
        } else {
            setTimeout(function() {
                self.setState({
                    isStart: true,
                    tileList: self.state.tileList
                });
            }, 0);
        }
        return (
            <div className='grid-container' onClick={this.start}>
                {tiles}
                {gridRows}
            </div>
        )
    }
});

React.render(<BoardView/>, document.getElementById('board'));
