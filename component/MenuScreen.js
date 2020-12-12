import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

function MenuScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={css.mainContainer}>
      <View style={css.insertImage}>
        <View style={css.image}>
          <Text style={css.TextWhite}>Insert Image</Text>
        </View>
      </View>
      <View style={css.viewContainer}>
        <Text style={css.TextWhite}>Name</Text>
        <TextInput placeholder={'Food Name'} style={css.InputText} />
      </View>
      <View style={css.viewContainer}>
        <Text style={css.TextWhite}>Price</Text>
        <TextInput placeholder={'Food Price'} style={css.InputText} />
      </View>
      <View style={css.viewContainer}>
        <Text style={css.TextWhite}>Description</Text>
        <TextInput placeholder={'Description'} style={css.InputDescription} />
      </View>
      <TouchableOpacity
        style={css.menuButton}
        onPress={() => navigation.navigate('AdminMenu')}>
        <Text style={css.buttonText}>Create Menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {MenuScreen};

const css = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2E3035',
    height: '100%',
  },
  InputText: {
    backgroundColor: '#B1B1B1',
    color: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 18,
  },
  InputDescription: {
    backgroundColor: '#B1B1B1',
    color: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 18,
    height: 150,
    marginBottom: 70,
  },
  menuButton: {
    backgroundColor: '#4DD35B',
    margin: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  TextWhite: {
    color: '#ffffff',
    fontSize: 16,
  },
  viewContainer: {
    marginHorizontal: 20,
  },
  insertImage: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#C4C4C4',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
  },
});
