import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CashlessSuccess() {
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

      <Image
        style={{alignSelf: 'center', marginTop: 50}}
        source={require('../assets/icon/CashlessSuccess.png')}
      />

      <View
        style={{
          borderRadius: 10,
          marginTop: 48,
          backgroundColor: '#FFC8AF',
          alignSelf: 'center',
          width: 304,
          height: 100,
        }}>
        <Text
          style={{
            fontSize: 18,
            alignSelf: 'center',
            fontWeight: 'bold',
            marginTop: 25,
          }}>
          Pembayaran Berhasil
        </Text>
        <Text
          style={{
            fontSize: 14,
            alignSelf: 'center',
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Pesanan anda sudah masuk antrean
        </Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFC8AF',
          height: 41,
          width: 100,
          borderRadius: 10,
          marginTop: 57,
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

export {CashlessSuccess};
