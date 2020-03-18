import React, { Component } from 'react';
import { TextInput, View, Text, Keyboard  } from 'react-native';


class TextExample extends Component {


    componentDidMount() {
        this.keyboardDisShowListener = Keyboard.addListener('keyboardWillShow', () => {
            console.log('abc')
        })
    }

    render() {
        return (
            <View>
              <Text>asdf</Text>
              <TextInput
                style={{
                    margin: 20,
                    padding: 20,
                    borderColor: 'gray',
                    borderWidth: 1,
                    color: 'blue',
                }}
                keyboardType='email-address'
                placeholder='Enter your email'
                placeholderTextColor='red'
                 inlineImageLeft='search_icon'
              />

              <TextInput
                style={{
                    margin: 20,
                    padding: 20,
                    borderColor: 'green',
                    borderWidth: 2,
                    color: 'black',
                }}
                keyboardType='defalut'
                secureTextEntry
                placeholder="Enter your password"
                placeholderTextColor="red"
              />

              <TextInput
                style={{
                    margin: 20,
                    padding: 20,
                    borderWidth: 1,
                }}
                /* multiline */
                borderBottomColor='green'
                borderBottomWidth={3}
                borderRightColor='green'
                borderRightWidth={3}
                borderLeftColor='green'
                borderLeftWidth={3}
                autoFocus
                returnKeyType='done'
                autoCompleteType='email'
              />
            </View>

        )
    }
}


export default TextExample;
