import { StyleSheet, Text, View , TouchableOpacity, Modal, TextInput, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import LoginScreen from './LoginScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from "react-native-linear-gradient";



const RegisterScreen =({navigation})=> {
  //hanle Register
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Rpassword, setRpassword] = useState('');

  const handleRegister = () =>{
      //kiem tra do dai email, password
      if (email.length < 3 || password.length < 3 ) {
        Alert.alert('Lỗi', 'vui lòng nhập thông tin hợp lệ theo chỉ dẫn')
      } 
      else if(password !== Rpassword){
        Alert.alert('lỗi', "Mật khẩu nhập lại không đúng !")
      }
      else {
        Alert.alert('Chúc mừng', 'Bạn đã đăng ký thành công !!', [
          
          {text: 'Vào trang đăng nhập', 
          onPress: () => navigation.navigate('LoginScreen')},
      ]);
      }
  }
  
  return (
    <ScrollView>
    <View>
      {/**logo */}
      <View style = {styles.logo}>
              <Text style={styles.textlogo}>
                Căng-tin 
              </Text>
              <Text style = {styles.textlogo}>
                HUCE
              </Text>
      </View>
      {/**body */}
      <View style={styles.body}>
        {/**tieu de */}
{/**    <View style = {{}}>
              <View>
                <Text style = {{fontSize:30, }}>
                  Đăng Ký
                </Text>
              </View>
        </View>  */}  
        
        {/**email */}
        <View style = {{}}>                  
          <Text>
            Email : 
          </Text>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <Icon name='envelope' />
            <TextInput style = {styles.texttk} placeholder="Email của trường HUCE"
                value={email} onChangeText={text => setEmail(text)}
            />
          </View>
        </View>
        {/**ten */}
        <View style = {{}}>
                  <Text>
                    Tên Người Dùng : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Icon name='user' size={15} />
                  <TextInput style = {styles.texttk} placeholder="tên người dùng từ 8-16 kí tự" />
                  </View>
              </View>

        {/**sdt */}
        <View style = {{}}>
                  <Text>
                    Số Điện Thoại : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Icon name='phone' size={15} />
                  <TextInput style = {styles.texttk} placeholder="SDT di động 10 chữ số" />
                  </View>
              </View>

        {/**lop quan ly */}
        <View style = {{}}>
                  <Text>
                    Lớp Quản Lý : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Icon name='graduation-cap' size={15} />
                  <TextInput style = {styles.texttk} placeholder="Ví dụ : 65CS3" />
                  </View>
              </View>

        {/**mat khau */}
        <View style = {{}}>
                  <Text>
                    Mật Khẩu : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Icon name='lock' size={15} />
                  <TextInput style = {styles.texttk} placeholder="Mật khẩu từ 8-16 kí tự" secureTextEntry={true}
                      value={password} onChangeText={text => setPassword(text)}
                  />
                  </View>
              </View>
        {/**nhap lai mat khau */}
        <View style = {{marginBottom:10}}>
                  <Text>
                    Nhập Lại Mật Khẩu : 
                  </Text>
                  <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                  <Icon name='lock' size={15} />
                  <TextInput style = {styles.texttk} placeholder="Mật khẩu từ 8-16 kí tự" secureTextEntry={true}
                      value={Rpassword} onChangeText={text => setRpassword(text)}
                  />
                  </View>
              </View>
      {/**button dangki */}
        <View style={{marginBottom:10}}>
          <LinearGradient style={{padding:10, borderRadius:30}} colors={['#FFFFFF','#1459A6']} useAngle={true} angle={90}>
            <TouchableOpacity style = {{}} onPress={handleRegister}  >
              <Text style={{fontSize : 20, fontWeight:'bold', color:'white'}}>
                ĐĂNG KÝ
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
      
      {/**button quay lai dang nhap */}
      <View style={{marginTop:-140, alignContent:'center', alignItems:'center'}}>
      <Text>Bạn đã có tai khoản?</Text>
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Text>quay lại </Text>
        <TouchableOpacity style = {{}} onPress={()=> navigation.navigate('LoginScreen')} >
          <Text style={{color:'blue'}}>
            Đăng Nhập
          </Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
    </ScrollView>
  )
}
export default RegisterScreen
const styles = StyleSheet.create({
  logo : {
    backgroundColor : '#ffffff',
    alignContent : 'center',
    alignItems : 'center'
  },
  textlogo : {
    color :'#1459A6' ,
    fontSize : 50
  },
  body : {
    alignContent:'center',
    alignItems:'center',
    marginBottom:150
  },
  text_input : {
    width : 200,
    height : 40,
    borderColor : 'gray'
  },
  texttk : {
    width : 200,
    height : 40,
    borderColor : 'gray',
    borderBottomWidth : 1}
})