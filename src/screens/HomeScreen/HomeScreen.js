import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import TabHome from './components/TabHome';
import TabOrder from './components/TabOrder';
import TabDetail from './components/TabDetail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator barStyle={styles.fulltab} activeColor='#1459A6'>
        <Tab.Screen name='TabHome' component={TabHome} options={{title:'Trang Chủ',tabBarIcon :'home-outline', tabBarColor:'#FFA200'}} />
        <Tab.Screen name='TabOrder' component={TabOrder} options={{title:'Đơn', tabBarIcon:'cart-outline', tabBarBadge:'1'}} />
        <Tab.Screen name='TabDetail' component={TabDetail} options={{title:'Xem Thêm', tabBarIcon:'reorder-horizontal' }} />
    </Tab.Navigator>

  )
}

const styles = StyleSheet.create({
fulltab:{
  backgroundColor:'#ffffff',
 
}

})