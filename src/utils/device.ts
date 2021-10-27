import { Dimensions, Platform } from 'react-native';

import { OS } from 'app/config';

export class Device {
  public static getDeviceWidth() {
    return Dimensions.get('window').width;
  }

  public static getDeviceHeight() {
    return Dimensions.get('window').height;
  }

  public static isIos() {
    return Platform.OS === OS.IOS;
  }

  public static isAndroid() {
    return Platform.OS === OS.ANDROID;
  }

  public static isSmallDevice() {
    return this.getDeviceHeight() < 600;
  }

  public static isMediumDevice() {
    return this.getDeviceHeight() < 736;
  }
}
