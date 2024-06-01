import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MainScreen from '../../screens/MainTab/MainScreen'
import {Ionicons} from "@expo/vector-icons"
import SecondScreen from '../../screens/SecondTab/SecondScreen'

const TabStack = createBottomTabNavigator()


function TabNavigation() {
  return <NavigationContainer>
        <TabStack.Navigator>
            <TabStack.Screen
                name='MainTab'
                component={MainScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({tintColor}) => <Ionicons name="home" size={24} color={tintColor} />
                }}
            />
            <TabStack.Screen
                name='SecondTab'
                component={SecondScreen}
                options={{
                    title: "Secondary",
                    tabBarIcon: ({tintColor}) => <Ionicons name="home" size={24} color={tintColor} />
                }}
            />
        </TabStack.Navigator>
  </NavigationContainer>
}

export default TabNavigation