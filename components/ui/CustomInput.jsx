import {StyleSheet, Text, TextInput, View} from "react-native";

export default function CustomInput({label, placeholder, autoFocus, inputAccessoryViewID, value, onChange}) {
    return <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.inputContainer}>
            <TextInput
                placeholder={placeholder}
                style={styles.input}
                value={value}
                onChange={onChange}
                autoFocus={autoFocus}
                inputAccessoryViewID={inputAccessoryViewID}
            />
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
      gap: 5
    },
    label: {
      fontSize: 16
    },
    inputContainer: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        paddingHorizontal: 8,
        paddingVertical: 12
    },
    input: {
        fontSize: 16
    }
})