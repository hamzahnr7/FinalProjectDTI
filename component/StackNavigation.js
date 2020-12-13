import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './LoginScreen';
import {RegisterScreen} from './RegisterScreen';
import {AdminScreen} from './AdminScreen';
import {UserScreen} from './UserScreen';
import {MenuScreen} from './MenuScreen';
import {PortalScreen} from './PortalScreen';
import {InputKeyScreen} from './InputKeyScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PortalScreen"
        component={PortalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginAdminScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisScreen"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AdminMenu"
        component={AdminScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InputKeyScreen"
        component={InputKeyScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserMenu"
        component={UserScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {StackNavigation};
