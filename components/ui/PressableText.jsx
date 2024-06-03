import {Pressable, StyleSheet, Text} from "react-native";

export function PressableText({children, onPress, style, textStyle}) {
    return <Pressable onPress={onPress} style={({pressed}) => [style, pressed && styles.pressed]}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
}

const styles = StyleSheet.create({
    text: {
        color: "green",
        fontWeight: "bold"
    },
    pressed: {
        opacity: 0.7
    }
})