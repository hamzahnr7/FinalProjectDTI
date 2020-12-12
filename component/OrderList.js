import React, {useState} from 'react';
import {Icons} from './components';
import {
  View,
  Text,
  Image,
  Modal,
  TextInput,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const dataDummy = [
  {
    id: 1,
    status: 'cooking',
    order_number: 'acs-912',
    nomeja: '01',
    pembayaran: 'CASH',
  },
  {
    id: 2,
    status: 'cooking',
    order_number: 'acs-923',
    nomeja: '05',
    pembayaran: 'CASH',
  },
  {
    id: 3,
    status: 'cooking',
    order_number: 'acs-912',
    nomeja: '04',
    pembayaran: 'CASHLESS',
  },
  {
    id: 4,
    status: 'cooking',
    order_number: 'acs-912',
    nomeja: '01',
    pembayaran: 'CASH',
  },
  {
    id: 5,
    status: 'cooking',
    order_number: 'acs-923',
    nomeja: '05',
    pembayaran: 'CASH',
  },
  {
    id: 6,
    status: 'cooking',
    order_number: 'acs-912',
    nomeja: '04',
    pembayaran: 'CASHLESS',
  },
];

const renderList = ({item}) => (
  <TouchableOpacity style={css.flatlistcontainer}>
    <View>
      <Icons
        size={70}
        iconName={require('../assets/icon/cooking.png')}
        bg={'#489AC8'}
      />
    </View>
    <View style={css.TextContainer}>
      <View style={css.insideTextContainer}>
        <Text>{item.order_number}</Text>
        <Text>{item.nomeja}</Text>
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text>{item.pembayaran}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

function OrderList() {
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
        <Text style={css.headerWhite}>ORDER LIST</Text>
        <TouchableOpacity
          style={css.headerWhite}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
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
          <View>
            <FlatList data={dataDummy} renderItem={renderList} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export {OrderList};

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
    alignItems: 'center',
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
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
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
