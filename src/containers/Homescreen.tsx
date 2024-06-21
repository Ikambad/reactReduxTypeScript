import React, {FC, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Product from '../component/Product';
import {ColorSetting} from '../utils/ColorsSetting';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';
import BaseContainer from './BaseContainer';
import {useSelector} from 'react-redux';
import Messages from '../component/Messages';
interface Homescreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'CartDetails'>;
}
const Homescreen = ({navigation}: Homescreenprops) => {
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
  const onCartClick = () => {
    navigation.navigate('CartDetails');
  };

  const cartReducer = useSelector((state: any) => state.reducer);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    setCartCount(cartReducer.length);
  }, [cartReducer]);

  return (
    <BaseContainer
      title={Messages.titleHome}
      right={true}
      rightIconName={'shopping-cart'}
      cartCount={cartCount}
      onRight={onCartClick}>
      <View style={styles.mainViewStyle}>
        {productsArray.map(item => (
          <Product item={item}></Product>
        ))}
      </View>
    </BaseContainer>
  );
};
const styles = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
    borderColor: ColorSetting.white,
  },
});
export default Homescreen;
