'use strict';

var BoardView = React.createClass({
    displayName: 'BoardView',

    render: function render() {
        return React.createElement(
            'div',
            null,
            'Hel'
        );
    }
});
React.render(React.createElement(BoardView, null), document.getElementById('board'));