import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "#f3f3f3",
            borderBottomWidth: 1,
            borderBottomColor: "#003348",
          },
          headerTintColor: "#003348",
          headerBackTitleVisible: false,
          headerTitle: "Voltar",
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
