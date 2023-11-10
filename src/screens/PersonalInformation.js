import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import axios from 'axios'
import { useAppDispatch,useAppSelector } from './store/hooks'
const PersonalInformation = ({navigation}) => {
      const name = useAppSelector(state => state.signUp.name) || ""; 
      const address = useAppSelector(state => state.signUp.address) || "";
      const classRedux = useAppSelector(state => state.signUp.class) || "";
      const emailRedux = useAppSelector(state => state.signUp.email) || "";

  return (
    <View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop:10}}>
          <Text style={{fontSize:25,color:'black'}}>THÔNG TIN NGƯỜI DÙNG</Text>
        </View>
        <View style={{marginTop:10, marginLeft:10}}>  
          <Text style={{color: 'black'}}>Email : {emailRedux}</Text>  
          <Text style={{color: 'black'}}>Tên người dùng : {name}</Text>
          <Text style={{color: 'black'}}>Lớp quản lý :{classRedux} </Text>
          <Text style={{color: 'black'}}>Địa chỉ :{address} </Text>
          <Text style={{color: 'black'}}>Trạng thái vé ăn : {'Ok'}</Text>
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