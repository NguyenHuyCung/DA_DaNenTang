import React from "react";
import {  StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from "react-native-linear-gradient";
import HomeScreen from "./HomeScreen/HomeScreen";


const LoginScreen=({navigation})=> {
  return (
    <View>
        {/**logo */}
        <View>
            <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}></StatusBar>
        </View>
        <View style = {styles.logo}>
              <Text style={styles.textlogo}>
                Căng-tin 
              </Text>
              <Text style = {styles.textlogo}>
                HUCE
              </Text>
        </View>
        {/**phan dang nhap */}
        <View>
            {/**tieu de */}
            <View style = {styles.tieude}>
              <View>
                <Text style = {styles.tieude}>
                  Đăng Nhập
                </Text>
              </View>
              {/**email */}
              <View style = {{marginBottom: 30, marginTop: 30}}>
                  
                  <Text>
                    Email : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Icon name='envelope' />
                    <TextInput style = {styles.texttk} placeholder="Email của trường HUCE" />
                  </View>
              </View>
              {/**mat khau */}
              <View style = {{marginBottom:70}}>
                  <Text>
                    Mật Khẩu : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Icon name='lock' size={15} />
                  <TextInput style = {styles.texttk} placeholder="Mật khẩu từ 8-16 kí tự" secureTextEntry={true} />
                  </View>
              </View>
              {/**button Login */}
              <View style={{marginTop: -30}}>
                  <LinearGradient style={{padding:10,width:'100%', borderRadius:30}} colors={['#FFFFFF','#1459A6']} useAngle={true} angle={90}>
                    <TouchableOpacity style = {styles.buttonLogin} onPress={()=>navigation.navigate('HomeScreen')} >
                      <Text style={{fontSize : 20, fontWeight:'bold', color:'white'}}>
                        ĐĂNG NHẬP
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
              </View>

              {/**button Dang Ki */}
              <View style={{marginTop:20}}>
                <Text>Nếu bạn chưa có tài khoản,</Text>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', maginTop:1}}>
                  <Text>vui lòng chọn  </Text>
                  <TouchableOpacity style={styles.buttonRegister} onPress={()=>navigation.navigate('RegisterScreen')} >
                      <Text style={{color:'blue'}}>Đăng Ký</Text>

                  </TouchableOpacity>
                </View>
              </View>

            </View>
        </View>
      
    </ View>

  )
}

const styles = StyleSheet.create({
  logo : {
    backgroundColor : '#ffffff',
    alignContent : 'center',
    alignItems : 'center'
  },
  textlogo : {
    color : '#1459A6',
    fontSize : 50
  }
  ,
  tieude : {
    alignContent : 'center',
    alignItems : 'center',
    fontSize :30,
    color : 'black',
    marginTop:10
  },
  texttk : {
    width : 200,
    height : 40,
    borderColor : 'gray',
    borderBottomWidth : 1
  },
  buttonLogin : {
    marginVertical :20,
    
  },
  buttonRegister :{
    fontSize:20, alignContent:'center',alignItems:'center',
    justifyContent:'center',
    borderRadius:10
  }
})
export default LoginScreen