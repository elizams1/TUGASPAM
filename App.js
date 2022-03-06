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
  ToastAndroid,
} from 'react-native';

const App = () => {
  const [keberangkatan, onChangeKeberangkatan] = React.useState(null);
  const [tujuan, onChangeTujuan] = React.useState(null);
  const [tanggal, onChangeTanggal] = React.useState(null);
  return (
    <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Mlaku.ID</Text>
        <Text style={styles.headline}>Mlaku dulu, Dolanan kemudian</Text>
        <SafeAreaView style={styles.main}>
          <SafeAreaView style={styles.group}>
            <Text style={styles.title}>Bandara Keberangkatan</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeKeberangkatan}
              value={keberangkatan}
              placeholder="Bandara Keberangkatan"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.group}>
            <Text style={styles.title}>Bandara Tujuan</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeTujuan}
              value={tujuan}
              placeholder="Bandara Tujuan"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.group}>
            <Text style={styles.title}>Tanggal Keberangkatan</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeTanggal}
              value={tanggal}
              placeholder="Tanggal Keberangkatan"
            />
          </SafeAreaView>
          <SafeAreaView style={styles.group}>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                ToastAndroid.show('Mohon Tunggu Sebentar', ToastAndroid.SHORT)
              }>
              <Text style={styles.buttonText}>Cari</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
    </ScrollView>
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
    padding: 0,
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
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 0,
  },
  group: {
    marginBottom: 20,
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
  },
  button: {
    backgroundColor: '#ffee58',
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: '#283593',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
