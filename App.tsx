import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import TicketOne from './src/screens/TicketLunch';
import TicketTwo from './src/screens/TicketTwo';
import FoodMenu from './src/screens/FoodMenu';
import DrinkMenu from './src/screens/DrinkMenu';
import PersonalInformation from './src/screens/PersonalInformation';
import OrderHistory from './src/screens/OrderHistory';
import TicketLunch from './src/screens/TicketLunch';
import TicketEvening from './src/screens/TicketEvening';

const Stack = createNativeStackNavigator();

const App = ({ navigation}:any)=>{

        return(
                <NavigationContainer>
                        <Stack.Navigator>
                                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown:false}} />
                                <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{headerShown:false}} />
                                <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}} />
                                <Stack.Screen name ='TicketLunch' component={TicketLunch} options={{headerShown:false}} />
                                <Stack.Screen name ='TicketEvening' component={TicketEvening} options={{headerShown:false}} />
                                <Stack.Screen name = 'TicketTwo' component={TicketTwo} options={{headerShown:false}} />
                                <Stack.Screen name = 'FoodMenu' component={FoodMenu} options={{headerShown:false}} />
                                <Stack.Screen name = 'DrinkMenu' component={DrinkMenu} options={{headerShown:false}} />
                                <Stack.Screen name = 'PersonalInformation' component={PersonalInformation} options={{headerShown:false}} />
                                <Stack.Screen name = 'OrderHistory' component={OrderHistory} options={{headerShown:false}} />
                        </Stack.Navigator>
                </NavigationContainer>
        )

}

export default App;