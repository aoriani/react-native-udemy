import React from 'react-native';
var {
	Text,
	StyleSheet,
	TouchableHighlight
} = React

module.exports = React.createClass({
	render: function() {
		return <TouchableHighlight style={styles.button}
							 underlayColor={'gray'}
							 onPress={this.props.onPress}>

			<Text style={styles.text}>{this.props.text}</Text>
		</TouchableHighlight>
	}
});

var styles = StyleSheet.create({
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		padding: 5,
		borderColor: 'black',
		marginTop: 10
	},

	text: {
		flex: 1,
		alignSelf: 'center',
		fontSize: 20
	}
});