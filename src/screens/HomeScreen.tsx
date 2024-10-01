import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

type HomeScreenProps = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
