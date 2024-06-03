import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginPage from "../../screens/AccountTab/LoginPage";
import {SignUpPage} from "../../screens/AccountTab/SignUpPage";

const Stack = createNativeStackNavigator()

export default function AccountStackNavigation() {
    return <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}/>
        <Stack.Screen name="SignUp" component={SignUpPage} options={{title: "Sign Up"}}/>
    </Stack.Navigator>
}