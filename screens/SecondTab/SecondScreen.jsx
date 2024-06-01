import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function SecondScreen() {
    return <View style={styles.rootContainer}>
        <Text>The second app tab screen</Text>
    </View>
}

export default SecondScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})