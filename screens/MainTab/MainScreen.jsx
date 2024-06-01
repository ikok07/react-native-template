import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../../components/ui/PrimaryButton'
import {useDispatch} from "react-redux"

function MainScreen() {

    const dispatch = useDispatch()

    function fetchItemsHandler() {
        
    }

    return <View style={styles.rootContainer}>
        <Text>The main app tab screen</Text>
        <PrimaryButton>Fetch API Items</PrimaryButton>
    </View>
}

export default MainScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})