import React from 'react';
import {DaftarMenu} from './DaftarMenu';
import {TotalOrder} from './TotalOrder';
import {StatusPesanan} from './StatusPesanan';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View} from 'react-native';

const IconMenu = ({name}) => (
  <View
<<<<<<< HEAD
    style={{backgroundColor: 'white', width: 60, height: 60, borderRadius: 60}}>
    <Image
      style={{alignSelf: 'center', marginTop: 5}}
      source={require('../assets/icon/menu.png')}
=======
    style={{
      backgroundColor: 'white',
      width: 60,
      height: 60,
      borderRadius: 60,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image
      style={{marginTop: 5, width: 40, height: 40}}
      source={require('../assets/icon/editmenu.png')}
>>>>>>> a567b84f81b52e6d3e5b76d44a411a2ab664f73f
    />
  </View>
);

const IconTotal = ({name}) => (
  <View
    style={{backgroundColor: 'white', width: 60, height: 60, borderRadius: 60}}>
    <Image
      style={{alignSelf: 'center', marginTop: 8, marginLeft: 2}}
      source={require('../assets/icon/invoices.png')}
    />
  </View>
);

const IconStatus = ({name}) => (
  <View
    style={{backgroundColor: 'white', width: 60, height: 60, borderRadius: 60}}>
    <Image
      style={{alignSelf: 'center', marginTop: 5}}
      source={require('../assets/icon/waiter.png')}
    />
  </View>
);

function UserScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {height: 92, backgroundColor: '#FFB84C'},
      }}>
      <Tab.Screen
        name="DaftaMenu"
        component={DaftarMenu}
        options={{tabBarLabel: '', tabBarIcon: IconMenu}}
      />
      <Tab.Screen
        name="TotalOrder"
        component={TotalOrder}
        options={{tabBarLabel: '', tabBarIcon: IconTotal}}
      />
      <Tab.Screen
        name="StatusPesanan"
        component={StatusPesanan}
        options={{tabBarLabel: '', tabBarIcon: IconStatus}}
      />
    </Tab.Navigator>
  );
}

export {UserScreen};
