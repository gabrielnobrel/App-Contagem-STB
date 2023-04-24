import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";

const AppDrawer = createDrawerNavigator();

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <AppDrawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#003348",
        },

        drawerLabelStyle: {
          fontWeight: "bold",
        },

        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#5F9F9E",
        drawerInactiveBackgroundColor: "#000",
        drawerInactiveTintColor: "#ddd",

        headerShown: false,

        drawerItemStyle: {
          marginVertical: 5,
        },
      }}
    >
      <AppDrawer.Screen name="Home" component={Home} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;
