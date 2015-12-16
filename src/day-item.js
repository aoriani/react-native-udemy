//Import
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

//Component
var DayItem = React.createClass({
	render: function() {
		return <Text style={this.style()}> {this.props.day} </Text>
	},

	style: function() {
		return {
			color: this.color(),
			fontWeight: this.fontWeight(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},

	color: function() {
		var div = this.props.daysUntil > 0 ? this.props.daysUntil : 1;
		var opacity = 1 / div;
		return 'rgba(0, 0, 0, ' + opacity + ')';
	},

	fontWeight: function() {
		var weight = 7 - this.props.daysUntil;
		return (weight * 100).toString();
	},

	fontSize: function() {
		return 60 - 6 * this.props.daysUntil;
	},

	lineHeight: function() {
		return 70 - 4 * this.props.daysUntil;
	}

});

//Export
module.exports = DayItem;