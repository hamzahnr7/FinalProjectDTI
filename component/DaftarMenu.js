import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Render from './components';

const data = [
  {
    id: '1',
    nama: 'Ayam Goreng',
    deskripsi: 'Ayam goreng dengan sambal terasi enaak',
    harga: '16.000',
  },

  {
    id: '2',
    nama: 'Ayam Goreng',
    deskripsi: 'Ayam goreng dengan sambal terasi enaak',
    harga: '16.000',
  },

  {
    id: '3',
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
        data={data}
        renderItem={({item}) => <Render.renderDaftarMenu item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export {DaftarMenu};
