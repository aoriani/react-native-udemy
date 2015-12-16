//Import
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

//Component
var DayItem = React.createClass({
	render: function() {
		return <Text style={styles.day}> {this.props.day} </Text>
	}
});

//Styles
var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF'
	}
});
//Export
module.exports = DayItem;