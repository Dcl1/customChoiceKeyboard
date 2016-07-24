import React from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	PixelRatio,
	TextInput,
	Dimensions,
	Animated
} from 'react-native';


import Button from 'react-native-button';
import Input from './newTextInput';

var app = React.createClass({

	getInitialState: function() {
		return {
			focus: false,
			text: "Default Text"
		};
	},

	send: function(respon){
		//console.log("pressed from app2 " + respon);

		this.setState({
			text: respon,
			focus: false
		});
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
				<Input 
					handleSend = {this.send}
					focus={this.state.focus}
					responseOne="Thank you I really like the thing , hahah alfosd"
					responseTwo="Go go gadget minnnie meeeee osd, Go go gadget minnnie meeeee osd, Go go gadget minnnie meeeee osd"
				/>
			</View>
		);
	}

});


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