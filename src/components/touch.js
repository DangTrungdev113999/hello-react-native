import React, { Component  } from 'react';
import {
    Image,
    Text,
    View,
    TouchableHighlight,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';



class TouchEventExample extends Component {
    _onShowAlert = () => {
        alert('on ShowUnderlay button.!')
    }

    _onPress = () => {
        alert('You need press the button.!')
    }
    render() {
        return (
            <View style={styles.container}>
              <TouchableHighlight
                onPress={this._onPress}
                underlayColor="red"
                onShowUnderlay={this._onShowAlert}
              >
                <View style={styles.buttonText} >
                  <Text style={styles.text}>
                    TouchableHighlight
                  </Text>
                </View>
              </TouchableHighlight>

              <TouchableNativeFeedback
                onPress={this._onPress}
                useForeground={false}
              >
                 <View style={styles.buttonText} >
                  <Text style={styles.text}>
                    TouchableHighlight
                  </Text>
                </View>
              </TouchableNativeFeedback>

              <TouchableOpacity
                onPress={this._onPress}
                activeOpacity={0.7}
              >
                <View style={styles.buttonText} >
                  <Text style={styles.text}>
                    TouchableOpacity
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableWithoutFeedback
                onPressIn={() => {
                    alert('on Press in');
                }}
                onPressOut={() => {
                    alert('on Press out');
                }}
                onLongPress={() => {
                    alert('on Long Press');
                }}
              >
                <View style={styles.buttonText} >
                  <Text style={styles.text}>
                    TouchableWithoutFeedback
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        backgroundColor: 'green',
        borderRadius: 999,
        marginTop: 20,
    },
    text: {
        padding: 20,
        fontSize: 18,
        color: 'white',
    }
});

export default TouchEventExample;
