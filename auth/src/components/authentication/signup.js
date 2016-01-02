'use strict';

import React from 'react-native';
import Parse from 'parse/react-native';
import Button from '../common/button';

var {
	Text,
	View,
	StyleSheet,
	TextInput
} = React;

module.exports = React.createClass({

	getInitialState: function () {
		return {
			name: '',
			password: '',
			passwordConfirmation: '',
			errorMessage: ''
		}
	},

	render: function() {
		return <View style={styles.container}>
			<Text> Sign up</Text>

			<Text style={styles.label}>Username:</Text>
			<TextInput value = {this.state.username}
					   onChangeText = {(text) => this.setState({username: text})}
			           style={styles.input} />


			<Text style={styles.label}> Password:</Text>
			<TextInput value = {this.state.password}
					   secureTextEntry = {true}
					   onChangeText = {(text) => this.setState({password: text})}
			           style={styles.input} />


			<Text style={styles.label}>ConfirmPassword:</Text>
			<TextInput value = {this.state.passwordConfirmation}
					   secureTextEntry = {true}
					   onChangeText = {(text) => this.setState({passwordConfirmation: text})}
			           style={styles.input} />

			 <Text style={[styles.label, {color: 'red'}]}>{this.state.errorMessage}</Text>
			 <Button text = {'Sign Up'} onPress={this.onSignUpPress} />
			 <Button text = {'I have an account'} onPress = {this.onHaveAccountPress} />
		</View>
	},

	onHaveAccountPress: function(){
		this.props.navigator.pop();	
	},

	onSignUpPress: function() {
		if (this.state.password !== this.state.passwordConfirmation) {
			this.setState({errorMessage: 'You passwords do not match'});
			return;
		}

		var user = new Parse.User();
		user.set("username", this.state.username);
		user.set("password", this.state.password);

		user.signUp(null, {
			success: (user) => { this.props.navigator.immediatelyResetRouteStack([{name: 'tweets'}]); },
			error: (user, error) => { this.setState({errorMessage: error.message}) }
		})
	}
});

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white'
	},

	labe: {
		fontSize: 18
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

});