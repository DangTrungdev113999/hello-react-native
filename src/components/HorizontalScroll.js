import React , { Component  } from  'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';

class HorizontalScrollView extends Component {
    render() {
        const screenWidh = Dimensions.get('window').width;
        const screenHeight = Dimensions.get("window").height;
        return (
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator
              scrollIndicatorInsets={{top: 10, left: 10, right: 10, bottom: 10}} //ios
              /* onMomentumScrollBegin={() => { */
              /*     alert('begin scrolling'); */
              /* }} */
              /* onMomentumScrollEnd={() => { */
              /*     alert('end scrolling'); */
              /* }} */
            onScroll= {event => {
                let logData = `scroll to x = ${event.nativeEvent.contentOffset.x} , y =  ${event.nativeEvent.contentOffset.y} `
                console.log(logData);
            }}
            scrollEventThrottle={10}
            >
              <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    width: screenWidh,
                    justifyContent: 'center',
                    backgroundColor: 'lightblue',
                }}
              >
                <Text
                  style={{
                      fontSize: 30,
                      color: 'white',
                  }}
                >
                  Screen 1
                </Text>
              </View>

              <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    width: screenWidh,
                    justifyContent: 'center',
                    backgroundColor: 'lightgreen',
                }}
              >
                <Text
                  style={{
                      fontSize: 30,
                      color: 'white',
                  }}
                >
                  Screen 2
                </Text>
              </View>

              <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    width: screenWidh,
                    justifyContent: 'center',
                    backgroundColor: 'lightgray',
                }}
              >
                <Text
                  style={{
                      fontSize: 30,
                      color: 'white',
                  }}
                >
                  Screen 3
                </Text>
              </View>
            </ScrollView>

        )
    }
}

export default HorizontalScrollView;
