import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OrderHistory = ({navigation}) => {
  return (
    <View>
        {/**header */}
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10}}>
            <Text style={{fontSize:20}}>Lịch sử mua hàng</Text>
        </View>
        {/**body */}
        <ScrollView style={{marginTop:10}}>
            <Text>body chua lịch sử</Text>
        </ScrollView>
        {/**button delete */}
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:40}}>
            <TouchableOpacity onPress={()=>navigation.navigate('TabDetail')}>
                <Text style={{color:'blue'}}>Quay lại</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({})