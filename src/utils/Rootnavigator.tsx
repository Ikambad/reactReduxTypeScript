import {createStackNavigator} from '@react-navigation/stack';
import Splashscreen from '../containers/Splashscreen';
import Homescreen from '../containers/Homescreen';
import CartItemScreen from '../containers/CartItemScreen';

export type RootStackParamList = {
  Home: {
    name: string;
    email: string;
  };
  Splash: undefined;
  CartDetails: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const Rootnavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="Splash"
        component={Splashscreen}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name="CartDetails"
        component={CartItemScreen}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};
export default Rootnavigator;
