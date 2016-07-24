import React from 'react';
import {
	View,
	Text,
	TextInput,
	Dimensions,
	Animated,
	PixelRatio,
	StyleSheet,
	TouchableHighlight,
	LayoutAnimation
} from 'react-native';


import Button from 'react-native-button';

var Choices = React.createClass({

	getInitialState: function(){
		return {

		};
	},

	componentWillMount: function(){

		LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

		this.styles = {
			container: {
				flex: 1,
				flexDirection: 'column'
			},

			option: {
				backgroundColor: 'grey',
				padding: 20,
				marginLeft: 10,
				marginRight: 10,
				marginBottom: 10,
				marginTop: 5,
				borderRadius: 8,
				alignItems: 'center',
				justifyContent: 'center'
			}


		};
	},

	choicePressed: function(resp){

		this.props.handleSend(resp)

	},

	render: function(){


		return (
			<View
				style={this.styles.container}
			>
				<TouchableHighlight
					style={this.styles.option}
					onPress={this.choicePressed.bind(null, this.props.responseOne)}
				>
					<Text>
						{this.props.responseOne}
					</Text>
				</TouchableHighlight>

				<TouchableHighlight
					style={this.styles.option}
					onPress={this.choicePressed.bind(null, this.props.responseTwo)}
				>
					<Text>
						{this.props.responseTwo}
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

});


var Messenger = React.createClass({

	getInitialState: function(){

		return {
			focus: false,
			text: 'Holder Text'
		};
	},

	componentWillMount: function(){
		this.setState({
			focus: this.props.focus
		});
	},


	focusFunc: function(){
		this.state.focus ? this.setState({ focus: false }) : this.setState({ focus: true });
	},

	updateText: function(resp){

		this.setState({
			text: resp
		});
	},

	onSend: function(){
		var respon = this.state.text;
		this.props.handleSend(respon);
	},

	componentWillReceiveProps: function(nextProps) {

		if(nextProps.focus !== this.props.focus) {
			this.setState({focus: nextProps.focus})
		} else {
			this.setState({focus: nextProps.focus})
		}

	},


	render: function(){
		return (
			<View
				style={styles.choiceContainer}
			>
				<View
					style={styles.textInputContainer}
				>	
					<TouchableHighlight
						style={styles.textInput}
						onPress={this.focusFunc}
					>
						<Text
							style={styles.text}
						> 
							{this.state.text} 
						</Text>
					</TouchableHighlight>
					<Button
						style={styles.sendButton}
						onPress={this.onSend}
					>
						Send
					</Button>
				</View>
				<View
					style={styles.choiceArea}
				>
					{
						!this.state.focus ? <View></View> : 
						<Choices 
							responseOne =  {this.props.responseOne}
							responseTwo = {this.props.responseTwo}
							handleSend = {this.updateText}
						/>
					}
				</View>
			</View>
		);
	}

});


Messenger.defaultProps = {

	placeholder: 'Type a message...',
	placeholderTextColor: '#ccc'

};


var styles = StyleSheet.create({

	listArea: {
		height: 400,
	},
	choiceContainer: {
		backgroundColor: 'white'
	},
	textInputContainer: {
		//height: 44,
		borderTopWidth: 1,
		borderColor: '#b2b2b2',
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10
	},
	textInput: {
		alignSelf: 'center',
		justifyContent: 'center',
		//height: 30,
		width: 100,
		backgroundColor: '#FFF',
		flex: 1,
		padding: 0,
		paddingTop: 14,
		paddingBottom: 14,
		margin: 0
	},
	text: {
		fontSize: 15
	},
	sendButton: {
		marginTop: 11,
		marginLeft: 10
	},
	choiceArea: {
		backgroundColor: 'lightgrey'
	}


});


module.exports = Messenger;


















