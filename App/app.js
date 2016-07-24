import React from 'react';
import {
	View,
	Text,
	ListView,
	TouchableHighlight,
	StyleSheet,
	PixelRatio,
	TextInput,
	Dimensions,
	Animated,
} from 'react-native';

//import NewTextInput from './newTextInput';
import Button from 'react-native-button';

var app = React.createClass({

	getInitialState: function(){
		return {
			text: this.props.text,
			disabled: true
		};
	},


	onChangeText(text) {
		this.setState({
			text,
			disabled: text.trim().length <= 0,
		});

		this.props.onChangeText(text);
	},

	render: function(){
		return (

			<View
				style={styles.container}
			>
				<View
					style={styles.listArea}
				>
					<Text
						style={{
							'marginTop' : 200,
							'alignSelf' : 'center'
						}}
					>

						{this.state.text} 
					</Text>
				</View>
				<View
					style={styles.textInputContainer}
				>
					<TextInput
						style={styles.textInput}
						placeholder={this.props.placeholder}
						placeholderTextColor={this.props.placeholderTextColor}
						multiline={true}
						onChangeText={this.onChangeText}
						value={this.state.text}
						autoFocus={this.props.autoFocus}
					/>
					<Button
						style={styles.sendButton}
					>
						Send
					</Button>
				</View>
			</View>
		);
	}


});



app.defaultProps = {
	autoFocus: false,
	placeholder: 'Type a message...',
	placeholderTextColor: '#ccc',
	onChangeText: ()=> {},
	text: ''

};



var styles = StyleSheet.create({


	container: {
		flex:1,
		flexDirection: 'column'
	},
	listArea: {
		flex:2
	},
	textInputContainer: {
		height: 44,
		borderTopWidth: 1,
		borderColor: '#b2b2b2',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10
	},
	textInput: {
		alignSelf: 'center',
		height: 30,
		width: 100,
		backgroundColor: '#FFF',
		flex: 1,
		padding: 0,
		margin: 0,
		fontSize: 15
	},
	sendButton: {
		marginTop: 11,
		marginLeft: 10
	}


});




module.exports = app;






























