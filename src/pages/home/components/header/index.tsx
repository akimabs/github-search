import React, { FC, useRef, useState } from 'react';
import { Animated, Keyboard, TextInput, TouchableOpacity, View } from 'react-native';
import { Text } from 'app/components';

import { styles } from '../../styles';
import { ColorsValue } from 'app/themes';
import { Device, request } from 'app/utils';
import { Endpoint } from 'types';

type Props = {
  keySearch: (text: string) => void;
  resultSearch: (data: any) => void;
};

const Header: FC<Props> = ({ keySearch = () => {}, resultSearch = () => {} }) => {
  const animateHeader = useRef(new Animated.Value(1)).current;
  const [value, setValue] = useState<string>('');

  const animate = (toValue: number) => {
    if (toValue === 1) {
      Keyboard.dismiss();
    }
    Animated.spring(animateHeader, {
      toValue,
      useNativeDriver: false,
    }).start();
  };

  const handleSearch = () => {
    if (value?.length !== 0) {
      request({ endpoint: Endpoint.search, method: 'GET', id: value }).then(response => {
        resultSearch(response);
      });
    }
  };

  return (
    <Animated.View
      style={[
        styles.containerHeader,
        {
          marginTop: animateHeader.interpolate({
            inputRange: [0, 1],
            outputRange: [-50, 0],
          }),
          borderBottomColor: ColorsValue.secondary_color,
          borderBottomWidth: animateHeader.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}>
      <Text
        type="bold"
        size="large_title"
        style={[
          {
            opacity: animateHeader,
          },
        ]}>
        Home
      </Text>
      <View style={styles.containerInputSearch}>
        <Animated.View
          style={[
            styles.containerInput,
            {
              width: animateHeader.interpolate({
                inputRange: [0, 1],
                outputRange: [Device.getDeviceWidth() * 0.7, Device.getDeviceWidth() * 0.9],
              }),
            },
          ]}>
          <TextInput
            value={value}
            onChangeText={(text: string) => {
              setValue(text);
            }}
            onSubmitEditing={handleSearch}
            returnKeyType="search"
            onFocus={() => {
              keySearch('asd');
              animate(0);
            }}
            onBlur={() => {
              if (value?.length === 0) {
                animate(1);
                keySearch('');
                resultSearch({});
              }
            }}
            placeholderTextColor={ColorsValue.text + 90}
            style={styles.input}
            placeholder="Search username"
          />
        </Animated.View>
        <Animated.View
          style={{
            opacity: animateHeader.interpolate({
              inputRange: [0, 0.4],
              outputRange: [1, 0],
            }),
          }}>
          <TouchableOpacity
            onPress={() => {
              animate(1);
              setValue('');
              keySearch('');
              resultSearch({});
            }}
            style={styles.buttonCancel}>
            <Text type="semibold" size="subtitle">
              Cancel
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Animated.View>
  );
};

export default Header;
