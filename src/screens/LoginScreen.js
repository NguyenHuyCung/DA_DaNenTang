import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './HomeScreen/HomeScreen';
import axios from 'axios';
import {useAppDispatch, useAppSelector} from './store/hooks';
import {
    setEmailRedux,

  setClass,
  setName,
  setPhone,
  setAddress,
} from '../slice/infoUser';

const LoginScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const networkAPI = useAppSelector(state => state.network.ipv4Address);
  {
    /**handle input dang nhap */
  }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Lỗi', 'vui lòng nhập đủ thông tin');
    } else {
      setLoading(true);

      try {
        const response = await axios.post(`${networkAPI}/login`, {
          email: email,
          password: password,
        });

        if (response.data?.success) {
          console.log(response.data);
          setLoading(false);
          dispatch(setEmailRedux(response.data.data.Email));
          dispatch(setName(response.data.student_info.stu_Fname));
          dispatch(setClass(response.data.student_info.stu_Class));
          dispatch(setAddress(response.data.student_info.stu_address));
          navigation.navigate('HomeScreen');
        } else {
          Alert.alert('Lỗi', 'Sai thông tin đăng nhập, hãy thử lại');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error:', error);
        Alert.alert('Lỗi', 'Đã xảy ra lỗi trong quá trình đăng nhập.');
        setLoading(false);
      }
    }
  };

  return (
    <>
      <View>
        {/**logo */}
        <View>
          <StatusBar
            backgroundColor={'#ffffff'}
            barStyle={'dark-content'}></StatusBar>
        </View>
        <View style={styles.logo}>
          <Text style={styles.textlogo}>Căng-tin</Text>
          <Text style={styles.textlogo}>HUCE</Text>
        </View>
        {/**phan dang nhap */}
        <View>
          {/**tieu de */}
          <View style={styles.tieude}>
            <View>
              <Text style={styles.tieude}>Đăng Nhập</Text>
            </View>
            {/**email */}
            <View style={{marginBottom: 30, marginTop: 30}}>
              <Text style={{color: 'black'}}>Email :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="envelope" style={{color: 'black'}} />
                <TextInput
                  style={styles.texttk}
                  placeholderTextColor="gray"
                  placeholder="Email của trường HUCE"
                  onChangeText={setEmail}
                />
              </View>
            </View>
            {/**mat khau */}
            <View style={{marginBottom: 70}}>
              <Text style={{color: 'black'}}>Mật Khẩu :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="lock" size={15} style={{color: 'black'}} />
                <TextInput
                  style={styles.texttk}
                  placeholder="Mật khẩu từ 8-16 kí tự"
                  placeholderTextColor="gray"
                  secureTextEntry={true}
                  onChangeText={setPassword}
                />
              </View>
            </View>
            {/**button Login */}
            <View style={{marginTop: -30}}>
              <LinearGradient
                style={{padding: 10, width: '100%', borderRadius: 30}}
                colors={['#FFFFFF', '#1459A6']}
                useAngle={true}
                angle={90}>
                <TouchableOpacity
                  style={styles.buttonLogin}
                  onPress={handleLogin}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    ĐĂNG NHẬP
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/**button Dang Ki */}
            <View style={{marginTop: 20}}>
              <Text style={{color: 'black'}}>Nếu bạn chưa có tài khoản,</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  maginTop: 1,
                }}>
                <Text style={{color: 'black'}}>vui lòng chọn </Text>
                <TouchableOpacity
                  style={styles.buttonRegister}
                  onPress={() => navigation.navigate('RegisterScreen')}>
                  <Text style={{color: 'blue'}}>Đăng Ký</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {loading && (
        <ActivityIndicator
          size="large"
          color="red"
          style={{alignSelf: 'center', position: 'absolute', top: '50%'}}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    backgroundColor: '#ffffff',
    alignContent: 'center',
    alignItems: 'center',
  },
  textlogo: {
    color: '#1459A6',
    fontSize: 50,
  },
  tieude: {
    alignContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    color: 'black',
    marginTop: 10,
  },
  texttk: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
  buttonLogin: {
    marginVertical: 20,
  },
  buttonRegister: {
    fontSize: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});
export default LoginScreen;
