import React from 'react';
import {View, Text, Modal, Image, TouchableHighlight} from 'react-native';

const Icons = ({size, iconName, bg}) => {
  return (
    <View
      style={{
        width: 80,
        paddingVertical: 10,
        paddingHorizontal: 5,
        height: '100%',
        backgroundColor: bg,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}>
      <Image
        source={iconName}
        style={{width: size, height: size, borderRadius: 50}}
      />
    </View>
  );
};

const modalLogout = () => {
  return (
    <View>
      <Text>modalLogout</Text>
    </View>
  );
};

export {Icons, modalLogout};
