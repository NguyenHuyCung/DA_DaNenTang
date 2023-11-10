import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import { addItem,updateItemQuantity, REPLACE_font, removeItem} from '../../../slice/listSlice';
import axios from 'axios';




const TabOrder = ({navigation, route}) => {
  const dispatch = useAppDispatch()
  //hien thong tin cac sp trong don
  const network = useAppSelector(state => state.network.ipv4Address);
  const renderCartItem = ({item}) => {
    
    return (
      <View style={{marginLeft:10, flexDirection: 'row'}}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={{uri: item.menu.Menu_image}}
              style={{width: 60, height: 60}}
            />
          </View>
          <View style={{marginLeft:10}}>
            <Text style={{color: 'black'}}>{item.menu.menu_name}</Text>
            <Text style={{color: 'black'}}>Số lượng: {item.quantity}</Text>
            <Text style={{color: 'black'}}>
              Đơn giá: {item.menu.Price.toLocaleString()}
            </Text>
            <Text style={{color: 'black'}}>
              Thành tiền : {(item.menu.Price * item.quantity).toLocaleString()} VND{' '}
            </Text>
          </View>
        </View>
        <View style={{marginLeft:10}}>
            <TouchableOpacity onPress={() => removeFromCart(item.menu.id)}  >
                <Text style={{color: 'red'}}>Xóa</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  };


  // Hàm để tính tổng tiền của đơn hàng
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cart) {
      totalPrice += item.menu.Price * item.quantity;
    }
    return totalPrice;
  };
  //ham xoa item khoi gio
  const removeFromCart = (productId) => {
    console.log("ban vua nhan vao xoa san pham !" , productId)
    // Gửi action để xóa sản phẩm từ giỏ hàng
    dispatch(removeItem({id: productId}));
    
  };
  

  {
    /**radio button phuong thuc thanh toan */
  }
  const [selectedValue, setSelectedValue] = useState('option1');

  const eveningTicket = useAppSelector(state => state.signUp.ticketEvening);
  const noonTicket = useAppSelector(state => state.signUp.ticketNoon);
  const emailUser = useAppSelector(state => state.signUp.email);
  const cart = useAppSelector(state => state.list.orderList);
  const handlePress = async () => {
  console.log(cart);

  for (let index = 0; index < cart.length; index++) {
    const product = cart[index];
    try {
      const res = await axios.post(`${network}/order`, {
        email: emailUser,
        productIds: product.menu.id,
        note: 'Thanh toán tiền mặt',
        Number: product.quantity,
        Price: product.menu.Price,
        Total_money: product.menu.Price * product.quantity,
      });

      if (res.data.success) {
        Alert.alert('Thành công', 'Bạn hãy thanh toán khi nhận đồ nhé!');
        dispatch(REPLACE_font([]));
      } else {
        Alert.alert('Thất bại', 'Có lỗi khi tạo đơn hàng, hãy thử lại');
      }
    } catch (err) {
      console.log(err);
    }
  }
  
};

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>Thông tin đơn hàng</Text>
      </View>
      <FlatList
        style={{height: '60%'}}
        data={cart}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderCartItem}
      />

      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>
          Tổng tiền : {calculateTotalPrice().toLocaleString()} VND{' '}
        </Text>
      </View>
      <View style={{marginBottom: 20, marginTop: 10}}>
        <View style={{marginLeft: 10}}>
          <Text style={{color: 'black'}}>
            Lựa chọn phương thức thanh toán :{' '}
          </Text>
          {/**radio button */}
          <View style={styles.radioButton}>
            <RadioButton.Android
              value="option1"
              status={selectedValue === 'option1' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedValue('option1')}
              color="#007BFF"
            />
            <Text style={styles.radioLabel}>Thanh toán tiền mặt</Text>
          </View>
          {/**het radio button */}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 10,
          }}>
          <TouchableOpacity
            style={{borderWidth: 1, borderRadius: 10}}
            onPress={() => handlePress()}>
            <Text style={{fontSize: 25, color: 'black'}}> Đặt hàng </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default TabOrder;
const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  radioLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
});
