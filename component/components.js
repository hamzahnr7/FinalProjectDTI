import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';

const Icons = ({size, iconName, bg}) => {
  const gambar = {
    image: {
      1: require('../assets/icon/ayamgoreng.png'),
      2: require('../assets/icon/ayambakar.png'),
      3: require('../assets/icon/ayamtulanglunak.png'),
      4: require('../assets/icon/nasiputih.png'),
      5: require('../assets/icon/tehmanis.png'),
      6: require('../assets/icon/tehmanishangat.png'),
    },
  };
  return (
    <View
      style={{
        width: 80,
        paddingVertical: 10,
        paddingHorizontal: 5,
        height: '100%',
        backgroundColor: bg,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}>
      <Image
        source={gambar.image[iconName]}
        style={{width: size, height: size, borderRadius: 50}}
      />
    </View>
  );
};

const renderOrderList = ({item}) => {
  const navigation = useNavigation();
  const gotoDetail = () => {
    // alert('Go To Details Screen');
    navigation.navigate('OrderDetail');
  };
  return (
    <TouchableOpacity style={css.flatlistcontainer} onPress={gotoDetail}>
      <View>
        <Icons
          size={70}
          iconName={require('../assets/icon/cooking.png')}
          bg={'#489AC8'}
        />
      </View>
      <View style={css.TextContainer}>
        <View style={css.insideTextContainer}>
          <Text style={css.textTitle}>{item.order_number}</Text>
          <Text style={{marginBottom: 10}}>{item.status}</Text>
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text>Meja {item.nomeja}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const renderMenuList = ({item}) => {
  const navigation = useNavigation();
  return (
    <View style={css.flatlistcontainer}>
      <View>
        <Icons size={70} iconName={item.id} bg={'#C4C4C4'} />
      </View>
      <View style={css.TextContainer}>
        <View style={css.insideTextContainer}>
          <Text style={css.textTitle}>{item.foodname}</Text>
          <Text>Rp {item.foodprice}</Text>
        </View>
        <View style={css.flatlistIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')}>
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
};

const renderDaftarMenu = ({item}) => {
  const [jum, setJum] = useState(0);
  return (
    <View
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
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: '#BF7940',
          borderRadius: 100,
        }}>
        <Image
          style={{height: 100, width: 100, borderRadius: 100}}
          source={gambar.image[item.id]}
        />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          {item.nama}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 6,
            fontSize: 12,
            width: 161,
            height: 36,
          }}>
          {item.deskripsi}
        </Text>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 10,
            fontSize: 12,
            fontWeight: 'bold',
          }}>
          Harga : Rp {item.harga}
        </Text>
      </View>
      <View style={{flex: 1, flexDirection: 'row', marginTop: 75}}>
        <TouchableOpacity onPressIn={() => setJum((a) => a + 1)}>
          <Image source={require('../assets/icon/pluss.png')} />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontWeight: '500'}}>{jum}</Text>
        <TouchableOpacity
          style={{marginLeft: 3}}
          onPressIn={() => setJum((a) => a - 1)}>
          <Image source={require('../assets/icon/minuss.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const renderStatusPesanan = ({item}) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const navigation = useNavigation();
//   const setmodalaktif = () => {
//     setModalVisible(!modalVisible);
//     navigation.navigate('StatusPesanan');
//   };
//   return (
//     <View>
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => {
//           Alert.alert('Modal has been closed.');
//         }}>
//         <View
//           style={{
//             width: 321,
//             height: 310,
//             backgroundColor: '#FFF1E1',
//             alignSelf: 'center',
//             marginTop: 100,
//             borderRadius: 10,
//           }}>
//           <TouchableOpacity
//             style={{marginTop: 10, alignSelf: 'flex-end', marginRight: 10}}
//             onPress={() => {
//               setModalVisible(!modalVisible);
//             }}>
//             <Image source={require('../assets/icon/Cancel2.png')} />
//           </TouchableOpacity>
//           <Text
//             style={{
//               color: 'black',
//               fontSize: 12,
//               alignSelf: 'center',
//             }}>
//             Kamis, 3 Desember 2020
//           </Text>
//           <View
//             style={{
//               backgroundColor: 'black',
//               height: 1,
//               width: 300,
//               alignSelf: 'center',
//               margin: 5,
//             }}></View>
//           <View
//             style={{
//               flex: 0.05,
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <Text style={css.text1}>ORDER NUMBER</Text>
//             <Text style={css.text1}>ORDER NUMBER</Text>
//           </View>
//           <View
//             style={{
//               flex: 0.05,
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//               marginTop: 5,
//             }}>
//             <Text style={css.text1}>AC 291</Text>
//             <Text style={css.text1}>01</Text>
//           </View>
//           <View
//             style={{
//               backgroundColor: 'black',
//               height: 1,
//               width: 300,
//               alignSelf: 'center',
//               margin: 5,
//             }}></View>
//           <Text style={{fontSize: 14, marginLeft: 29}}>Subtotal</Text>
//           <View
//             style={{
//               flex: 0.7,
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//             }}>
//             <View
//               style={{
//                 flex: 0.5,
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//                 marginLeft: 29,
//               }}>
//               <Text style={css.text2}>1x Ayam Bakar</Text>
//               <Text style={css.text2}>2x Ayam Goreng</Text>
//               <Text style={css.text2}>3x Nasi Putih</Text>
//               <Text style={css.text2}>3x Es Teh Manis</Text>
//             </View>
//             <View
//               style={{
//                 flex: 0.5,
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//                 marginLeft: 76,
//               }}>
//               <Text style={css.text2}>Rp 15.000</Text>
//               <Text style={css.text2}>Rp 30.000</Text>
//               <Text style={css.text2}>Rp 15.000</Text>
//               <Text style={css.text2}>Rp 12.000</Text>
//             </View>
//           </View>
//           <View
//             style={{
//               backgroundColor: 'black',
//               height: 1,
//               width: 300,
//               alignSelf: 'center',
//               margin: 5,
//             }}></View>
//           <View
//             style={{
//               flex: 0.05,
//               flexDirection: 'row',
//               justifyContent: 'space-around',
//               marginTop: 10,
//             }}>
//             <View
//               style={{
//                 flex: 0.5,
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//                 marginLeft: 29,
//               }}>
//               <Text style={(css.text2, {fontWeight: 'bold'})}>Total :</Text>
//             </View>
//             <View
//               style={{
//                 flex: 0.5,
//                 flexDirection: 'column',
//                 justifyContent: 'flex-start',
//                 marginLeft: 76,
//               }}>
//               <Text style={(css.text2, {fontWeight: 'bold'})}>Rp 72.000</Text>
//             </View>
//           </View>
//         </View>
//       </Modal>
//       <TouchableOpacity
//         style={{
//           height: 120,
//           width: 350,
//           backgroundColor: '#FFC8AF',
//           elevation: 5,
//           marginVertical: 10,
//           flexDirection: 'row',
//           paddingVertical: 10,
//           paddingHorizontal: 10,
//           alignSelf: 'center',
//           borderRadius: 10,
//         }}
//         onPress={setmodalaktif}>
//         <View
//           style={{
//             height: 100,
//             width: 100,
//             backgroundColor: '#C85252',
//             borderRadius: 20,
//           }}>
//           <Image
//             style={{height: 100, width: 100}}
//             source={require('../assets/icon/cooking.png')}
//           />
//         </View>
//         <View>
//           <Text
//             style={{
//               marginLeft: 10,
//               fontSize: 14,
//               color: 'black',
//               fontWeight: 'bold',
//             }}>
//             {item.status}
//           </Text>
//           <Text
//             style={{
//               marginLeft: 10,
//               fontSize: 14,
//               color: 'black',
//               fontWeight: 'bold',
//             }}>
//             Tunggu Sebentar Lagi Yaa
//           </Text>
//           <Text
//             style={{
//               marginLeft: 10,
//               marginTop: 10,
//               fontSize: 12,
//               fontWeight: 'normal',
//             }}>
//             Order Number : {item.order_number}
//           </Text>
//           <Text
//             style={{
//               marginLeft: 10,
//               marginTop: 10,
//               fontSize: 12,
//               fontWeight: 'normal',
//             }}>
//             Nomor Meja : {item.nomeja}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

export {Icons, renderOrderList, renderMenuList, renderDaftarMenu};
export default {Icons, renderOrderList, renderMenuList, renderDaftarMenu};

const css = StyleSheet.create({
  flatlistcontainer: {
    marginVertical: 5,
    backgroundColor: 'white',
    width: 330,
    height: 100,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'stretch',
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
    justifyContent: 'space-around',
  },
  flatlistIcon: {
    width: 70,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
  },
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
