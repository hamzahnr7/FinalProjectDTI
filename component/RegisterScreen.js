import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const postRegistrasi = () => {
  axios
    .post('http://localhost:8080/regisAdmin', {
      username: user,
      password: pass,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// useEffect(() => {
//   postRegistrasi;
// }, []);

function RegisterScreen() {
  const [user, setUser] = useState('Username');
  const [pass, setPass] = useState('Password');
  const [pass1, setPass1] = useState('Password');
  const navigation = useNavigation();
  const createAccount = () => navigation.navigate('LoginScreen');
  return (
    <SafeAreaView style={css.main}>
      <View style={{marginBottom: 100}}>
        <Text style={css.texth2center}>Registration Account</Text>
      </View>
      <TextInput
        style={css.inputtext}
        placeholderTextColor="#9B9B9B"
        onChangeText={(text) => setUser(text)}
        value={user}
      />
      <TextInput
        style={css.inputtext}
        placeholderTextColor="#9B9B9B"
        onChangeText={(text) => setPass(text)}
        value={pass}
      />
      <TextInput
        style={css.inputtext}
        placeholderTextColor="#9B9B9B"
        onChangeText={(text) => setPass1(text)}
        value={pass1}
      />
      <TouchableOpacity style={css.loginbutton} onPress={createAccount}>
        <Text style={{fontSize: 16}}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {RegisterScreen};

const css = StyleSheet.create({
  main: {
    backgroundColor: '#000000',
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    height: '100%',
  },
  texth2center: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  inputtext: {
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
    marginTop: 25,
  },
});
