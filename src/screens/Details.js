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

const JADWAL = [
  {
    jadwal_id: "01",
    bandara_id_keberangkatan: "B01",
    bandara_id_kedatangan: "B02",
    maskapai_id: "F01",
  },
  {
    jadwal_id: "02",
    bandara_id_keberangkatan: "B01",
    bandara_id_kedatangan: "B03",
    maskapai_id: "F01",
  },
  {
    jadwal_id: "03",
    bandara_id_keberangkatan: "B01",
    bandara_id_kedatangan: "B02",
    maskapai_id: "F02",
  },
  {
    jadwal_id: "04",
    bandara_id_keberangkatan: "B01",
    bandara_id_kedatangan: "B03",
    maskapai_id: "F02",
  },
  {
    jadwal_id: "05",
    bandara_id_keberangkatan: "B01",
    bandara_id_kedatangan: "B04",
    maskapai_id: "F03",
  },
  {
    jadwal_id: "06",
    bandara_id_keberangkatan: "B01",
    bandara_id_kedatangan: "B05",
    maskapai_id: "F05",
  },
];

const Details = ({ route, navigation }) => {  
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <ScrollView style={styles.scrollView}>
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
          <View style={styles.card}>
            <TouchableOpacity style={styles.theDetails}>
              <View style={styles.airport}>
                <Text style={styles.text}>{ route.params.text.keberangkatan }</Text>
                <Text style={styles.text}>{route.params.text.kedatangan}</Text>
              </View>
              <View style={styles.time}>
                <Text style={styles.text}>Pesawat Ragnarok</Text>
                <Text style={styles.text}>{route.params.text.tanggal}</Text>
              </View>
            </TouchableOpacity>            
          </View>
          <Text style={styles.copyright}>Eliza M - 119140002</Text>
        </SafeAreaView>
      </ScrollView>
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
    marginVertical: 50,
  },
});


export default Details;