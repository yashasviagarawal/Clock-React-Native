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
    <SafeAreaView>
      <Text>
        Clock is running
        {clockState}
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {},
});

export default Clock;
