import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
  StyleSheet,
} from 'react-native';

function StatusPesanan() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{backgroundColor: '#FFF1E1'}}>
      <View style={{backgroundColor: '#FFB84C'}}>
        <Text
          style={{
            fontSize: 24,
            color: 'white',
            fontWeight: 'bold',
            marginTop: 11,
            marginBottom: 12,
            alignItems: 'center',
            textAlign: 'center',
          }}>
          Status Pesanan
        </Text>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View
          style={{
            width: 321,
            height: 310,
            backgroundColor: '#FFF1E1',
            alignSelf: 'center',
            marginTop: 100,
            borderRadius: 10,
          }}>
          <TouchableOpacity
            style={{marginTop: 10, alignSelf: 'flex-end', marginRight: 10}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Image source={require('../assets/icon/Cancel2.png')} />
          </TouchableOpacity>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              alignSelf: 'center',
            }}>
            Kamis, 3 Desember 2020
          </Text>
          <View
            style={{
              backgroundColor: 'black',
              height: 1,
              width: 300,
              alignSelf: 'center',
              margin: 5,
            }}></View>
          <View
            style={{
              flex: 0.05,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={css.text1}>ORDER NUMBER</Text>
            <Text style={css.text1}>ORDER NUMBER</Text>
          </View>
          <View
            style={{
              flex: 0.05,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 5,
            }}>
            <Text style={css.text1}>AC 291</Text>
            <Text style={css.text1}>01</Text>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              height: 1,
              width: 300,
              alignSelf: 'center',
              margin: 5,
            }}></View>
          <Text style={{fontSize: 14, marginLeft: 29}}>Subtotal</Text>
          <View
            style={{
              flex: 0.7,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: 29,
              }}>
              <Text style={css.text2}>1x Ayam Bakar</Text>
              <Text style={css.text2}>2x Ayam Goreng</Text>
              <Text style={css.text2}>3x Nasi Putih</Text>
              <Text style={css.text2}>3x Es Teh Manis</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: 76,
              }}>
              <Text style={css.text2}>Rp 15.000</Text>
              <Text style={css.text2}>Rp 30.000</Text>
              <Text style={css.text2}>Rp 15.000</Text>
              <Text style={css.text2}>Rp 12.000</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              height: 1,
              width: 300,
              alignSelf: 'center',
              margin: 5,
            }}></View>
          <View
            style={{
              flex: 0.05,
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 10,
            }}>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: 29,
              }}>
              <Text style={(css.text2, {fontWeight: 'bold'})}>Total :</Text>
            </View>
            <View
              style={{
                flex: 0.5,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                marginLeft: 76,
              }}>
              <Text style={(css.text2, {fontWeight: 'bold'})}>Rp 72.000</Text>
            </View>
          </View>
        </View>
      </Modal>
      <FlatList
        data={[...Array(3)]}
        showsVerticalScrollIndicator={true}
        keyExtractor={(a, i) => i + 'a'}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              height: 120,
              width: 350,
              backgroundColor: '#FFC8AF',
              elevation: 5,
              marginVertical: 10,
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 10,
              alignSelf: 'center',
              borderRadius: 10,
            }}
            onPress={() => {
              setModalVisible(true);
            }}>
            <View
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#C85252',
                borderRadius: 20,
              }}>
              <Image
                style={{height: 100, width: 100}}
                source={require('../assets/icon/cooking.png')}
              />
            </View>
            <View>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Pesanan Anda Sedang Dimasak
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 14,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                Tunggu Sebentar Lagi Yaa
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: 'normal',
                }}>
                Order Number : AC291
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  marginTop: 10,
                  fontSize: 12,
                  fontWeight: 'normal',
                }}>
                Nomor Meja : 01
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export {StatusPesanan};

const css = StyleSheet.create({
  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  text2: {
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
});
