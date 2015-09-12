let TileView = React.createClass({
    render: function() {
    }
});
let BoardView = React.createClass({

    getInitialState: function() {
        this.board = this.props.board;
        return {
        }
    },
    render: function() {
        let gridRows = [];
        let gridCols = [];
        let cellLength = 100 / this.board.size;
        let cellStyle= {
            width: cellLength + '%'
        };
        let rowStyle = {
            height: cellLength + '%'
        };
        for (let i = 0; i < this.board.size; i ++) {
            gridCols.push(<div className='grid-cell' style={cellStyle}></div>);
        }
        for (let i = 0; i < this.board.size; i ++) {
            let gridRow = <div className='grid-row' style={rowStyle}>{gridCols}</div>;
            gridRows.push(gridRow);
        }
        return (
            <div className='grid-container'>
                {gridRows}
            </div>
        )
    }
});

React.render(<BoardView board={new Board(4)} />, document.getElementById('board'));
