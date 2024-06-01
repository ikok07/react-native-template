import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

export default function PostsRow({post}) {
    const navigation = useNavigation()

    function rowPressedHandler() {
        navigation.navigate("PostDetails", {post})
    }

    return <Pressable onPress={rowPressedHandler} style={({pressed}) => [styles.container, pressed && styles.pressed]}>
        <Text style={styles.id}>#{post.id}</Text>
        <Text style={styles.title}>{post.title}</Text>
        <Ionicons style={styles.icon} name="arrow-forward" size={24} color="#555"/>
    </Pressable>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 5,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#555"
    },
    pressed: {
        opacity: 0.7
    },
    id: {
        fontWeight: "bold",
        color: "#555",
        fontSize: 18,
    },
    title: {
        width: "80%",
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
})