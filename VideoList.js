//@flow
import React, {Component} from 'react';
import {Dimensions, FlatList, View, Text} from 'react-native';
import {
  OffsetYProvider,
  IndexProvider,
  InCenterConsumer,
} from '@n1ru4l/react-in-center-of-screen';
import VideoAutoPlay1 from './Pages/VideoList';

const {height: windowHeight} = Dimensions.get('window');

const boxHeight = windowHeight / 1.3;

type MyComponentState = {
  data: Array<string>,
};

export class VideoAutoPlay extends Component<any, MyComponentState> {
  state = {
    data: ['red', 'yellow', 'green', 'blue'],
    img: 'https://reactjs.org/logo-og.png',
  };
  keyExtractor = (item: string) => item;
  render() {
    const {
      keyExtractor,
      state: {data},
    } = this;
    return <Text>hi</Text>;
  }
}
