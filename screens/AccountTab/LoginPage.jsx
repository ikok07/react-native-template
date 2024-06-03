import {View, Text, StyleSheet, ScrollView} from "react-native";
import AuthHeading from "../../components/Auth/AuthHeading";
import CustomInput from "../../components/ui/CustomInput";
import {useState} from "react";
import PrimaryButton from "../../components/ui/PrimaryButton";
import {PressableText} from "../../components/ui/PressableText";

export default function LoginPage({navigation}) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function loginHandler() {

    }

    return <ScrollView style={styles.rootContainer}>
        <View style={styles.mainContainer}>
            <AuthHeading>Log into your account</AuthHeading>
            <View style={styles.inputsContainer}>
                <CustomInput label="Email" placeholder="Enter your email" value={email} onChange={(v) => setEmail(v)} autoFocus/>
                <CustomInput label="Password" placeholder="Enter your password" value={password} onChange={(v) => setPassword(v)} />
            </View>
            <PrimaryButton onPress={loginHandler}>Login</PrimaryButton>
            <PressableText textStyle={{textAlign: "center"}} onPress={() => navigation.replace("SignUp")}>Sign Up</PressableText>
        </View>
    </ScrollView>
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