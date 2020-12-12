import React, {useState} from 'react';
import {Icons, modalLogout} from './components';
import {
  View,
  Text,
  Image,
  Modal,
  FlatList,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const dataDummy = [
  {
    id: 1,
    gambar: 'cooking',
    foodname: 'Ayam Bakar',
    foodprice: '16.000',
  },
  {
    id: 2,
    gambar: 'cooking',
    foodname: 'Ayam Goreng',
    foodprice: '14.000',
  },
  {
    id: 3,
    gambar: 'cooking',
    foodname: 'Nasi Goreng',
    foodprice: '12.000',
  },
  {
    id: 4,
    gambar: 'cooking',
    foodname: 'Ayam Bakar',
    foodprice: '16.000',
  },
  {
    id: 5,
    gambar: 'cooking',
    foodname: 'Ayam Goreng',
    foodprice: '14.000',
  },
  {
    id: 6,
    gambar: 'cooking',
    foodname: 'Nasi Goreng',
    foodprice: '12.000',
  },
];

const renderList = ({item}) => (
  <View style={css.flatlistcontainer}>
    <View>
      <Icons
        size={70}
        iconName={require('../assets/icon/serving.png')}
        bg={'#C4C4C4'}
      />
    </View>
    <View style={css.TextContainer}>
      <View style={css.insideTextContainer}>
        <Text>{item.foodname}</Text>
        <Text>{item.foodprice}</Text>
      </View>
      <View
        style={{
          width: 70,
          display: 'flex',
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/edit.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/erase.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

function EditMenu() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={css.mainModal}>
          <View style={css.modalContainer}>
            <View>
              <Text style={css.modalTextHeader}>Logout</Text>
              <TouchableOpacity
                style={css.modalXButton}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Image
                  source={require('../assets/icon/cancel.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
            <TextInput placeholder={'Username'} style={css.modalTextInput} />
            <TextInput placeholder={'Password'} style={css.modalTextInput} />
            <TouchableOpacity style={css.modalButton}>
              <Text style={{color: 'white'}}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={css.header}>
        <Text style={css.headerWhite}>EDIT MENU</Text>
        <TouchableOpacity
          style={css.headerWhite}
          onPress={() => setModalVisible(!modalVisible)}>
          <View
            style={{
              backgroundColor: '#ffffff',
              borderRadius: 50,
              padding: 5,
            }}>
            <Image
              source={require('../assets/icon/exit.png')}
              style={{
                width: 15,
                height: 15,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={css.container}>
        <ScrollView>
          <FlatList data={dataDummy} renderItem={renderList} />
        </ScrollView>
        <TouchableOpacity style={css.createButton}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            Create Menu
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export {EditMenu};

const css = StyleSheet.create({
  header: {
    backgroundColor: '#2E3035',
    padding: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWhite: {
    color: 'white',
    fontSize: 20,
  },
  container: {
    height: '92%',
    backgroundColor: '#2E3035',
    alignItems: 'center',
    opacity: 0.7,
    padding: 10,
  },
  flatlistcontainer: {
    margin: 5,
    backgroundColor: 'white',
    width: 300,
    height: 80,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  TextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  insideTextContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  createButton: {
    alignItems: 'center',
    backgroundColor: '#4DD35B',
    width: 300,
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  mainModal: {
    alignItems: 'center',
    paddingTop: 70,
  },
  modalContainer: {
    padding: 20,
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E3035',
    borderRadius: 10,
  },
  modalTextInput: {
    width: 200,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#626467',
    justifyContent: 'center',
    paddingLeft: 20,
    marginVertical: 5,
  },
  modalTextHeader: {
    marginBottom: 10,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalXButton: {
    position: 'absolute',
    right: -70,
    top: -5,
    backgroundColor: 'gray',
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  modalButton: {
    backgroundColor: '#EF3829',
    padding: 10,
    borderRadius: 50,
    marginTop: 15,
  },
});
