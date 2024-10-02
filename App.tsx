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
  FlatList,
  Alert,
  ToastAndroid,
  Linking,
  ImageBackground,
} from 'react-native';

// Define state interface
interface AppState {
  header: string,
  value: boolean,
  username: string,
  dataMahasiswa: {
    namaMhs: string;
    npmMhs: string;
  }[],
}

class App extends Component<{}, AppState> {
  constructor(props: FlatList) {
    super(props);
    this.state = {
      header: 'Home',
      value: true,
      username: '',
      dataMahasiswa: [
        {
          namaMhs: 'Toni',
          npmMhs: '202412'
        },
        {
          namaMhs: 'Dean',
          npmMhs: '202413',
        },
        {
          namaMhs: 'Kevin',
          npmMhs: '202414',
        },
        {
          namaMhs: 'Lily',
          npmMhs: '202415',
        },
        {
          namaMhs: 'Pott',
          npmMhs: '202416',
        },
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
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
        <TouchableOpacity
          style={styles.image}
          onPress={() => {
            Alert.alert('Information', 'Anda akan menghapus gambar ini?', [
              {
                text: 'Cancel',
                onPress: () => console.log('cancel ditekan!'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => console.log('OK ditekan!'),
              },
            ])
          }}>
          <ImageBackground
            source={require('./src/images/mountain.jpg')}
            style={{ 
              width: 300, 
              height: 300,
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 20 
            }}>
              <Text style={{color: 'white', fontSize: 25}}>React Native Ts</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL('https://shorturl.at/f5ggG')}>
          <Text style={{ color: 'white', fontSize: 20 }}>Klik Deh</Text>
        </TouchableOpacity>
        <FlatList
          style={styles.flatListStyle}
          data={this.state.dataMahasiswa}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={styles.flatListItem}
              onPress={() =>
                ToastAndroid.show(item.namaMhs + ' diklik', ToastAndroid.SHORT)
              }>
              <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                {item.namaMhs}
              </Text>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>{item.npmMhs}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.npmMhs}
        />
      </View>
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
  flatListItem: {
    marginBottom: 20,
    backgroundColor: '#03fc98',
    marginHorizontal: 20,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  flatListStyle: {
    flex: 1,
    paddingTop: 20
  }
});

export default App;