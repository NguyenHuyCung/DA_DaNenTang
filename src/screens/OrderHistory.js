import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import axios from 'axios';

const OrderHistory = ({ navigation }) => {
  const [dataOrders, setDataOrders] = useState([]); // Thay đổi tên biến để rõ ràng
  const [dataOrdersDetails, setDataOrdersDetail] = useState([]);
  const email = useAppSelector((state) => state.signUp.email);
  const network = useAppSelector((state) => state.network.ipv4Address);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.post(`${network}/history-buying`, {
          email: email,
        });

        if (response && response.data) {
          setLoading(false);
          const orders = response.data.dataOrders || [];
          setDataOrders(orders);
          console.log(orders);

          if (orders.length === 0) {
            console.log('Dữ liệu trống');
          }
        }
      } catch (error) {
        console.error('Lỗi kết nối: ', error);
        setLoading(false);
      }
    };

    getData();
  }, [email, network]);

  return (
    <View>
      {/* *header */}
      <View style={{flexDirection:'row', marginLeft:10}}>
      <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('TabDetail')}>
            <Text style={{ color: 'blue', fontSize:30 }}>{'<<'}</Text>
          </TouchableOpacity>
      </View>
      <View
        style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10, marginLeft:70}}>
        
        <Text style={{ color: 'black', fontSize: 20 }}>Lịch sử mua hàng</Text>
      </View>
      </View>
      {/**body */}

      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          paddingVertical: '5%',
        }}>
        {dataOrders.length === 0 && 'Dữ liệu trống'}
      </Text>

      <FlatList
        data={dataOrders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{marginLeft:20, marginBottom:20, height:100}}>
            <Text>ID đơn hàng: {item.id}</Text>
            <Text>Ngày đặt hàng: {item.order_date}</Text>
            <Text>Ghi chú: {item.Note}</Text>
            <Text>
              Trạng thái đơn hàng: {item.Order_status ? 'Đã thanh toán' : 'Chưa thanh toán'}
            </Text>
            <Text>--------------------</Text>
          </View>
        )}
      />

      
      </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({});
