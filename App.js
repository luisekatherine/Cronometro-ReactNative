import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [customInterval, setCustomInterval] = useState();

  const startTimer = () => {
    setCustomInterval(
      setInterval(() => {
        changeTime();
      },1000)
    );
  };

  const stopTimer = () => {
    if (customInterval) {
      clearInterval(customInterval);
    }
  }

  const clear = () => {
    stopTimer();
    setSeconds(0);
    setMinutes(0);
  }

  const changeTime = () => {
    setSeconds ((prevState) => {
      if (prevState + 1 == 60) {
        setMinutes(minutes + 1)
        return 0;
      }
      return prevState + 1;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cronometer
      </Text>
      <Image source={require('./cronometer.jpg')} style
      ={{width: 200, height: 120, marginBottom: 20, borderRadius:10}}></Image>
      <Text style={styles.TextTimer}>
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title='Start' onPress={startTimer}/>
        <Button title='Stop' onPress={stopTimer}/>
        <Button title='Clear' onPress={clear}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightslategrey'
  },
  TextTimer: {
    fontSize:30
  },
  buttonContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  }
});
