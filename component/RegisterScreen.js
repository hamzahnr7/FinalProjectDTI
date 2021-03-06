import React, {useState} from 'react';
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

function RegisterScreen() {
  const postRegistrasi = () => {
    axios({
      method: 'post',
      url: 'http://orderin-server.fun/regisAdmin',
      data: {
        username: user,
        password: pass,
      },
    }).then(function (response) {
      setData(response.data);
    });
    // axios
    //   // .get('https://reactnative.dev/movies.json')
    //   // .get('http://orderin-server.fun/daftarmenu')
    //   .post('http://orderin-server.fun/regisAdmin', {
    //     username = user,
    //     password = pass,
    //   })
    //   .then(function (response) {
    //     setData(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };
  const navigation = useNavigation();
  const [data, setData] = useState('');
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [pass1, setPass1] = useState('');
  const [button, setButton] = useState(false);
  const createAccount = () => {
    setButton(() => !button);
    if (pass == pass1) {
      console.log(user, pass);
      postRegistrasi();
      console.log(data);
      // navigation.navigate('LoginAdminScreen');
    } else {
      alert('Confirmasi Password Berbeda');
    }
  };
  return (
    <SafeAreaView style={css.main}>
      <View style={{marginBottom: 100}}>
        <Text style={css.texth2center}>Registration Account</Text>
      </View>
      <Text style={css.textcenter}>Username</Text>
      <TextInput
        style={css.inputtext}
        placeholder={'Username'}
        keyboardType="visible-password"
        onChangeText={(user) => setUser(user)}
        value={user}
      />
      <Text style={css.textcenter}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={css.inputtext}
        // placeholder={pass}
        onChangeText={(text) => setPass(text)}
        value={pass}
      />
      <Text style={css.textcenter}>Confirm Password</Text>
      <TextInput
        secureTextEntry={true}
        // placeholder={pass1}
        style={css.inputtext}
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
    fontFamily: 'Poppins',
  },
  textcenter: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins',
  },
  inputtext: {
    paddingHorizontal: 15,
    backgroundColor: '#626467',
    color: '#ffffff',
    margin: 5,
    borderRadius: 10,
    width: 250,
    textAlign: 'center',
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
