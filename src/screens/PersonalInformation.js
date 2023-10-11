import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PersonalInformation = ({navigation}) => {
  return (
    <View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10}}>
          <Text style={{fontSize:25}}>THÔNG TIN NGƯỜI DÙNG</Text>
        </View>
        <View style={{marginTop:10, marginLeft:10}}>  
          <Text>Email : </Text>  
          <Text>Tên người dùng : </Text>
          <Text>Lớp quản lý : </Text>
          <Text>Số Điện Thoại : </Text>
          <Text>Trạng thái vé ăn : </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:40}} >
          <TouchableOpacity onPress={()=>navigation.navigate('TabDetail')} >
              <Text style={{fontSize:25, color:'blue'}}>Quay lại</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default PersonalInformation

const styles = StyleSheet.create({})