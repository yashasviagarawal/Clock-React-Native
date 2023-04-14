import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Clock from "../components/Clock/Clock";
import StopWatch from "../components/StopWatch/StopWatch";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Timer from "../components/Timer/Timer";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Clock"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let rn = route.name;

          if (rn === "Clock") {
            iconName = focused ? "clockcircle" : "clockcircleo";
            return <AntDesign name={iconName} size={30} color={"grey"} />;
          } else if (rn === "StopWatch") {
            iconName = focused ? "md-stopwatch-sharp" : "md-stopwatch-outline";
            return <Ionicons name={iconName} size={30} color={"grey"} />;
          } else if (rn === "Timer") {
            iconName = focused ? "md-timer" : "md-timer-outline";
            return <Ionicons name={iconName} size={30} color={"grey"} />;
          }
        },
        tabBarActiveTintColor: "white",
        tabBarStyle: { color: "black", backgroundColor: "black" },
        tabBarBadgeStyle: { color: "white", backgroundColor: "white" },
      })}
    >
      <Tab.Screen
        name="Clock"
        component={Clock}
        options={{
          headerTitle: "",
          headerLeft: () => (
            <Pressable>
              <Text style={{fontSize:20, color:'orange', marginHorizontal:10}}>Edit</Text>
            </Pressable>
          ),
          headerRight: () => (
            <Pressable>
              <Ionicons name="add" size={35} color="orange" />
            </Pressable>
          ),
          headerStyle:{backgroundColor:'black'}
        }}
      />
      <Tab.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Timer"
        component={Timer}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
