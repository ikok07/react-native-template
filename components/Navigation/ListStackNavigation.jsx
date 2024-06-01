import {createNativeStackNavigator} from "@react-navigation/native-stack";
import PostDetails from "../../screens/SecondTab/PostDetails";
import ListScreen from "../../screens/SecondTab/ListScreen";

const Stack = createNativeStackNavigator()

export function ListStackNavigation() {
    return <Stack.Navigator>
        <Stack.Screen
            name="ListScreen"
            component={ListScreen}
            options={{
                title: "List"
            }}
        />
        <Stack.Screen
            name="PostDetails"
            component={PostDetails}
            options={{
                title: "Post details"
            }}
        />
    </Stack.Navigator>
}