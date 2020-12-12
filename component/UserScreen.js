import React from 'react';
import {DaftarMenu} from './DaftarMenu';
import {TotalOrder} from './TotalOrder'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
        options={{tabBarLabel: 'Daftar Menu'}}
        />
      <Tab.Screen
        name="TotalOrder"
        component={TotalOrder}
        options={{tabBarLabel:'Total Pesanan'}}
        />
    </Tab.Navigator>
    
  );
}

export {UserScreen};