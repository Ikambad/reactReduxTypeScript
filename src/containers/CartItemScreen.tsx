import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ColorSetting} from '../utils/ColorsSetting';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';
import BaseContainer from './BaseContainer';
import {useSelector} from 'react-redux';
import Messages from '../component/Messages';
import {getProportionalFontSize} from '../utils/GeneralSettings';

interface cartDetailscreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'CartDetails'>;
}
const CartItemScreen = ({navigation}: cartDetailscreenprops) => {
  const [cartItems, fetchCartItems] = useState([]);
  const cartReducer = useSelector((state: any) => state.reducer);
  useEffect(() => {
    fetchCartItems(cartReducer);
  });
  const renderCartItem = (item: any) => {
    return (
      <View style={styles.flatlistViewStyle}>
        <Text style={styles.titleTextStyle}>
          {Messages.NAME}{' '}
          <Text style={styles.valueTextStyle}>{item.item.name}</Text>
        </Text>
        <Text style={styles.titleTextStyle}>
          {Messages.COLOR}{' '}
          <Text style={styles.valueTextStyle}>{item.item.color}</Text>
        </Text>
        <Text style={styles.titleTextStyle}>
          {Messages.PRICE}{' '}
          <Text style={styles.valueTextStyle}>{item.item.price}</Text>
        </Text>
      </View>
    );
  };
  return (
    <BaseContainer
      title={Messages.titleCart}
      left={true}
      leftIconName={Messages.leftArrow}
      onLeft={() => navigation.goBack()}>
      <View>
        <FlatList data={cartReducer} renderItem={renderCartItem}></FlatList>
      </View>
    </BaseContainer>
  );
};
const styles = StyleSheet.create({
  flatlistViewStyle: {
    padding: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: ColorSetting.backgroundColor,
  },
  titleTextStyle: {
    fontSize: getProportionalFontSize(20),
    fontWeight: '400',
  },
  valueTextStyle: {
    fontSize: getProportionalFontSize(20),
    fontWeight: '700',
  },
});
export default CartItemScreen;
