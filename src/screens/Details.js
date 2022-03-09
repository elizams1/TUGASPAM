import React, {Component} from 'react';
import {
  //
  StyleSheet,
  //
  Text,
  //
  SafeAreaView,
  //
  ScrollView,
  //
  TextInput,
  //
  TouchableOpacity,  
  //
  StatusBar,
  View,
  FlatList,  

} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {JADWAL, MASKAPAI, BANDARA} from '../dataBase/dataBase.js';

const Details = ({ route, navigation }) => {  
  const data = route.params.text;
  const kedatanganId = BANDARA.find(item => item.bandara_nama === data.kedatangan).bandara_id;
  const keberangkatanId = BANDARA.find(item => item.bandara_nama === data.keberangkatan).bandara_id;
  const listAirplane = JADWAL.filter(item => 
    item.bandara_id_keberangkatan === keberangkatanId && 
    item.bandara_id_kedatangan === kedatanganId &&
    item.jadwal_keberangkatan === data.tanggal);
  console.log(listAirplane);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />  
      <SafeAreaView style={styles.container}>
        <View style={styles.topNavigation}>
          <View style={styles.back}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
              <Icon name="chevron-left" style={styles.buttonBack} size={20}/>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.header}>Mlaku.ID</Text>
            <Text style={styles.headline}>Mlaku dulu, Dolanan kemudian</Text>
          </View>
        </View>
        <View style={styles.main}>
          <Text style={styles.search}>Hasil Pencarian</Text>            
        </View> 
        <FlatList
          data={listAirplane}
          renderItem={({item}) => (              
            <View style={styles.card}>
              <TouchableOpacity style={styles.theDetails}>
                <View style={styles.airport}>
                  <Text style={styles.text}>
                    {BANDARA.find(subItem => subItem.bandara_id === item.bandara_id_keberangkatan).bandara_nama}
                  </Text>
                  <Text style={styles.text}>
                    {BANDARA.find(subItem => subItem.bandara_id === item.bandara_id_kedatangan).bandara_nama}
                  </Text>
                </View>
                <View style={styles.time}>
                  <Text style={styles.text}>
                    {MASKAPAI.find(subItem => subItem.maskapai_id === item.maskapai_id).maskapai_nama}
                  </Text>
                  <Text style={styles.text}>
                    {item.jadwal_keberangkatan}
                  </Text>
                </View>
              </TouchableOpacity>            
            </View>                           
          )}
          keyExtractor={item => item.jadwal_id}
          >

        </FlatList>

        <Text style={styles.copyright}>Eliza M - 119140002</Text>
      </SafeAreaView>
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    backgroundColor: '#283593',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  buttonBack:{
    color: '#FFFFFF',
    marginTop: 40,
    marginHorizontal: 40,
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',           
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 40,
  },
  search: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    marginVertical: 20,    
  },
  card: {
    marginHorizontal: 30,
  },
  theDetails: {
    backgroundColor: '#283593', 
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    elevation: 10,
  },
  airport: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,    
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: { 
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  copyright: {
    color: '#283593',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
});


export default Details;