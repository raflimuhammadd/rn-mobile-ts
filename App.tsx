import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { NavigationRouteConfigMap, NavigationContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from "./src/screens/ImageScreen";
import { NavigationStackOptions } from "react-navigation-stack";

// Definisikan tipe untuk navigator
type AppRoutes = {
  Home: undefined;
  Components: undefined;
  List: undefined;
  Image: undefined;
  Counter: undefined;
  Color: undefined;
  Square: undefined;
};

// Gunakan tipe `NavigationRouteConfigMap` untuk rute-rute yang digunakan
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    } as NavigationStackOptions,
  }
);

export default createAppContainer(navigator) as NavigationContainer;
