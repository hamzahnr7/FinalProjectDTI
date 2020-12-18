import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

function OrderDetailScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={css.mainBackground}>
      <View style={css.listContainer}>
        <View style={{alignItems: 'center'}}>
          <Text style={css.normalText}>Senin, 14 Desember 2020</Text>
        </View>
        <View style={css.flexVertical}>
          <View>
            <Text style={css.headerText}>Order Number</Text>
            <Text style={css.headerText}>ACS541</Text>
          </View>
          <View>
            <Text style={css.headerText}>Nomor Meja</Text>
            <Text style={css.headerText}>A1</Text>
          </View>
        </View>
        <SafeAreaView style={{height: 200}}>
          <Text style={css.centerText}>Detail Pesanan</Text>
          <View>
            <View style={css.listOrder}>
              <View>
                <Text style={css.normalText}>Ayam Bakar </Text>
                <Text style={css.normalText}>1x Rp 15.000</Text>
              </View>
              <View>
                <Text style={css.normalText}>Rp 15.000</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={css.listOrder}>
              <View>
                <Text style={css.normalText}>Ayam Goreng </Text>
                <Text style={css.normalText}>2x Rp 16.000</Text>
              </View>
              <View>
                <Text style={css.normalText}>Rp 32.000</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={css.listOrder}>
              <View>
                <Text style={css.normalText}>Es Teh Manis </Text>
                <Text style={css.normalText}>3x Rp 3.000</Text>
              </View>
              <View>
                <Text style={css.normalText}>Rp 9.000</Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
        <View style={css.flexVertical}>
          <Text style={css.normalText}>Total Harga</Text>
          <Text style={css.normalText}>Rp 56.000</Text>
        </View>
      </View>
      <View style={css.iconContainer}>
        <Image
          source={require('../../assets/icon/order.png')}
          style={{width: 100, height: 100}}
        />
      </View>
      <TouchableOpacity
        style={css.buttonStatus}
        onPress={() => navigation.goBack()}>
        <Text style={css.buttonText}>Sudah Dibayar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export {OrderDetailScreen};

const css = StyleSheet.create({
  buttonStatus: {
    backgroundColor: '#489AC8',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 50,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 18,
  },
  iconContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  mainBackground: {
    backgroundColor: '#2E3035',
    padding: 30,
    height: '100%',
  },
  listContainer: {
    backgroundColor: '#626467',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  headerText: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#ffffff',
  },
  normalText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#ffffff',
  },
  centerText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#ffffff',
    alignSelf: 'center',
    marginBottom: 5,
  },
  flexVertical: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
  listOrder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
