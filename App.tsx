import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
} from 'react-native';

// Define state interface
interface AppState {
  header: string,
  value: boolean,
  username: string,
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      header: 'Home',
      value: true,
      username: ''
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flex: 1 }}>
          <StatusBar barStyle="light-content" backgroundColor="#09bd75" />
          <View style={styles.imageContainer}>
            <Text style={{
              color: '#FFFFFF',
              fontWeight: 'bold',
              fontSize: 25
            }}>
              {this.state.header}
            </Text>
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Image source={require('./src/images/mountain.jpg')}
              style={{ width: 300, height: 300 }}
            />
          </View>
          <View style={styles.switch}>
            <Switch 
              value={this.state.value} 
              onValueChange={() => 
                this.setState({value: !this.state.value})}>
            </Switch>
          </View>
          <TextInput
            value={this.state.username}
            style={styles.textInput}
            onChangeText={value => this.setState({ username: value })}
          />
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              color: '#FFFFFF',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 25,
            }} onPress={() => console.log('Halo Rafli')}>
              Click Here!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              color: '#FFFFFF',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 25,
            }} onPress={() => console.log('Halo Rafli')}>
              Click Here!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              color: '#FFFFFF',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 25,
            }} onPress={() => console.log('Halo Rafli')}>
              Click Here!
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}>
            <Text style={{
              color: '#FFFFFF',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: 25,
            }} onPress={() => console.log('Halo Rafli')}>
              Click Here!
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#03fc98',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 3,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#03fc98', 
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    color: 'black'
  },
  switch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  imageContainer: {
    backgroundColor: '#03fc98',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    paddingVertical: 20,
  },
  container: {
    flex: 1,
  },
});

export default App;