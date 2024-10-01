import React, { Component } from 'react'
import { View, Text } from 'react-native'

class App extends Component {
  constructor(props:any) {
    super(props);
    this.state = { }; 
  }
  render() {
    return (
    <View>
      <Text style={{color: 'blue'}}>Hello Cuy</Text>
      <Text
      style = {{
        fontSize: 28,
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
        }}>
          Hello Cuy2
      </Text>
      <Text
      style = {{
        color: '#DC143C',
        fontSize: 28,
        textDecorationLine: 'line-through',
        textAlign: 'left'
      }}>
        Rp.20.000,00
      </Text>
      <Text
      style = {{
        color: 'rgb(0, 0, 0)',
        fontSize: 28,
        textDecorationLine: 'underline',
        textAlign: 'right'
      }}>
        Rp.10.000,00
      </Text>
    </View>
    )
  }
}

export default App;