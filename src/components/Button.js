import React, { Component } from "react";
import { View, Text, Button, Alert } from 'react-native';

class ButtonExample extends Component {
    render() {
        return (
            <View
              style={{
                  flex: 1,
                  padding: 100,
                  justifyContent: 'center',
                  alignItem: 'center'
              }}
            >
              <View
                style={{
                    borderRadius: 999,
                    color: 'red',
                    backgroundColor: 'white',
                    fontSize: 25
                }}
              >
                <Button
                  style={{color: 'red'}}
                  title='button'
                />
              </View>

            </View>
        )

    }
}


export default ButtonExample;
