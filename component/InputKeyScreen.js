import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

function InputKeyScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={css.mainBackground}>
      <View>
        <Text style={css.headerText}>Input Admin Key</Text>
      </View>
      <View>
        <TextInput
          placeholder={'Key'}
          style={css.InputText}
          placeholderTextColor={'#ffffff'}
        />
      </View>
      <TouchableOpacity
        style={css.button}
        onPress={() => navigation.navigate('UserMenu')}>
        <Text style={css.textButton}>Submit Key</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {InputKeyScreen};

const css = StyleSheet.create({
  mainBackground: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E3035',
    height: '100%',
  },
  headerText: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: 'bold',
  },
  InputText: {
    backgroundColor: '#626467',
    width: 280,
    paddingVertical: 5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#ffffff',
    marginVertical: 20,
  },
  button: {
    width: 200,
    backgroundColor: '#4DD35B',
    paddingVertical: 10,
    borderRadius: 50,
    alignItems: 'center',
  },
  textButton: {
    fontSize: 18,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
