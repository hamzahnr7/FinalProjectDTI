import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {renderDaftarMenu} from './components';

const dataDummy = [
  {
    id: '',
    nama: 'Ayam Goreng',
    deskripsi: 'Ayam goreng dengan sambal terasi enaak',
    harga: '16.000',
  },

  {
    id: '',
    nama: 'Ayam Goreng',
    deskripsi: 'Ayam goreng dengan sambal terasi enaak',
    harga: '16.000',
  },

  {
    id: '',
    nama: 'Ayam Goreng',
    deskripsi: 'Ayam goreng dengan sambal terasi enaak',
    harga: '16.000',
  },
];

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
        data={dataDummy}
        renderItem={renderDaftarMenu}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export {DaftarMenu};
