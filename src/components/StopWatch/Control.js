import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function Control({ isRunning, handleLeftBtnPress, handleRightBtnPress }) {
  return (
    <>
      <Pressable
        style={[
          styles.controlBtnBorder,
          {
            backgroundColor: isRunning ? "#333333" : "#1c1c1e",
          },
        ]}
        onPress={() => {
          handleLeftBtnPress();
          console.log("Left button pressed");
        }}
      >
        <View style={[styles.controlBtn]}>
          <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
            {isRunning ? "Lap" : "Reset"}
          </Text>
        </View>
      </Pressable>

      <Pressable
        style={[
          styles.controlBtnBorder,
          {
            backgroundColor: isRunning ? "#340e0d" : "#0a2a12",
          },
        ]}
        onPress={() => {
          handleRightBtnPress();
          console.log("Right button pressed");
        }}
      >
        <View style={[styles.controlBtn]}>
          <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  controlBtnBorder: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 70,
  },
  controlBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default React.memo(Control);
