import React, { Component  } from 'react';
import { View } from 'react-native';

class FlexDimantion extends Component {
    render() {
        return (
            <View style={{flex: 1}} >
              <View style={{flex: 20, backgroundColor: 'red',}} ></View>
              <View style={{flex: 20, backgroundColor: 'blue', }} ></View>
              <View style={{flex: 60, backgroundColor: 'green',}} ></View>

            </View>
        )
    }
}

export default FlexDimantion;
