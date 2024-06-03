import {StyleSheet, Text, View} from "react-native";

export default function AuthHeading({children}) {
    return <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {},
    text: {
      textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginTop: 10,
    }
})