import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MainScreen from '../../screens/MainTab/MainScreen'
import {Ionicons} from "@expo/vector-icons"
import ListScreen from '../../screens/SecondTab/ListScreen'
import {NavigationContainer} from "@react-navigation/native";
import {ListStackNavigation} from "./ListStackNavigation";
import PrimaryButton from "../ui/PrimaryButton";
import {Button} from "react-native";
import IconButton from "../ui/IconButton";
import LoginPage from "../../screens/AccountTab/LoginPage";
import AccountStackNavigation from "./AccountStackNavigation";

const TabStack = createBottomTabNavigator()


function TabNavigation() {
  return <NavigationContainer>
        <TabStack.Navigator
            screenOptions={{
                tabBarActiveTintColor: "green"
            }}
        >
            <TabStack.Screen
                name='MainTab'
                component={MainScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color} />,
                }}
            />
            <TabStack.Screen
                name='SecondTab'
                component={ListStackNavigation}
                options={{
                    title: "List",
                    tabBarIcon: ({color}) => <Ionicons name="list" size={24} color={color} />,
                    headerShown: false
                }}
            />
            <TabStack.Screen
                name='AccountTab'
                component={AccountStackNavigation}
                options={{
                    title: "Account",
                    tabBarIcon: ({color}) => <IconButton icon="person" color={color} /> ,
                    headerShown: false
                }}
            />
        </TabStack.Navigator>
  </NavigationContainer>
}

export default TabNavigation