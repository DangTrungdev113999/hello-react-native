import React,  { Component  } from 'react';
import { View, Text, Image, ScrollView, Dimensions  } from 'react-native';


class ScrollViewExample extends Component {
    render() {
        const screenWith = Dimensions.get('window').width;
        return (
            <ScrollView
              keyboardDismissMode="on-drag"
            >
              <Text style={{fontSize:96}}>Scroll me plz</Text>
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Text style={{fontSize:96}}>If you like</Text>
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Text style={{fontSize:96}}>Scrolling down</Text>
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Text style={{fontSize:96}}>What's the best</Text>
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Text style={{fontSize:96}}>Framework around?</Text>
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Image source={{uri: "https://reactnative.dev/img/tiny_logo.png", width: screenWith, height: 100}} />
              <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        )
    }
}

export default ScrollViewExample;
