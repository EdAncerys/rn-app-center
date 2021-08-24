import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Button,
  Pressable,
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
  subTitle: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#dc3545',
    fontSize: 12,
  },
  version: {
    fontSize: 12,
    fontWeight: '700',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 40,
    width: 80,
    height: 60,
    backgroundColor: '#20c997',
    margin: 20,
  },
  btnText: {
    fontSize: 24,
    fontWeight: '800',
  },
});

const App = ({}) => {
  const [count, setCount] = React.useState(0);

  const handleCountAdd = () => {
    setCount(count + 1);
  };

  const handleCountSubtract = () => {
    setCount(count - 1);
  };

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
            <Text style={styles.subTitle}>👾 Release Date: 24/08/2021</Text>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.title}>Count: {count}</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Pressable style={styles.btn} onPress={handleCountAdd}>
                  <Text style={styles.btnText}>+</Text>
                </Pressable>
                <Pressable style={styles.btn} onPress={handleCountSubtract}>
                  <Text style={styles.btnText}>-</Text>
                </Pressable>
              </View>
            </View>
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
