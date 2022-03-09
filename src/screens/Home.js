import React, {Component} from 'react';
import {
  //
  StyleSheet,
  //
  Text,
  //
  SafeAreaView,
  //
  View,
  //
  ScrollView,
  //
  TextInput,
  //
  TouchableOpacity,  
  //
  StatusBar, 
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#283593" />
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.header}>Mlaku.ID</Text>
          <Text style={styles.headline}>Mlaku dulu, Dolanan kemudian</Text>
          <View style={styles.main}>
            <View style={styles.group}>
              <Text style={styles.title}>Bandara Keberangkatan</Text>
              <View style={styles.search}>
                <Icon style={styles.icon} name="plane-departure" size={20} color='#283593'/>
                <TextInput
                  style={styles.input}
                  onChangeText={getText('keberangkatan')}
                  value={text.keberangkatan}
                  placeholder="Bandara Keberangkatan"
                />
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Bandara Tujuan</Text>
              <View style={styles.search}>
                <Icon style={styles.icon} name="plane-arrival" size={20} color='#283593' />
                <TextInput
                  style={styles.input}
                  onChangeText={getText('kedatangan')}
                  value={text.kedatangan}
                  placeholder="Bandara Tujuan"
                />
              </View>              
            </View>
            <View style={styles.group}>
              <Text style={styles.title}>Tanggal Keberangkatan</Text>
              <View style={styles.search}>
                <Icon style={styles.iconcalendar} name="calendar-day" size={20} color='#283593' />
                <TextInput
                  style={styles.input}
                  onChangeText={getText('tanggal')}
                  value={text.tanggal}
                  placeholder="Tanggal Keberangkatan"
                />
              </View>              
            </View>
            <View style={styles.group}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  navigation.navigate('Details', {
                     text                   
                  })                     
                }>
                <Text style={styles.buttonText}>Cari</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.copyright}>Eliza M - 119140002</Text>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#283593',
  },
  header: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    letterSpacing: 10,
    textAlign: 'center',
    marginTop: 20,    
  },
  headline: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 20,
  },
  main: {
    margin: 40,  
    marginTop: 50,  
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 0,
  },
  group: {
    marginBottom: 20,
  },
  search: {
    marginLeft:15,    
    flexDirection: 'row', 
    justifyContent: 'center',   
    alignItems: 'center',
  },
  iconcalendar: {
    paddingRight: 5,
  },
  title: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#283593',
  },
  input: {
    borderWidth: 1,
    borderColor: '#283593',
    borderRadius: 5,
    color: '#283593',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    width: 250,
    flex: 1,
  },
  button: {
    backgroundColor: '#ffee58',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#283593',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  copyright: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default Home;
