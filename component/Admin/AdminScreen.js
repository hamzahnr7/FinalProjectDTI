import React from 'react';
import {OrderList} from './OrderList';
import {EditMenu} from './EditMenu';
import {ControlPanel} from './ControlPanel';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';

const Icon1 = () => (
  <Image
    source={require('../../assets/icon/home.png')}
    style={{width: 40, height: 40}}
  />
);

const Icon2 = () => (
  <Image
    source={require('../../assets/icon/order-list.png')}
    style={{width: 40, height: 40}}
  />
);

const Icon3 = () => (
  <Image
    source={require('../../assets/icon/editmenu.png')}
    style={{width: 40, height: 40}}
  />
);

function AdminScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          padding: 10,
          height: 80,
        },
      }}>
      <Tab.Screen
        name="ControlPanel"
        component={ControlPanel}
        options={{tabBarLabel: '', tabBarIcon: Icon1}}
      />
      <Tab.Screen
        name="OrderList"
        component={OrderList}
        options={{tabBarLabel: '', tabBarIcon: Icon2}}
      />
      <Tab.Screen
        name="EditMenu"
        component={EditMenu}
        options={{tabBarLabel: '', tabBarIcon: Icon3}}
      />
    </Tab.Navigator>
  );
}

export {AdminScreen};
