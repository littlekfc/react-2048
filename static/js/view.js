var HelloMessage = React.createClass({
        render: function() {
            return React.createElement('div', null, ["Hello ", this.props.name]);
        }
});
