import React from 'react-native';
import Button from '../common/button';
import Parse from 'parse/react-native';

var {
	View, 
	Text,
	TextInput,
	StyleSheet
} = React;

module.exports = React.createClass({

	getInitialState: function() {
		return {
			username: '',
			password: '', 
			errorMessage: ''
		}
	},

	render: function() {
		return <View style={styles.container}>
				<Text>Sign In</Text>

				<Text style={styles.label}>Username:</Text>
				<TextInput style={styles.input}
						   value={this.state.username}
						   onChangeText={(text) => this.setState({username: text})}/>

				<Text style={styles.label}>Password:</Text>
				<TextInput secureTextEntry={true}
				           style={styles.input}
				           value={this.state.password}
				           onChangeText={(text) => this.setState({password: text})}/>
				<Text style={[styles.label, {color: 'red'}]}>{this.state.errorMessage}</Text>
				<Button text={'Sign In'} onPress={this.onPressSignin} />
				<Button text={'I need an account...'} onPress = {this.onPressSignup} />
			</View>
	},

	onPressSignin: function() {
		Parse.User.logIn(this.state.username, this.state.password, {
			success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]); },
			error: (data, error) => { this.setState({errorMessage: error.message})}
		});
	},

	onPressSignup: function() {
		this.props.navigator.push({name: 'signup'});
	}

});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},

	input: {
		padding: 4,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		borderRadius: 5,
		margin: 5,
		width: 200,
		alignSelf: 'center'
	},

	label: {
		fontSize: 18
	}
});

