import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

function TotalOrder() {
  return (
    <View style= {{backgroundColor: '#FFF1E1'}}>
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
            Total Pesanan
        </Text>  
      </View>
      <View style={{
          width:321, 
          height:310, 
          backgroundColor: '#FFC8AF', 
          alignSelf: 'center',
          marginTop: 45,
          borderRadius: 10,
          }}>
              <Text style={{
                  color: 'black',
                  fontSize: 12,
                  alignSelf: 'center',
                  }}>
                      Kamis, 3 Desember 2020
              </Text>
              <View style={{backgroundColor: 'black', height: 1, width: 300, alignSelf: 'center',}}></View>
                  <Text style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      alignSelf: 'center',
                  }}>
                      ORDER NUMBER: AC291     Nomor Meja: 01
                  </Text>
              <View style={{backgroundColor: 'black', height: 1, width: 300, alignSelf: 'center', margin: 5}}></View>
      </View>
      <Text style={{
          fontSize: 14,
          width: 247,
          height: 42,
          alignSelf:'center',
          textAlign:'center',
          fontWeight:'bold',
          marginTop: 20,
          }}>
              Silahkan pilih metode pembayaran di bawah ini
      </Text>
      <View style={{flex: 1, flexDirection: 'row', marginBottom: 220}}>
      <TouchableOpacity style={{
          backgroundColor: '#FFC8AF',
          height: 41,
          width: 100,
          borderRadius: 10,
          marginLeft: 54,
          marginTop: 22,
      }}>
          <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 10,
          }}>CASHLESS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
          backgroundColor: '#FFC8AF',
          height: 41,
          width: 100,
          borderRadius: 10,
          marginLeft: 80,
          marginTop:22,
      }}>
          <Text style={{
              fontSize: 14,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 10,
          }}>CASH</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

export {TotalOrder};
