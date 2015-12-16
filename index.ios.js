var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item'); 

var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sartuday'];

//Create a react component
var Weekdays = React.createClass({
	render: function() {
		return <View style={styles.container}>
			<Text>
				Days of the week :
			</Text>
			<DayItem day={DAYS[0]}/>
		</View>
	}
});

//Style the React Component

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems : 'center'
	}
});

//Show the react component on the screen 
AppRegistry.registerComponent('weekdays', function() {
	return Weekdays
});