import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Render from '../components';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const dataDummy = [
  {
    id: 1,
    gambar: 'cooking',
    foodname: 'Ayam Bakar',
    foodprice: '16.000',
  },
  {
    id: 2,
    gambar: 'cooking',
    foodname: 'Ayam Goreng',
    foodprice: '14.000',
  },
  {
    id: 3,
    gambar: 'cooking',
    foodname: 'Nasi Goreng',
    foodprice: '12.000',
  },
  {
    id: 4,
    gambar: 'cooking',
    foodname: 'Ayam Bakar',
    foodprice: '16.000',
  },
  {
    id: 5,
    gambar: 'cooking',
    foodname: 'Ayam Goreng',
    foodprice: '14.000',
  },
  {
    id: 6,
    gambar: 'cooking',
    foodname: 'Nasi Goreng',
    foodprice: '12.000',
  },
];

function EditMenu() {
  const navigation = useNavigation();
  return (
    <View style={{height: '100%'}}>
      <View style={css.header}>
        <Text style={css.headerWhite}>EDIT MENU</Text>
      </View>
      <View style={css.container}>
        <SafeAreaView style={{height: 'auto'}}>
          <FlatList
            data={dataDummy}
            renderItem={({item}) => <Render.renderMenuList item={item} />}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity
            style={css.createButton}
            onPress={() => navigation.navigate('MenuScreen')}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
              Create Menu
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  );
}

export {EditMenu};

const css = StyleSheet.create({
  header: {
    backgroundColor: '#2E3035',
    padding: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerWhite: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  container: {
    height: '92%',
    backgroundColor: '#2E3035',
    alignItems: 'center',
    opacity: 0.7,
    padding: 5,
  },
  createButton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#4DD35B',
    width: 300,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
});
