import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavBar from '../component/Navbar';

// Basecontainer is generally parent class and it is used to show title,left button, right button and I wrap all other UI as children, 
const BaseContainer: FC = (props: any) => {
  return (
    <View style={style.mainViewStyle}>
      <NavBar
        title={props.title}
        left={props.left}
        leftIconName={props.leftIconName}
        right={props.right}
        rightIconName={props.rightIconName}
        onLeft={props.onLeft}
        cartCount={props.cartCount}
        onRight={props.onRight}></NavBar>
      <View style={style.container}>{props.children}</View>
    </View>
  );
};
const style = StyleSheet.create({
  mainViewStyle: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
});
export default BaseContainer;
