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

// const gotoAdmin = () => navigation.navigate('LoginAdminScreen');
// const navigation = useNavigation();
const renderOrderList = ({item}) => {
  return (
    <TouchableOpacity style={css.flatlistcontainer}>
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
          <TouchableOpacity>
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

export {Icons, renderOrderList, renderMenuList};

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
