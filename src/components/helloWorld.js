import React, { Component  } from 'react';
import { Text  } from 'react-native';

class HelloWorld extends Component {
    render() {
        const text =`

Hello world, I am Dang The Trung, I am 20 years old, I am developer `;
        return (
            <Text>{ text }</Text>
        )
    }
}

export default HelloWorld;
