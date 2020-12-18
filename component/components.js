import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Icons = ({size, iconName, bg}) => {
  return (
    <View
      style={{
        width: 80,
        paddingVertical: 10,
        paddingHorizontal: 5,
        height: '100%',
        backgroundColor: bg,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}>
      <Image
        source={iconName}
        style={{width: size, height: size, borderRadius: 50}}
      />
    </View>
  );
};

const renderOrderList = ({item}) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    // alert('Go To Details Screen');
    navigation.navigate('OrderDetail');
  };
  return (
    <TouchableOpacity style={css.flatlistcontainer} onPress={gotoDetail}>
      <View>
        <Icons
          size={70}
          iconName={require('../assets/icon/cooking.png')}
          bg={'#489AC8'}
        />
      </View>
      <View style={css.TextContainer}>
        <View style={css.insideTextContainer}>
          <Text style={css.textTitle}>{item.order_number}</Text>
          <Text style={{marginBottom: 10}}>{item.status}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text>Meja {item.nomeja}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const renderMenuList = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={css.flatlistcontainer}>
      <View>
        <Icons
          size={70}
          iconName={require('../assets/icon/serving.png')}
          bg={'#C4C4C4'}
        />
      </View>
      <View style={css.TextContainer}>
        <View style={css.insideTextContainer}>
          <Text style={css.textTitle}>{item.foodname}</Text>
          <Text>Rp {item.foodprice}</Text>
        </View>
        <View style={css.flatlistIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
            <Image
              source={require('../assets/icon/edit.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/icon/erase.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const renderDaftarMenu = ({item}) => {
  return (
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
          {item.nama}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 6,
            fontSize: 12,
            width: 161,
            height: 36,
          }}>
          {item.deskripsi}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          Harga : Rp {item.harga}
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
  );
};

export default {Icons, renderOrderList, renderMenuList, renderDaftarMenu};

const css = StyleSheet.create({
  flatlistcontainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    width: 330,
    height: 100,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  TextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  insideTextContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  flatlistIcon: {
    width: 70,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
});
