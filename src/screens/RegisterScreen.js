import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import LoginScreen from './LoginScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {
  setEmailRedux,
  setClass,
  setName,
  setPhone,
  setAddress,
} from '../slice/infoUser';
import {useAppDispatch, useAppSelector} from './store/hooks';
import axios from 'axios';

const RegisterScreen = ({navigation}) => {
  //hanle Register
  const dispatch = useAppDispatch();
  const networkAPI = useAppSelector(state => state.network.ipv4Address);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Rpassword, setRpassword] = useState('');
  const [nameUser, setNameUser] = useState('');
  const [classStu, setClassStu] = useState('');
  const [loading, setLoading] = useState(false);
  const [addressState, setAddressState] = useState('');
  const handleRegister = async () => {
    if (
      email.length === 0 ||
      password.length === 0 ||
      Rpassword.length === 0 ||
      classStu.length === 0 ||
      nameUser.length === 0 || addressState.length === 0
    ) {
      Alert.alert('Lỗi', 'Thông tin bị thiếu, hãy thử lại');
    } else if (password !== Rpassword) {
      Alert.alert('lỗi', 'Mật khẩu nhập lại không đúng !');
    } else {
      setLoading(true);

      try {
        const response = await axios.post(`${networkAPI}/signup`, {
          email: email,
          password: password,
          stu_Fname: nameUser,
          stu_Class: classStu,
          stu_Address: addressState,
        });

        if (response.data?.success) {
          console.log(response.data);
          // dispatch(setEmailRedux(response.data.accountCreated.Email));
          // dispatch(setName(response.data.studentCreated.stu_Fname));
          // dispatch(setClass(response.data.studentCreated.stu_Class));
          // dispatch(setAddress(response.data.studentCreated.stu_address));
          // dispatch(setTicket(false));
          setLoading(false);

          Alert.alert('Chúc mừng', 'Bạn đã đăng ký thành công !!', [
            {
              text: 'Vào trang đăng nhập',
              onPress: () => navigation.navigate('LoginScreen'),
            },
          ]);
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
      <ScrollView>
        <View>
          {/**logo */}
          <View style={styles.logo}>
            <Text style={styles.textlogo}>Căng-tin</Text>
            <Text style={styles.textlogo}>HUCE</Text>
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
            <View style={{}}>
              <Text style={{color: 'black'}}>Email :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="gray" name="envelope" />
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.texttk}
                  placeholder="Email của trường HUCE"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>
            </View>
            {/**ten */}
            <View style={{}}>
              <Text style={{color: 'black'}}>Tên Người Dùng :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="gray" name="user" size={15} />
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.texttk}
                  placeholder="tên người dùng từ 8-16 kí tự"
                  value={nameUser}
                  onChangeText={setNameUser}
                />
              </View>
            </View>

            {/**sdt */}

            {/**lop quan ly */}
            <View style={{}}>
              <Text style={{color: 'black'}}>Lớp Quản Lý :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="gray" name="graduation-cap" size={15} />
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.texttk}
                  placeholder="Ví dụ : 65CS3"
                  value={classStu}
                  onChangeText={setClassStu}
                />
              </View>
            </View>
            <View style={{}}>
              <Text style={{color: 'black'}}>Địa chỉ :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="gray" name="graduation-cap" size={15} />
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.texttk}
                  placeholder="Ví dụ : 55 Giải Phóng, Hai Bà Trưng"
                  value={addressState}
                  onChangeText={setAddressState}
                />
              </View>
            </View>
            {/**mat khau */}
            <View style={{}}>
              <Text style={{color: 'black'}}>Mật Khẩu :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="gray" name="lock" size={15} />
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.texttk}
                  placeholder="Mật khẩu từ 8-16 kí tự"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
            </View>
            {/**nhap lai mat khau */}
            <View style={{marginBottom: 10}}>
              <Text style={{color: 'black'}}>Nhập Lại Mật Khẩu :</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon color="gray" name="lock" size={15} />
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.texttk}
                  placeholder="Mật khẩu từ 8-16 kí tự"
                  secureTextEntry={true}
                  value={Rpassword}
                  onChangeText={text => setRpassword(text)}
                />
              </View>
            </View>
            {/**button dangki */}
            <View style={{marginBottom: 10}}>
              <LinearGradient
                style={{padding: 10, borderRadius: 30}}
                colors={['#FFFFFF', '#1459A6']}
                useAngle={true}
                angle={90}>
                <TouchableOpacity style={{}} onPress={handleRegister}>
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                    ĐĂNG KÝ
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>

          {/**button quay lai dang nhap */}
          <View
            style={{
              marginTop: -140,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'black'}}>Bạn đã có tai khoản?</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>Quay lại </Text>
              <TouchableOpacity
                style={{}}
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{color: 'blue'}}>Đăng Nhập</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
export default RegisterScreen;
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
  body: {
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 150,
  },
  text_input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
  },
  texttk: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    color: 'black',
  },
});
