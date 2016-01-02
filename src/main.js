import React from 'react-native';
import Signin from './components/authentication/signin'
var {
	View,
	Text,
	StyleSheet
} = React;


var Main = React.createClass({
	render: function() {
		return <View style={styles.container} >
			<Signin/>
		</View>
	}
});

var styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

module.exports = Main