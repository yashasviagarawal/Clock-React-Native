import React, { useState, useRef, useCallback } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import Constants from "expo-constants";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Results from "./Result";
import Control from "./Control";
import { displayTime } from "./util";

export default function StopWatch(){
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState();
  const timer = useRef(null);

  const handleLeftBtn = useCallback(() => {
    if (isRunning()) {
      setResults((...previousResults) => [time, ...previousResults]);
    } else {
      setResults([]);
      setTimeout(0);
    }
  }, [isRunning, time]);

  const handleRightBtn = useCallback(() => {
    if (!isRunning) {
      const setInterval = setInterval(() => {
        setTime((previousTime) => previousTime + 1);
      }, 10);
      timer.current = interval;
    } else {
      clearInterval(timer.current);
    }
    setIsRunning((previousState) => !previousState);
  }, [isRunning]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayTime(new Date(time))}</Text>
      </View>
      <View style={styles.control}>
        <Control
          isRunning={isRunning}
          handleLeftBtn={handleLeftBtn}
          handleRightBtn={handleRightBtn}
        />
      </View>
      <View style={styles.result}>
        <Results results={results} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: Constants.statusBarHeight,
  },
  display:{
    flex:3/5,
    justifyContent:'center',
    alignItems:'center',
  },
  displayText:{
    color:'#fff',
    fontSize:70,
    fontWeight:'200',
    fontFamily: Platform.OS === "ios" ? 'Helvetica Neue' : null
  },
  control:{
    height:70,
    flexDirection:'row',
    justifyContent:'space-around',

  },
  result:{
    flex:2/5
  }
});
