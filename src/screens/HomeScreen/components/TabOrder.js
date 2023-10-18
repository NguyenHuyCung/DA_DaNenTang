import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React , {useEffect, useState} from 'react'
import { RadioButton } from 'react-native-paper'; 
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const TabOrder =({navigation, route, mycart})=> {
    
    

    //hien thong tin cac sp trong don 
    
    const renderCartItem = ({ item }) => {
      return (
        <View>
          <Image source={{uri:item.menu.menuImage}} style={{width:60, height:60}} />
          <Text>{item.menu.menuName}</Text>
          <Text>Số lượng: {item.quantity}</Text>
          <Text>Đơn giá: {item.menu.menuPrice.toLocaleString()}</Text>
          <Text>Thành tiền : {(item.menu.menuPrice * item.quantity).toLocaleString()} VND </Text>
        </View>
      );
    };
    


    // Hàm để tính tổng tiền của đơn hàng
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      for (const item of global.mycart) {
        totalPrice += item.menu.menuPrice * item.quantity;
      }
      return totalPrice;
    };
    

  {/**radio button phuong thuc thanh toan */}
  const [selectedValue, setSelectedValue] = useState('option1');

 


  return (
    <View>
        <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:10}}>
            <Text style={{fontSize:20}}>Thông tin đơn hàng</Text>
        </View>
        <FlatList style={{height:'60%'}}
        data={global.mycart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCartItem}
      />
        
        <View style={{marginTop:20,justifyContent: 'center',alignItems: 'center',}}>
              <Text>Tổng tiền : {calculateTotalPrice().toLocaleString()}  VND </Text>
        </View>
        <View style={{marginBottom:20, marginTop:10}}>
        <View style={{marginLeft:10}}>
            <Text>Lựa chọn phương thức thanh toán : </Text>
            {/**radio button */}
            <View style={styles.radioButton}> 
                    <RadioButton.Android
                        value="option1"
                        status={selectedValue === 'option1' ?  
                                'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option1')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Trả trước qua App 
                    </Text> 
            </View>
            
            <View style={styles.radioButton}> 
                    <RadioButton.Android 
                        value="option2"
                        status={selectedValue === 'option2' ?  
                                 'checked' : 'unchecked'} 
                        onPress={() => setSelectedValue('option2')} 
                        color="#007BFF"
                    /> 
                    <Text style={styles.radioLabel}> 
                        Trả sau khi nhận 
                    </Text> 
            </View> 
            {/**het radio button */}
        </View>
        <View style={{justifyContent: 'center',alignItems: 'center', marginTop:10, marginBottom:10}} >
          <TouchableOpacity style={{borderWidth:1, borderRadius:10}} >
            <Text style={{fontSize:25}}> Đặt hàng </Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}
export default TabOrder ;
const styles = StyleSheet.create({
      radioButton: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginLeft:20
    }, 
    radioLabel: { 
        marginLeft: 8, 
        fontSize: 16, 
        color: '#333', 
    }, 

})