import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import data from '../mock/FlatListData';
import Swipeout from 'react-native-swipeout';

class Item extends Component {
  render() {
    const { item, index } = this.props;
    const swipeoutSetting = {
      autoClose: true,
      onClose: (secId, rowId, directtion) => {

      },
      onOpen: (secId, rowId, directtion) => {

      },
      right: [
        {
          onPress: () => { },
          text: 'Delete',
          type: 'delete',
        }
      ],
        
      rowId: index,
      sectionId: 1,
    }
    return (
      <Swipeout {...swipeoutSetting} >
        <View style={style.wrapper}>
          <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
          <View style={style.wrapperText}>
            <Text style={style.text} >{index}  {item.title}</Text>
            <Text style={style.desctiption} >{item.description}</Text>
          </View>
        </View>
      </Swipeout>
    )
  }
}

class FlatListExample extends Component {
  render() {
    return (
      <FlatList
        data={data}
        renderItem={({ item, index }) => <Item item={item} index={index} />}
      />
    )
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'lightgreen',
    borderBottomColor: 'white',
    borderBottomWidth: 3,
  },
  wrapperText: {
    padding: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',

  }
})

export default FlatListExample;
