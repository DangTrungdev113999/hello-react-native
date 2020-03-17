import React , { Component } from 'react';
import { Text, View  } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisiable: true,
        }
        const timer = 500;
        setVisiable = () => {
            this.setState(previousState =>({
                isVisiable: !previousState.isVisiable,
            }))
        }
        setInterval(setVisiable, timer);
    }
    render() {
        const content = this.state.isVisiable ? this.props.text : "";
        return (
            <Text>{ content }</Text>
        )
    }
}


class TextBlink extends Component {
    render() {
        return (
            <View>
              <Blink text="I am Trung"/>
              <Blink text="I am Developer" />
            </View>
        );
    }
}

export default TextBlink;
