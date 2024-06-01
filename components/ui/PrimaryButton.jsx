import { Pressable, StyleSheet, Text } from "react-native";

export default function PrimaryButton({style, textStyle, onPress, isLoading, children}) {
    return <Pressable onPress={onPress} style={({pressed}) => [styles.buttonContainer, pressed && styles.pressed, style, isLoading && styles.buttonLoading]}>
        <Text style={[styles.buttonText, textStyle]}>{isLoading ? "Loading..." : children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 12,
        backgroundColor: "green",
        borderRadius: 7
    },
    buttonText: {
        fontSize: 16,
        color: "white",
        textAlign: "center"
    },
    pressed: {
        opacity: 0.7
    },
    buttonLoading: {
        backgroundColor: "gray"
    }
})