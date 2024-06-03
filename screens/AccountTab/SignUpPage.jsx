import {Button, InputAccessoryView, ScrollView, StyleSheet, View} from "react-native";
import AuthHeading from "../../components/Auth/AuthHeading";
import CustomInput from "../../components/ui/CustomInput";
import PrimaryButton from "../../components/ui/PrimaryButton";
import {PressableText} from "../../components/ui/PressableText";
import {useState} from "react";

export function SignUpPage({navigation}) {
    const inputId = "signUpInput"

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function signUpHandler() {

    }

    return <>
        <ScrollView style={styles.rootContainer} keyboardDismissMode="on-drag">
            <View style={styles.mainContainer}>
                <AuthHeading>Create your account</AuthHeading>
                <View style={styles.inputsContainer}>
                    <CustomInput
                        label="Name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(v) => setName(v)}
                        autoFocus
                        inputAccessoryViewID={inputId}
                    />
                    <CustomInput label="Email" placeholder="Enter your email" value={email} onChange={(v) => setEmail(v)} inputAccessoryViewID={inputId}/>
                    <CustomInput label="Password" placeholder="Enter your password" value={password} onChange={(v) => setPassword(v)} inputAccessoryViewID={inputId} />
                    <CustomInput label="Confirm Password" placeholder="Confirm your password" value={confirmPassword} onChange={(v) => setConfirmPassword(v)} inputAccessoryViewID={inputId}/>
                </View>
                <PrimaryButton onPress={signUpHandler}>Sign Up</PrimaryButton>
                <PressableText textStyle={{textAlign: "center"}} onPress={() => navigation.replace("Login")}>Login</PressableText>
            </View>
        </ScrollView>
        <InputAccessoryView nativeID={inputId}>
            <Button onPress={() => console.log("TEST")} title="Clear text" />
        </InputAccessoryView>
    </>
}

const styles = StyleSheet.create({
    rootContainer: {
        padding: 16
    },
    mainContainer: {
        gap: 20
    },
    inputsContainer: {
        gap: 20
    }
})