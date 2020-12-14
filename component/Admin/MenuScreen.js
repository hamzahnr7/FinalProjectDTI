import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';

function MenuScreen() {
  const navigation = useNavigation();
  const [jumlah, setJumlah] = useState(0);
  return (
    <View style={css.mainContainer}>
      <View style={css.insertImage}>
        <View style={css.image}>
          <Text style={css.blueText}>Insert Image</Text>
        </View>
        <View>
          <View>
            <Text style={css.blueText}>Name</Text>
            <TextInput placeholder={'Nasi Goreng'} style={css.InputText} />
          </View>
          <View>
            <Text style={css.blueText}>Price</Text>
            <TextInput placeholder={'Rp 10.000'} style={css.InputText} />
          </View>
        </View>
      </View>
      <View>
        <Text style={css.blueText}>Description</Text>
        <TextInput
          placeholder={
            'Makanan yang terbuat dari nasi yang sudah matang lalu digoreng menggunakan bumbu spesial'
          }
          style={css.InputDescription}
        />
      </View>
      <SafeAreaView style={{marginTop: 40, marginBottom: 60}}>
        <View style={{alignSelf: 'center'}}>
          <Text style={css.blueText}>Makanan yang Tersedia</Text>
        </View>
        <View style={css.inputJumlahContainer}>
          <TouchableOpacity onPress={() => setJumlah((a) => a - 1)}>
            <Image source={require('../../assets/icon/minuss.png')} />
          </TouchableOpacity>
          <TextInput
            style={css.inputJumlah}
            value={jumlah}
            onChangeText={(text) => onChangeText(text)}
          />
          <TouchableOpacity onPress={() => setJumlah((a) => a + 1)}>
            <Image source={require('../../assets/icon/pluss.png')} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <TouchableOpacity
        style={css.menuButton}
        onPress={() => navigation.navigate('AdminMenu')}>
        <Text style={css.buttonText}>Create Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

export {MenuScreen};

const css = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#2E3035',
    height: '100%',
    padding: 20,
  },
  InputText: {
    backgroundColor: '#B1B1B1',
    color: '#ffffff',
    height: 40,
    width: 160,
    borderRadius: 15,
    fontSize: 18,
    textAlign: 'center',
  },
  InputDescription: {
    backgroundColor: '#B1B1B1',
    color: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 15,
    fontSize: 18,
    height: 150,
    textAlignVertical: 'top',
  },
  inputJumlahContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 120,
    margin: 10,
  },
  inputJumlah: {
    backgroundColor: '#B1B1B1',
    width: 40,
    height: 40,
    borderRadius: 10,
    textAlign: 'center',
  },
  menuButton: {
    backgroundColor: '#4DD35B',
    // margin: 20,
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  blueText: {
    color: '#449AFF',
    fontSize: 16,
    marginVertical: 5,
    // alignSelf: 'center',
  },
  insertImage: {
    marginBottom: 10,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#C4C4C4',
    width: 140,
    height: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },
});
