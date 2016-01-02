import React from 'react-native';
import Signin from './components/authentication/signin';
import Signup from './components/authentication/signup';
import Parse from 'parse/react-native';

var {
	StyleSheet, 
	Navigator
} = React;

const ROUTES = {
	signin: Signin,
	signup: Signup
};

var Main = React.createClass({

	componentWillMount: function() {
		Parse.initialize("eXxdoYgPNV4Lu9emq334zeEvwaGur4WzgID4oF78",
		 "btWyX2a3RLnUYaM7dafOskWxjEohGbm3zO9kHUJU");

	},

	renderScene: function(route, navigator) {
		var Component = ROUTES[route.name];
		return <Component route={route} navigator={navigator}/>
	},

	render: function() {
		return <Navigator 
			style = {styles.container}
			initialRoute = {{name: 'signin'}} 
			renderScene = {this.renderScene} 
			configureScene = { () => { return Navigator.SceneConfigs.FloatFromRight;} }  />

	}
});

var styles = StyleSheet.create({
	container : {
		flex: 1
	}
});

module.exports = Main