import React from 'react';
import {View, Text, FlatList} from 'react-native';

function StatusPesanan() {
  return (
    <View style= {{backgroundColor: '#FFF1E1'}}>
      <View style={{backgroundColor: '#FFB84C'}}>
        <Text style= {{
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
      <FlatList
          data={[...Array(10)]}
          showsVerticalScrollIndicator={true}
          keyExtractor={(a, i) => i + 'a'}
          renderItem={({item, index}) => (
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
                <View style={{height:100, width:100, backgroundColor: '#BF7940', borderRadius: 20}}></View>
                <View>
                  <Text style={{marginLeft: 10, fontSize: 14, color:'black', fontWeight: 'bold'}}>Pesanan Anda Sedang Dimasak</Text>
                  <Text style={{marginLeft: 10, fontSize: 14, color:'black', fontWeight: 'bold'}}>Tunggu Sebentar Lagi Yaa</Text> 
                  <Text style={{marginLeft: 10, marginTop: 10,fontSize: 12, fontWeight: 'normal'}}>Order Number : AC291</Text>
                  <Text style={{marginLeft: 10, marginTop: 10,fontSize: 12, fontWeight: 'normal'}}>Nomor Meja : 01</Text>
                </View>
            </View>
          )}
        />
    </View>
  );
}

export {StatusPesanan};
