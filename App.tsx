import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Rootnavigator from './src/utils/Rootnavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const productsArray = [
    {
      name: 'Apple iPhone 13',
      color: 'red',
      price: '1,10,000',
    },
    {
      name: 'Apple iPhone 14',
      color: 'white',
      price: '1,40,000',
    },
    {
      name: 'Apple iPhone 15',
      color: 'green',
      price: '1,50,000',
    },
  ];
  return (
      <Provider store={store}>
      <NavigationContainer>
      <Rootnavigator />
    </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  mainViewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
  },
  displayValueStyle: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
  addToCartViewStyle: {
    width: '50%',
    height: 40,
    backgroundColor: 'blue',
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartTextStyle: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
  },
});
export default App;
