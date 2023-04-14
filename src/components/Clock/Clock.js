import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Clock = () => {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        World clock
      </Text>
      <View style = {styles.line}/>
      <Text>
        Clock is running
        
      </Text>
      <Text>
      {clockState}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:'2%',
    backgroundColor:'black',
    height:'100%',
  },
  line:{
    height:.5,
    width:'100%',
    backgroundColor:'grey'
  },
  heading:{
    fontSize:50,
    color:'white',
    fontWeight:'700'
  }
});

export default Clock;
