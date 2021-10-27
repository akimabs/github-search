import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import { RFValue as fs } from 'react-native-responsive-fontsize';
import { Device } from 'app/utils';
import { TextProp } from 'types';
import { ColorsValue } from 'app/themes';

export const Text = ({
  children,
  size = 'title',
  align = 'left',
  style,
  type,
  color,
}: TextProp) => {
  const fontSize: number | any =
    size === 'large_title'
      ? 35
      : size === 'title'
      ? 25
      : size === 'subtitle'
      ? 21
      : size === 'caption'
      ? 19
      : size === 'description' && 19;

  const fontType: string | any =
    type === 'bold'
      ? 'bold'
      : type === 'regular'
      ? 'normal'
      : type === 'semibold'
      ? '500'
      : type === 'thin'
      ? '300'
      : 'normal';

  const styles = StyleSheet.create({
    text: {
      fontSize: fs(fontSize, Device.getDeviceHeight()),
      textAlign: align,
      color: color ? color : ColorsValue.text,
      fontWeight: fontType,
      //   fontFamily,
    },
  });

  return (
    <Animated.Text minimumFontScale={12} maxFontSizeMultiplier={1} style={[style, styles.text]}>
      {children}
    </Animated.Text>
  );
};
