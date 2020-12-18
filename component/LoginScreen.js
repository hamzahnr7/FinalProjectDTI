import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function LoginScreen() {
  const navigation = useNavigation();
  const gotoRegis = () => navigation.navigate('RegisScreen');
  const gotoAdmin = () => navigation.navigate('AdminMenu');
  return (
    <SafeAreaView style={css.main}>
      <View>
        <View style={{marginTop: 100}}>
          <Text style={css.texth2center}>ORDERIN</Text>
        </View>
        <View style={{marginVertical: 100}}>
          <TextInput
            placeholder="Username"
            style={css.inputtext}
            placeholderTextColor="#9B9B9B"
          />
          <TextInput
            placeholder="Password"
            style={css.inputtext}
            placeholderTextColor="#9B9B9B"
          />
          <TouchableOpacity style={css.loginbutton} onPress={gotoAdmin}>
            <Text style={css.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop: 40}}>
        <Text style={css.texth5}>
          Belum Mempunyai Akun?{' '}
          <Text style={css.textlink} onPress={gotoRegis}>
            Registrasi
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

export {LoginScreen};

const css = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  texth2: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Poppins',
  },
  texth2center: {
    fontFamily: 'Poppins',
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  texth5: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 14,
  },
  textlink: {
    fontFamily: 'Poppins',
    color: '#449AFF',
    fontSize: 14,
  },
  inputtext: {
    fontFamily: 'Poppins',
    paddingHorizontal: 15,
    backgroundColor: '#626467',
    color: '#9B9B9B',
    margin: 5,
    borderRadius: 10,
    width: 250,
  },
  loginbutton: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#4DD35B',
    borderRadius: 20,
    padding: 10,
    width: 180,
    margin: 5,
  },
  buttontext: {
    color: '#000000',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
