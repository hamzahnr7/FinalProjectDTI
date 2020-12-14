import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CashlessPayment() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#FFF1E1'}}>
      <View style={{backgroundColor: '#FFB84C'}}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 11,
            marginBottom: 12,
            alignItems: 'center',
            textAlign: 'center',
          }}>
          CASHLESS PAYMENT
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: 250,
          height: 250,
          borderRadius: 10,
          marginTop: 80,
          backgroundColor: '#FFC8AF',
          alignSelf: 'center',
        }}
        onPress={() =>
          navigation.navigate('CashlessSuccess')
        }></TouchableOpacity>

      <Text
        style={{
          fontSize: 14,
          width: 247,
          height: 42,
          alignSelf: 'center',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 30,
        }}>
        Silahkan melakukan pembayaran pada QR code di atas
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#FFC8AF',
          height: 41,
          width: 100,
          borderRadius: 10,
          marginTop: 70,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('UserMenu')}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          KEMBALI
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export {CashlessPayment};
