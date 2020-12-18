import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Render, {renderDaftarMenu} from './components';

const data = [
  {
    id: '1',
    nama: 'Ayam Goreng',
    deskripsi: 'Ayam goreng dengan sambal terasi pedas mantap',
    harga: '16.000',
  },

  {
    id: '2',
    nama: 'Ayam Bakar',
    deskripsi: 'Ayam bakar nikmat dengan bumbu kecap khas',
    harga: '16.000',
  },

  {
    id: '3',
    nama: 'Ayam Tulang Lunak',
    deskripsi: 'Ayam tulang lunak empuk sampai tulang-tulangnya',
    harga: '16.000',
  },

  {
    id: '4',
    nama: 'Nasi Putih',
    deskripsi: 'Nasi putih dari beras pilihan langsung dari petaninya',
    harga: '5.000',
  },

  {
    id: '5',
    nama: 'Es Teh Manis',
    deskripsi: 'Teh manis dikasih es biar dingin dan segar',
    harga: '4.000',
  },

  {
    id: '6',
    nama: 'Teh Panas Manis',
    deskripsi: 'Teh panas paling enak pas lagi musim dingin-dinginnya',
    harga: '4.000',
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
        renderItem={({item}) => (
          <Render.renderDaftarMenu item={item} id={item.nama} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export {DaftarMenu};
