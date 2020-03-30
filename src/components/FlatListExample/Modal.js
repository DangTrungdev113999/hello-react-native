import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, Platform } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

const screen = Dimensions.get('window');
class ModalExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    }
  }

  onOpenModal = () => {
    this.refs.myModal.open();
  }

  render() {
    return (

      <Modal
        ref='myModal'
        style={style.modal}
        position='center'
        backdrop
        onClosed={() => console.log('cancel press')}
      >
        <Text style={style.text} >This is model</Text>
        <TextInput
          style={style.textInput}
          placeholder='Enter the title'
          onChangeText={text => this.setState({ title: text })}
          value={this.state.title}
        />
        <TextInput
          style={style.textInput}
          placeholder='Enter the description'
          onChangeText={text => this.setState({ title: text })}
          value={this.state.description}
        />
        <Button
          style={style.button}
          containerStyle={style.wrapperbutton}
        >
          save
        </Button>
      </Modal>

    );
  }
}

const style = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    width: screen.width - 80,
    shadowRadius: 10,
    borderRadius: Platform === 'ios' ? 30 : 20,
    height: 300,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1
  },
  wrapperbutton: {
    padding: 8,
    marginLeft: 70,
    marginRight: 70,
    marginTop: 30,
    marginBottom: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: 'mediumseagreen'
  },
  button: {
    fontSize: 18,
    color: '#ffffff',
  }

});

export default ModalExample;
