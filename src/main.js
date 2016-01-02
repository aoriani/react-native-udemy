import React from 'react-native';
import Signin from './components/authentication/signin';
import Parse from 'parse/react-native';

var {
	View,
	Text,
	StyleSheet
} = React;


var Main = React.createClass({

	componentWillMount: function() {
		Parse.initialize("eXxdoYgPNV4Lu9emq334zeEvwaGur4WzgID4oF78",
		 "btWyX2a3RLnUYaM7dafOskWxjEohGbm3zO9kHUJU");

	},

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