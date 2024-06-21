import React, {FC, useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../utils/Rootnavigator';

interface Splashcreenprops {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}
const Splashscreen = ({navigation}: Splashcreenprops) => {
    // Redirecting user to home screen with passing default props after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home', {
        name: 'rahul kambad',
        email: 'ikambad@gmail.com',
      });
    }, 3000);
  }, []);
  return (
    <View>
      
    </View>
  );
};
export default Splashscreen;
