import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CheckBox} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/vi';
import {useAppDispatch, useAppSelector} from './store/hooks';
import { setticketNoon } from '../slice/infoUser';
import axios from 'axios'
moment.locale('vi');

const TicketLunch = ({navigation}) => {
  const dispatch =useAppDispatch()
  //lay thoi gian
  // Lấy ngày hiện tại
  const currentDate = moment();
  // Tìm ngày đầu tiên của tuần
  const startOfWeek = currentDate.clone().startOf('isoWeek');
  // Tìm ngày cuối cùng của tuần
  const endOfWeek = currentDate.clone().endOf('isoWeek');
  // Hiển thị thông tin về thứ
  const dayOfWeek = currentDate.format('dddd');

  const [titleCheckbox, setTitleCheckbox] = useState('Chưa dùng vé hôm nay');
  const [titleButton, setTitleButton] = useState('Thanh toán');
  const [checked, setChecked] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false); // Thêm trạng thái cho button
  const network = useAppSelector(state => state.network.ipv4Address);
  const email = useAppSelector(state => state.signUp.email);
  const handleButton = async () => {
    if (!buttonDisabled) {
      try {
        const response = await axios.post(`${network}/change-status-ticket`, {
          email: email,
        });
        if (response.data.success) {
          setChecked(!checked);
          setTitleCheckbox('Đã dùng vé hôm nay !');
          setTitleButton('Đã thanh toán');
          setButtonDisabled(true);
          dispatch(setticketNoon(false))
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  const [used, setUsed] = useState(false)
  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Khoảng thời gian từ 10:30 đến 13:00
    const isButtonEnabled =
      (currentHour === 10 && currentMinute >= 30) ||
      currentHour === 11 ||
      currentHour === 12 ||
      (currentHour === 13 && currentMinute === 0);

    setButtonDisabled(!isButtonEnabled);
  }, []);
  useEffect(() => {
    const checkStatus = async () => {
      const res = await axios.post(`${network}/ticket-user`, {
        email: email
      })
      if (res.data.success) {
        setUsed(res.data.ticketUser);
      }
      
    }
    checkStatus()
  }, []);

  return (
    <View>
      <View style={{marginTop: 10}}>
        <Text style={styles.text}>Vé ăn theo tuần buổi trưa :</Text>
        <Text style={styles.text}>
          Thời gian sử dụng : {'\n'} từ ngày {startOfWeek.format('DD/MM/YYYY')}{' '}
          đến ngày {endOfWeek.format('DD/MM/YYYY')}
        </Text>
        <Text style={styles.text}>
          Vé chỉ được sử dụng từ 11h đến 12h40 trong ngày
        </Text>
        <Text style={styles.text}>
          Thông tin vé HÔM NAY ({dayOfWeek} {currentDate.format('DD/MM/YYYY')})
          :{' '}
        </Text>
      </View>
      <CheckBox
        title={titleCheckbox}
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <Button
        title={titleButton}
        onPress={handleButton}
        disabled={buttonDisabled}
      />
      <View style={{marginTop: 60}}>
        <Button title="Quay lại" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default TicketLunch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
  },
});
