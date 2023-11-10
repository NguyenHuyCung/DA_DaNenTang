import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CheckBox} from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/vi';
import {useAppDispatch, useAppSelector} from './store/hooks';
import { setticketEvening } from '../slice/infoUser';

moment.locale('vi');

const TicketEvening = ({navigation}) => {
  const dispatch = useAppDispatch()
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
          dispatch(setticketEvening(false))
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Khoảng thời gian từ 10:30 đến 13:00
    const isButtonEnabled =
      (currentHour === 18 && currentMinute >= 30) ||
      (currentHour === 19 && currentMinute <= 30);

    setButtonDisabled(!isButtonEnabled);
  }, []);

  

  return (
    <View>
      <View style={{marginTop: 10}}>
        <Text style={styles.text}>Vé ăn theo tuần buổi tối :</Text>
        <Text style={styles.text}>
          Thời gian sử dụng : {'\n'} từ ngày {startOfWeek.format('DD/MM/YYYY')}{' '}
          đến ngày {endOfWeek.format('DD/MM/YYYY')}
        </Text>
        <Text style={styles.text}>
          Vé chỉ được sử dụng từ 6h30 đến 7h30 trong ngày
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

export default TicketEvening;

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
