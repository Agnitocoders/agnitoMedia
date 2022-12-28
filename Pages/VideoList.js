/* eslint-disable no-undef */
import React, {useState, useRef} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  // Video,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from '@n1ru4l/react-in-center-of-screen';
// import Video from "react-native";
// import { Video } from "expo-av";
import Video from 'react-native-video';
const {height: windowHeight} = Dimensions.get('window');

const boxHeight = windowHeight;
const data = [
  {
    id: 1,
    type: 'video',
    src: require('../assets/5.mp4'),
  },
  {
    id: 2,
    type: 'video',
    src: require('../assets/1.mp4'),
  },
  {
    id: 3,
    type: 'video',
    src: require('../assets/2.mp4'),
  },
  {
    id: 4,
    type: 'video',
    src: require('../assets/3.mp4'),
  },
  {
    id: 5,
    type: 'video',
    src: require('../assets/4.mp4'),
  },
];
export default function VideoAutoPlay1() {
  // const videoPlayer = useRef(null);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  const [paused, setPaused] = useState(0);

  const onViewCallBack = React.useCallback(viewableItems => {
    console.log(viewableItems);
    // Use viewable items in state or as intended
  }, []); // any dependencies that require the function to be "redeclared"

  const viewConfigRef = React.useRef({viewAreaCoveragePercentThreshold: 50});

  const onPaused = playerState => {
    if (paused == 1) {
      setPaused(0);
    }
    if (paused == 0) {
      setPaused(1);
    }
  };

  return (
    <OffsetYProvider
      columnsPerRow={1}
      listItemHeight={boxHeight}
      centerYStart={windowHeight / 2 - 100}
      centerYEnd={windowHeight + 300}>
      {({setOffsetY}) => (
        <FlatList
          snapToAlignment={'start'}
          viewabilityConfig={{itemVisiblePercentThreshold: 90}}
          onViewableItemsChanged={onViewCallBack}
          pagingEnabled={true}
          decelerationRate={'fast'}
          data={data}
          onScroll={ev => {
            setOffsetY(ev.nativeEvent.contentOffset.y);
          }}
          renderItem={({index, item}) => (
            <TouchableOpacity onPress={onPaused} style={{height: boxHeight}}>
              <Video
                key={item.id}
                // paused={paused}
                source={item.src}
                style={{width: '100%', height: '100%'}}
                resizeMode="cover"
                volume={paused}
                repeat={true}
                playInBackground={false}
              />
              <Text>{item.id}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </OffsetYProvider>
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
    width: 110,
    height: 110,
    alignItems: 'center',
  },
});
