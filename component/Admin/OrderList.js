import React, {useEffect} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Render, {renderOrderList} from '../components';
import {View, Text, FlatList, SafeAreaView, StyleSheet} from 'react-native';

const dataDummy = [
  {
    id: 1,
    status: 'Siap Disajikan',
    order_number: 'ACS521',
    nomeja: '01',
    pembayaran: 'CASH',
  },
  {
    id: 2,
    status: 'Sedang Dimasak',
    order_number: 'ACS524',
    nomeja: '05',
    pembayaran: 'CASH',
  },
  {
    id: 3,
    status: 'Sedang Dimasak',
    order_number: 'ACS541',
    nomeja: '04',
    pembayaran: 'CASHLESS',
  },
  {
    id: 4,
    status: 'Sudah Dibayar',
    order_number: 'ACS544',
    nomeja: '01',
    pembayaran: 'CASH',
  },
  {
    id: 5,
    status: 'Sudah Dibayar',
    order_number: 'ACS551',
    nomeja: '05',
    pembayaran: 'CASH',
  },
  {
    id: 6,
    status: 'Belum Dibayar',
    order_number: 'ACS553',
    nomeja: '04',
    pembayaran: 'CASHLESS',
  },
];

function OrderList() {
  const navigation = useNavigation();
  return (
    <View>
      <View style={css.header}>
        <Text style={css.headerWhite}>ORDER LIST</Text>
      </View>
      <View style={css.container}>
        <SafeAreaView style={{height: 'auto'}}>
          <View>
            <FlatList
              data={dataDummy}
              // renderItem={renderOrderList}
              renderItem={({item}) => (
                <Render.renderOrderList item={item} id={item.id} />
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

export {OrderList};

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
});
