import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from '../pages/welcome'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import AddDebitScreen from '../pages/AddDebitScreen';
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="Tasks"
            component={Tasks}
            options={{headerShown:false}}
            />

            <Stack.Screen
            name="AddDebitScreen"
            component={AddDebitScreen}
            options={{headerShown:false}}
            />
            
        </Stack.Navigator>
    )
}