import React, {FC} from 'react';
import {View, Text, Platform, StyleSheet} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ColorSetting} from '../utils/ColorsSetting';
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBar: FC = (props: any) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.leftContainer}>
        {props.left !== undefined ? (
            // Left Icon - Back icon or any custom icon
          <Icon
            name={props.leftIconName}
            onPress={props.onLeft}
            size={25}
            color={ColorSetting.white}
            style={{marginRight: 10}}
          />
        ) : null}
      </View>
      {/* Title of Page */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleTextStyle}>{props.title}</Text>
      </View>
      <View style={styles.rightContainer}>
        {/* Right icon on the tab bar */}
        {props.right !== undefined ? (
          <>
            <Text style={styles.cartTextStyle}>{props.cartCount}</Text>
            <Icon
              name={props.rightIconName}
              onPress={props.onRight}
              size={25}
              color={ColorSetting.white}
              style={{marginRight: 10}}
            />
          </>
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    marginTop: DeviceInfo.hasNotch()
      ? -1.1 * (Platform.OS == 'ios' ? getStatusBarHeight() : hp('5%'))
      : -20,
    height: hp('14%'),
    backgroundColor: ColorSetting.backgroundColor,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  titleTextStyle: {
    fontSize: 24,
    color: ColorSetting.white,
    fontWeight: '800',
    marginTop: 50,
  },
  cartTextStyle: {
    position: 'absolute',
    right: 15,
    top: 10,
    color: ColorSetting.white,
    fontSize: 15,
  },
});
export default NavBar;
