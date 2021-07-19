import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Dimensions,
} from 'react-native';

import Background from './src/images/skylark.jpg';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8CDD7',
  },
  headerContainer: {
    height: height / 3,
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    paddingTop: '10%',
    color: '#222222',
    fontSize: 36,
  },
  version: {
    fontSize: 12,
    fontWeight: '700',
  },
});

const App = ({props}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar hidden />
        <View style={styles.headerContainer}>
          <ImageBackground
            source={Background}
            style={styles.backgroundImg}></ImageBackground>
        </View>
        <View
          style={{
            height: height - height / 3,
          }}>
          <View
            style={{
              flex: 3,
            }}>
            <Text style={styles.title}>Hello Skylark!</Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={{...styles.title, ...styles.version}}>V0.0.2</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
