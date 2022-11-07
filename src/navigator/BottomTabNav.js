import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SearchScreen} from '../screens';
import {COLORS} from '../utils';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size}) => {
          let iconName;
          let color;
          if (route.name === 'Trang chủ') {
            iconName = focused ? 'home' : 'home-outline';
            color = focused ? COLORS.main : COLORS.gray;
          } else if (route.name === 'Tìm kiếm') {
            iconName = focused ? 'search' : 'search-outline';
            color = focused ? COLORS.main : COLORS.gray;
          }
          return <Icon name={iconName} size={24} color={color} />;
        },
        headerShown:false,
        tabBarActiveTintColor:COLORS.main
      })}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
      <Tab.Screen name="Tìm kiếm" component={SearchScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
