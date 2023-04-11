import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Clock from "../components/Clock";
import StopWatch from "../components/StopWatch/StopWatch";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="StopWatch"
        component={StopWatch}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
