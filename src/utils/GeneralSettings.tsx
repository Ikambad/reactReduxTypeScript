import {Platform, Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

export const AppName = 'Redux Demo';

const {width, height} = Dimensions.get('window');

//To check device is iPad/Table or Mobile
export const isTablet = () => {
  return Platform.OS === 'ios'
    ? Platform.isPad
      ? true
      : false
    : DeviceInfo.isTablet()
    ? true
    : false;
};
export const isPhone = () => {
  return !isTablet();
};

const guidelineBaseWidth = isTablet() ? 834 : 360;
const guidelineBaseHeight = isTablet() ? 1194 : 760;
const scale = (sizeIs: number) => (width / guidelineBaseWidth) * sizeIs;
const verticalScale = (sizeIs: number) =>
  (height / guidelineBaseHeight) * sizeIs;
const moderateScale = (sizeIs: number, factor = 0.5) =>
  sizeIs + (scale(sizeIs) - sizeIs) * factor;

// CHANGE FONT SIZE IN FULL APPLICATION
export function getProportionalFontSize(baseFontSize: any) {
  var intialFontSize = baseFontSize || 14;
  var fontSizeToReturnModerate = moderateScale(intialFontSize);
  var fontSizeToReturnVertical = verticalScale(intialFontSize);
  return Platform.OS == 'ios'
    ? fontSizeToReturnModerate
    : fontSizeToReturnVertical;
}
