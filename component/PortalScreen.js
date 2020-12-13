import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function PortalScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={css.mainBackground}>
      <View>
        <Text style={css.HeaderText}>ORDERIN</Text>
      </View>
      <View style={css.container}>
        <View style={{marginBottom: 15}}>
          <Text style={css.buttontext}>Choose Your Role :</Text>
        </View>
        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('LoginAdminScreen')}>
          <Text style={css.buttontext}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={css.button}
          onPress={() => navigation.navigate('InputKeyScreen')}>
          <Text style={css.buttontext}>User</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export {PortalScreen};

const css = StyleSheet.create({
  mainBackground: {
    backgroundColor: '#2E3035',
    // padding: 45,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  HeaderText: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#5C5C5C',
    paddingHorizontal: 40,
    paddingVertical: 20,
    alignItems: 'center',
    marginVertical: 80,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#005382',
    alignItems: 'center',
    width: 'auto',
    paddingVertical: 10,
    borderRadius: 50,
    width: 150,
    margin: 10,
  },
  buttontext: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'Poppins',
  },
});
