import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import CommonHeaderRight from "./components/add_btn";
import AddItemScreen from "./screens/add_item";
import { createStackNavigator } from "@react-navigation/stack";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import IconButton from "./components/UI/IconButton";
import ManageExpense from "./screens/ManageExpense";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: "blue",
        },
        headerTintColor: "white",
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "orange",
        tabBarStyle: {
          backgroundColor: "blue",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "All Expenses") {
            iconName = focused ? "calendar" : "calendar-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={RecentExpenses} />
      <Tab.Screen name="All Expenses" component={AllExpenses} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Back"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add Expense"
          component={AddItemScreen}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "blue" },
          }}
        />
        <Stack.Screen
          name="ManageExpense"
          component={ManageExpense}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "blue" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
