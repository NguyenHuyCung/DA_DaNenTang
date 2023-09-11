import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = ({ navigation}:any)=>{

        return(
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
                                <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}} />
                        </Stack.Navigator>
                </NavigationContainer>
        )

}

export default App;