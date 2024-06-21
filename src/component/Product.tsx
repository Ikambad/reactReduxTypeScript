import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ColorSetting} from '../utils/ColorsSetting';
import {addToCartFunction, removeFromCartFunction} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import Messages from '../component/Messages';
import {getProportionalFontSize} from '../utils/GeneralSettings';

interface Productprops {}
const Product: FC<Productprops> = (props: any) => {
  const items = props.item;
  const dispatch = useDispatch();
  const cartItem = useSelector((state: any) => state.reducer); //Called reducer for fetching data
  const [existItem, setExistingItem] = useState(false);
  const handleAddTocart = (cartItem: any) => {
    dispatch(addToCartFunction(cartItem)); //Calling action function here
  };
  const handleRemoveFromcart = (cartItem: any) => {
    dispatch(removeFromCartFunction(cartItem.name)); //Calling action function here
  };
  useEffect(() => {
    let result = cartItem.filter((products: any) => {
      return products.name === items.name; //Filter logic - to add item and remove item from cart
    });
    if (result.length) {
      setExistingItem(true);
    } else {
      setExistingItem(false);
    }
  }, [cartItem]);

  return (
    <View style={styles.mainViewStyle}>
      <Text style={styles.displayValueStyle}>
        {Messages.NAME} {items.name}
      </Text>
      <Text style={styles.displayValueStyle}>
        {Messages.COLOR} {items.color}
      </Text>
      <Text style={styles.displayValueStyle}>
        {Messages.PRICE} {items.price}
      </Text>
      <TouchableOpacity
        style={styles.addToCartViewStyle}
        onPress={() =>
          existItem ? handleRemoveFromcart(items) : handleAddTocart(items)
        }>
        {existItem ? (
          <Text style={styles.addToCartTextStyle}>Remove From Cart</Text>
        ) : (
          <Text style={styles.addToCartTextStyle}>Add To Cart</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  mainViewStyle: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20,
    borderBottomWidth: 1,
    padding: 10,
    borderColor: ColorSetting.backgroundColor,
  },
  displayValueStyle: {
    fontSize: getProportionalFontSize(20),
    fontWeight: '500',
    marginLeft: 10,
  },
  addToCartViewStyle: {
    width: '50%',
    height: 40,
    backgroundColor: ColorSetting.backgroundColor,
    margin: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addToCartTextStyle: {
    color: ColorSetting.white,
    fontSize: getProportionalFontSize(18),
    alignSelf: 'center',
  },
});
export default Product;
