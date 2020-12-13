import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';

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
                  marginTop: 10
                  }}>
                      Kamis, 3 Desember 2020
              </Text>
              <View style={{backgroundColor: 'black', height: 1, width: 300, alignSelf: 'center', margin: 5}}></View>
                <View style={{flex: 0.05, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Text style={css.text1}>
                        ORDER NUMBER
                    </Text>
                    <Text style={css.text1}>
                        ORDER NUMBER
                    </Text>
                </View>
                <View style={{flex: 0.05, flexDirection: 'row', justifyContent: 'space-around', marginTop: 5}}>
                    <Text style={css.text1}>
                        AC 291
                    </Text>
                    <Text style={css.text1}>
                        01
                    </Text>
                </View>
              <View style={{backgroundColor: 'black', height: 1, width: 300, alignSelf: 'center', margin: 5}}></View>
              <Text style={{fontSize: 14, marginLeft: 29}}>Subtotal</Text>
              <View style={{flex: 0.7, flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 29}}>
                    <Text style={css.text2}>
                        1x Ayam Bakar
                    </Text>
                    <Text style={css.text2}>
                        2x Ayam Goreng
                    </Text>
                    <Text style={css.text2}>
                        3x Nasi Putih
                    </Text>
                    <Text style={css.text2}>
                        3x Es Teh Manis
                    </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 76}}>
                    <Text style={css.text2}>
                        Rp 15.000
                    </Text>
                    <Text style={css.text2}>
                        Rp 30.000
                    </Text>
                    <Text style={css.text2}>
                        Rp 15.000
                    </Text>
                    <Text style={css.text2}>
                        Rp 12.000
                    </Text>
                </View>
              </View>
              <View style={{backgroundColor: 'black', height: 1, width: 300, alignSelf: 'center', margin: 5}}></View>
              <View style={{flex: 0.05, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                <View style={{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 29}}>
                    <Text style={css.text2, {fontWeight: 'bold'}}>
                        Total :
                    </Text>
                </View>
                <View style={{flex: 0.5, flexDirection: 'column', justifyContent: 'flex-start', marginLeft: 76}}>
                    <Text style={css.text2, {fontWeight: 'bold'}}>
                        Rp 72.000
                    </Text>
                </View>
              </View>

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

const css = StyleSheet.create({
    text1: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    },
    text2:{
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'flex-start',
    }
})