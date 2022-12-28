import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import VideoAutoPlay1 from './VideoList';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Home';
import AddPost from './AddPost';
import NFT from './NFT';
import UserProfile from './UserProfile';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';
import CarouselPage from './CarouselPage';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={VideoAutoPlay1}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View style={{}}>
                <MaterialCommunityIcons
                  name="play-circle-outline"
                  color={color}
                  size={size}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={CarouselPage}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <View
                style={{
                  height: 55,
                  width: 55,
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 25,
                  backgroundColor: 'white',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="plus-circle-outline"
                  color={'black'}
                  size={43}
                  style={{paddingBottom: 10}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="NFT"
          component={NFT}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="hexagon"
                color={'#C8A139'}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserProfile}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
