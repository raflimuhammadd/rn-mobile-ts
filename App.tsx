import React, { Component } from 'react';
import {  View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#09bd75" />
        <View
        style={{
          backgroundColor: '#03fc98',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          paddingVertical: 20,
        }}>
          <Text style={{
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: 25
            }}>
              Header
          </Text>
        </View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('./src/images/mountain.jpg')}
          style={{width: 300, height: 300}}
          />
        </View>
        <TouchableOpacity
        style={{
          backgroundColor: '#03fc98',
          paddingVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          elevation: 3,
        }}>
          <Text style = {{
            color: '#FFFFFF',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: 25,
          }} onPress={() => console.log('Klik')}>
            Click Here!
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default App;