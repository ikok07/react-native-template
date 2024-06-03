import {Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";

export default function IconButton({icon, color = "green", size = 24, onPress}) {
    return <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <Ionicons name={icon} size={size} color={color}/>
    </Pressable>
}

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})