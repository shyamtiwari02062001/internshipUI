import React,{useEffect} from "react";
import { LogBox } from "react-native";
import{ NavigationContainer }	from	"@react-navigation/native";
import{ createStackNavigator }	from	"@react-navigation/stack";
import Login from "./screens/loginViews";
import Register from "./screens/registerViews";
import Data from "./screens/DataPage";
const Stack = createStackNavigator();

export default function App() {
	LogBox.ignoreAllLogs();
	return (
			<NavigationContainer>
				<Stack.Navigator screenOptions={{headerShown: false,}}
					initialRouteName="Login"
				>
					<Stack.Screen name="Login"	component={Login}/>
					<Stack.Screen name="Register"	component={Register}/>
					<Stack.Screen name="Data"	component={Data}/>
				</Stack.Navigator>
			</NavigationContainer>
	);
}
