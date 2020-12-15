import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';

function DaftarMenu() {
  return (
    <View style={{backgroundColor: '#FFF1E1'}}>
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
          Daftar Menu
        </Text>
      </View>
      <FlatList
        data={[...Array(10)]}
        showsVerticalScrollIndicator={true}
        keyExtractor={(a, i) => i + 'a'}
        renderItem={({item, index}) => (
          <View
            style={{
              height: 120,
              width: 350,
              backgroundColor: '#FFC8AF',
              elevation: 5,
              marginVertical: 10,
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#BF7940',
                borderRadius: 100,
              }}></View>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Ayam Goreng
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 6,
                  fontSize: 12,
                  width: 161,
                  height: 36,
                }}>
                Ayam bakar bumbu kecap dengan sambal terasi
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: 'bold',
                }}>
                Harga : Rp 16.000
              </Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop: 75}}>
              <TouchableOpacity>
                <Image source={require('../assets/icon/pluss.png')} />
              </TouchableOpacity>
              <Text style={{fontSize: 18, fontWeight: '500'}}>0</Text>
              <TouchableOpacity style={{marginLeft: 3}}>
                <Image source={require('../assets/icon/minuss.png')} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

export {DaftarMenu};
