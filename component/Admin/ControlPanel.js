import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

const dataDummy = [
  {
    id: 1,
    username: 'A1',
    role: 'User',
  },
  {
    id: 2,
    username: 'A2',
    role: 'User',
  },
  {
    id: 3,
    username: 'A3',
    role: 'User',
  },
];

const renderFlatlist = ({item}) => {
  return (
    <View style={css.flatlistContainer}>
      <View>
        <Text style={css.username}>{item.username}</Text>
      </View>
      <View>
        <Text style={css.role}>{item.role}</Text>
      </View>
    </View>
  );
};

function ControlPanel() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{height: '100%'}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Apakah anda ingin Menutup Retoran?
            </Text>
            <TextInput placeholder={'Username'} style={styles.inputModal} />
            <TextInput placeholder={'Password'} style={styles.inputModal} />
            <TouchableOpacity
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(!modalVisible);
                navigation.navigate('LoginAdminScreen');
              }}>
              <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={css.dataContainer}>
        <View>
          <Text style={css.dataTitle}>Admin Key</Text>
          <Text style={css.dataText1}>r4Nk3Y</Text>
        </View>
        <View>
          <Text style={css.dataTitle}>Jumlah User</Text>
          <Text style={css.dataText2}>2</Text>
        </View>
      </View>
      <View style={css.bodyContainer}>
        <View style={css.adminContainer}>
          <View>
            <Text style={css.username}>Username</Text>
            <Text style={css.role}>Admin</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TouchableOpacity
              style={css.IconContainer}
              onPress={() => setModalVisible(true)}>
              <Image
                source={require('../../assets/icon/exit.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={dataDummy}
            renderItem={renderFlatlist}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export {ControlPanel};

const css = StyleSheet.create({
  dataContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    backgroundColor: '#2E3035',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: '100%',
  },
  adminContainer: {
    backgroundColor: '#489AC8',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  flatlistContainer: {
    backgroundColor: '#C4C4C4',
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  IconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  dataTitle: {
    color: '#489AC8',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dataText1: {
    fontFamily: 'Poppins',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  dataText2: {
    fontFamily: 'Poppins',
    fontSize: 20,
    textAlign: 'right',
  },
  username: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 26,
  },
  role: {
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#ffffff',
  },
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputModal: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
});
