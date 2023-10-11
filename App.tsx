import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import TicketTwo from './src/screens/TicketTwo';
import FoodMenu from './src/screens/FoodMenu';
import DrinkMenu from './src/screens/DrinkMenu';
import PersonalInformation from './src/screens/PersonalInformation';
import OrderHistory from './src/screens/OrderHistory';
import TicketLunch from './src/screens/TicketLunch';
import TicketEvening from './src/screens/TicketEvening';
import ItemDetail from './src/screens/ItemDetail';

const Stack = createNativeStackNavigator();

const App = ({ navigation}:any)=>{

        return(
                <NavigationContainer>
                        <Stack.Navigator screenOptions={{headerShown:false}}>
                                <Stack.Screen name='LoginScreen' component={LoginScreen}  />
                                <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
                                <Stack.Screen name='HomeScreen' component={HomeScreen}  />
                                <Stack.Screen name ='TicketLunch' component={TicketLunch}  />
                                <Stack.Screen name ='TicketEvening' component={TicketEvening}/>
                                <Stack.Screen name = 'TicketTwo' component={TicketTwo}  />
                                <Stack.Screen name = 'FoodMenu' component={FoodMenu} />
                                <Stack.Screen name = 'DrinkMenu' component={DrinkMenu}  />
                                <Stack.Screen name = 'PersonalInformation' component={PersonalInformation} />
                                <Stack.Screen name = 'OrderHistory' component={OrderHistory}  />
                                <Stack.Screen name = 'ItemDetail' component={ItemDetail}  />
                        </Stack.Navigator>
                </NavigationContainer>
        )

}

export default App;