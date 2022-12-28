// import { StatusBar } from "expo-status-bar";
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import MyTabs from './Pages/BottomTabs';
import VideoAutoPlay1 from './Pages/VideoList';
import {VideoAutoPlay} from './VideoList';

const staticImage = require('./assets/favicon.png');
export default function App() {
  return (
    // <View style={styles.container}>
    //   <ImageBackground source={staticImage} style={styles.ImageBackground}>
    //     <Text>hyyy</Text>
    //   </ImageBackground>
    //   <Text>Open up App.js to start working on your !</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <VideoAutoPlay1></VideoAutoPlay1>
    <MyTabs></MyTabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground: {
    // flex: 1,
    // resizeMode: "cover",
    width: 110,
    height: 110,
    alignItems: 'center',
  },
});
