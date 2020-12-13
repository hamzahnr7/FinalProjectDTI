import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function CashPayment() {
  const navigation = useNavigation();
  return (
    <View style= {{flex:1, backgroundColor: '#FFF1E1'}}>
      <View style={{backgroundColor: '#FFB84C'}}>
          <Text style= {{
                fontSize: 24, 
                color: 'white', 
                fontWeight: 'bold',
                marginTop: 11,
                marginBottom: 12,
                alignItems: 'center',
                textAlign: 'center',
            }}>
            CASH PAYMENT
          </Text>  
      </View>

      <TouchableOpacity style={{marginTop: 50, alignSelf: 'center'}} 
      onPress={() => navigation.navigate('UserMenu')}>
          <Image source={require('../assets/icon/CashSuccess.png')}/>
      </TouchableOpacity>

      <View style={{borderRadius: 10, marginTop: 48, backgroundColor: '#FFC8AF', alignSelf: 'center', width: 304, height: 100}}>
          <Text style={{fontSize: 18, alignSelf: 'center', fontWeight: 'bold', marginTop: 25}}>Mohon Menunggu</Text>
          <Text style={{fontSize: 14, alignSelf: 'center', fontWeight: 'bold', marginTop: 5}}>Pelayan segera menuju meja anda</Text>
      </View>

    </View>
  );
}

export {CashPayment};