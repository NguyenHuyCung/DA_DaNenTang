import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { CheckBox } from 'react-native-elements';
import moment from 'moment';
import 'moment/locale/vi'

moment.locale('vi');

const TicketLunch = ({navigation}) => {

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
   
    const handleButton = () =>{
      
      if (!buttonDisabled) {
        setChecked(!checked);
        setTitleCheckbox('Đã dùng vé hôm nay !');
        setTitleButton('Đã thanh toán');
        setButtonDisabled(true); // Vô hiệu hóa nút sau khi bấm
      }
    };

    useEffect(() => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();
  
    
      // Khoảng thời gian từ 10:30 đến 13:00
      const isButtonEnabled = (currentHour === 10 && currentMinute >= 30) || (currentHour === 11) || (currentHour === 12) || (currentHour === 13 && currentMinute === 0);

  
      setButtonDisabled(!isButtonEnabled);
    }, []); 

  return (
    <View>
      <View style={{marginTop:10}}>
        <Text style={styles.text}>Vé ăn theo tuần buổi trưa :</Text>
        <Text style={styles.text}>Thời gian sử dụng : {'\n'} từ ngày {startOfWeek.format('DD/MM/YYYY')} đến ngày {endOfWeek.format('DD/MM/YYYY')}</Text>
        <Text style={styles.text}>Vé chỉ được sử dụng từ 11h đến 12h40 trong ngày</Text>
        <Text style={styles.text}>Thông tin vé HÔM NAY ({dayOfWeek} {currentDate.format('DD/MM/YYYY')}) : </Text>
      </View>
      <CheckBox title={titleCheckbox} checked={checked} />
      <Button title={titleButton} onPress={handleButton} disabled={buttonDisabled} />
      <View style={{marginTop:60}}>
        <Button title='Quay lai' onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

export default TicketLunch

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
  text :{
    fontSize:20,
    marginLeft:10,
    marginTop:10
  }
})


