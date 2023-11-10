import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Alert,
} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import axios from 'axios';
import {setticketEvening, setticketNoon} from '../../../slice/infoUser';

export default function TabDetail({navigation}) {
  const dispatch = useAppDispatch();
  const network = useAppSelector(state => state.network.ipv4Address);
  const email = useAppSelector(state => state.signUp.email);
  useEffect(() => {
    const getTicket = async () => {
      const res = await axios.post(`${network}/ticket-user`, {
        email: email,
      });
      console.log(res);
      if (Object.keys(res.data.ticketUser).length === 0) {
        console.log('Chưa đăng ký vé');
        
        return;
      } else {
        if (res.data.ticketType.id === 1) {
          dispatch(setticketEvening(true));
          dispatch(setticketNoon(true));
        } else if (res.data.ticketType.id === 2) {
          dispatch(setticketNoon(true));
        } else {
          dispatch(setticketEvening(true));
        }
      }
      console.log(res.data);
      console.log(res.data.ticketUser);
    };
    getTicket();
  }, []);

  const [showButtons, setShowButtons] = useState(false);
  const toggleButtons = () => {
    setShowButtons(!showButtons);
  };
  const ticketNoon = useAppSelector(state => state.signUp.ticketNoon);
  const ticketEvening = useAppSelector(state => state.signUp.ticketEvening);

  {
    /**Alert logout */
  }
  const alertLogOut = () =>
    Alert.alert('Cảnh báo', 'Bạn chắc chắn muốn đăng xuất chứ ?', [
      {
        text: 'Hủy',
        style: 'cancel',
      },
      {text: 'Đăng xuất', onPress: () => navigation.navigate('LoginScreen')},
    ]);
  const handlePress = () => {
    if (ticketEvening && ticketNoon) {
      // Nếu cả hai đều true, kiểm tra giờ
      const currentHour = new Date().getHours();
      if (currentHour < 12) {
        // Nếu giờ hiện tại nhỏ hơn 12, điều hướng đến màn hình TicketEvening
        navigation.navigate('TicketLunch');
      } else {
        // Nếu giờ hiện tại lớn hơn hoặc bằng 12, điều hướng đến màn hình TicketNoon
        navigation.navigate('TicketEvening');
      }
    } else if (ticketEvening) {
      // Nếu chỉ có ticketEvening là true, điều hướng đến màn hình TicketEvening
      navigation.navigate('TicketEvening');
    } else if (ticketNoon) {
      // Nếu chỉ có ticketNoon là true, điều hướng đến màn hình TicketNoon
      navigation.navigate('TicketLunch');
    } else {
      // Nếu cả hai đều false, có thể hiển thị thông báo hoặc xử lý theo yêu cầu của bạn.
      // Ở đây là ví dụ hiển thị một thông báo.
      Alert.alert('Cảnh báo', 'Bạn chưa được cấp vé để thanh toán tại quầy');
    }
  };
  return (
    <ScrollView>
      {/**Thong tin tieu de */}
      <View style={styles.tieu_de}>
        <Text style={{color: 'white', marginTop: 10, fontSize: 25}}>
          Cang-tin HUCE
        </Text>
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'white'}}>Địa chỉ : Nhóm 13 - Đa Nền Tảng</Text>
          <Text style={{color: 'white'}}>Liên hệ với chúng tôi</Text>
          <Text style={{color: 'white'}}>
            Email : nhom_13_da_nen_tang@huce.edu.vn
          </Text>
          <Text style={{color: 'white'}}>SĐT : 0111910JQK</Text>
          <Text style={{color: 'white', marginBottom: 10}}>
            Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi
          </Text>
        </View>
      </View>
      {/**danh sách tuy chon */}
      <View style={styles.options}>
        {/**thong tin ca nhan */}
        <View>
          <TouchableOpacity
            style={styles.information}
            onPress={() => navigation.navigate('PersonalInformation')}>
            <Text style={{color: 'black', fontSize: 20}}>
              Thông tin cá nhân{' '}
            </Text>
          </TouchableOpacity>
        </View>
        {/**mua ve tuan */}
        
        {/**lich su mua hang */}
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('OrderHistory')}>
            <Text style={{color: 'black', fontSize: 20}}>Lịch sử mua hàng</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <Text style={{color: 'black', fontSize: 20}}>Chat với chúng tôi</Text>
          </TouchableOpacity>
        </View>
        <View>
          {ticketEvening || ticketNoon ? (
            <TouchableOpacity onPress={() => handlePress()}>
              <Text style={{color: 'black', fontSize: 20}}>
                Thanh toán bằng vé
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{marginBottom: 10}}
              onPress={() => {
                Alert.alert(
                  'Cảnh báo',
                  'Bạn chưa được cấp vé để thanh toán tại quầy',
                );
              }}>
              <Text style={{color: 'gray', fontSize: 20}}>
                Thanh toán bằng vé{' '}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/**Dang xuat */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={alertLogOut}>
          <Text style={{fontSize: 20, color: 'red'}}>Đăng Xuất</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tieu_de: {
    backgroundColor: '#0F5CA8',
  },
  options: {
    marginTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
  },
  information: {
    marginTop: 20,
    borderRadius: 30,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  ticket: {
    alignItems: 'center',
    marginLeft: 20,
  },
});
