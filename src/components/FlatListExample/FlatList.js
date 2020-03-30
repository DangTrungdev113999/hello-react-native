import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Platform, TouchableHighlight, Alert } from 'react-native';
import flatListdata from '../../mock/FlatListData';
import FlatListItem from './FlatListItem';
import ModalExample from './Modal';
import Icon from 'react-native-vector-icons/Ionicons';

class FlatListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flatListdata,
    }
  }

  componentDidMount() {
    this.setState({ flatListdata })
  }

  _onPressAdd = () => {
    // alert("You add Item");
    this.refs.addModal.onOpenModal();
  }
  render() {
    const { flatListdata } = this.state;
    return (
      <View>
        <View style={style.navbar} >
          <TouchableHighlight
            style={{ marginRight: 10 }}
            underlayColor='tomato'
            onPress={this._onPressAdd}
          >
            <View>
              <Text style={style.add} >Add</Text>
              {/* <Icon name="ios-time" size={30} color="#ffffff" /> */}
            </View>
          </TouchableHighlight>
        </View>
        <FlatList
          extraData={flatListdata}
          data={flatListdata}
          keyExtractor={({ item, index }) => index}
          renderItem={({ item, index }) => <FlatListItem item={item} key={index} index={index} />}
        />
        <ModalExample ref={'addModal'} />
      </View>
    )
  }
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 34 : 0,
  },
  navbar: {
    backgroundColor: 'tomato',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 64,
  },
  add: {
    color: '#ffffff',
    fontSize: 20,
    borderWidth: 3,
    borderColor: '#ffffff',
    borderRadius: 999,
    padding: 5,

  }
})

export default FlatListExample;
