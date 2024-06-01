import { Pressable, StyleSheet, Text } from "react-native";

export default function PrimaryButton({onPress, children}) {
    return <Pressable style={({pressed}) => [styles.buttonContainer, pressed && styles.pressed]}>
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 6,
        paddingVertical: 12,
        backgroundColor: "green"
    },
    buttonText: {
        fontSize: 16,
        color: "white"
    },
    pressed: {
        opacity: 0.7
    }
})