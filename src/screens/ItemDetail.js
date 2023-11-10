import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  FlatList,
  TextInput,
  Button,
  ScrollView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useAppDispatch,useAppSelector } from './store/hooks';
global.mycart = [];
import { addItem,updateItemQuantity } from '../slice/listSlice';
import axios from 'axios';


const ItemDetail = ({route, navigation}) => {
  const listOrder = useAppSelector(state => state.list.orderList)
  const dispatch = useAppDispatch()
  {
    /**display detail */
  }
  const {menu} = route.params;

  {
    /**display so luong */
  }
  const [number, setNumber] = useState(1);
  const increaseNumber = () => {
    setNumber(number + 1);
  };
  const decreaseNumber = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  

  const handleAddOrder = () => {
    
    // Cập nhật giỏ hàng toàn cục
    global.mycart = listOrder;
    
     dispatch(addItem({ menu: menu, quantity: number }));
     console.log(listOrder)
    Alert.alert(
      'Thông báo',
      'Bạn đã thêm vào đơn : \n ' + menu.menu_name + '\n số lượng : ' + number,
      [
        {
          text: 'Ok',
          onPress: () => [],
        },
      ],
    );
  };

  const network = useAppSelector(state => state.network.ipv4Address);
  const [commentData, setCommentData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(`${network}/get-comments`, {
            menuId: menu.id,
        });

        setCommentData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [menu.id, network]);

  const renderCommentItem = ({ item }) => (
    <View >
      <Text>{`StuID: ${item.stu_id}`}</Text>
      <Text>{`Comment: ${item.comment}`}</Text>
      <Text>{`Time: ${item.Date_rat}`}</Text>
      <Text>-------------------</Text>
    </View>
  );
  
  //add cmt
  const [newComment, setNewComment] = useState('');
  const [listNewComment, setListNewComment] = useState([]);
  const emailRedux = useAppSelector(state => state.signUp.email) || "";
  const score = 10;
  const handleAddComment = async () => {
    setListNewComment((prevList) => [...prevList, newComment]);
    console.log(listNewComment);
    try {
      const response = await axios.post(`${network}/add-comment`, {
        menuId: menu.id,
        comment: newComment,
        email : emailRedux,
        score : score
      });
  
      // Kiểm tra xem response.data có tồn tại và có chứa thuộc tính data không
      if (response.data && response.data.data) {
        // Cập nhật state commentData với comment mới
        setCommentData([...commentData, response.data.data]);
  
        // Xóa giá trị mới trong TextInput
        setNewComment('');
        
      } else {
        Alert.alert('Thông báo', 'Đã thêm Comments của bạn !');
        // Xóa giá trị mới trong TextInput
        setNewComment('');
        
      }
    } catch (error) {
      console.error('Error adding comment:', error);
    }
    console.log("ban vua add cmt", newComment);
  }

  //hien cmt
 


  return (
    <View>
      <View
        style={{
          color: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black', fontSize: 20}}>Thông tin sản phẩm</Text>
      </View>
      <View>
        <View
          style={{
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <Image
            source={{uri: menu.Menu_image}}
            style={{height: 70, width: 70}}
          />
          <Text style={{color: 'black', fontSize: 20}}>{menu.menu_name} </Text>
        </View>
        <Text style={{color: 'black', marginLeft: 10}}>
          Mô tả : {menu.Menu_description}
        </Text>
      </View>
      <View style={{color: 'black', marginTop: 10, marginLeft: 10}}>
        <Text>Số lượng :</Text>
        {/**display so luong */}
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={decreaseNumber}>
            <Text style={{color: 'black'}}>-</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{number}</Text>
          <TouchableOpacity style={styles.button} onPress={increaseNumber}>
            <Text style={{color: 'black'}}>+</Text>
          </TouchableOpacity>
        </View>
        {/**het dispaly so luong */}
      </View>
      <View style={{color: 'black', alignItems: 'center', marginTop: 30}}>
        <TouchableOpacity
          onPress={handleAddOrder}
          style={{
            color: 'black',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
            height: 30,
            width: 120,
            borderRadius: 30,
            backgroundColor: '#0F5CA8',
          }}>
          <Text style={{color: 'black', color: 'white'}}>Thêm vào đơn</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          color: 'black',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{color: 'black', marginLeft: 10}}>
          <Text style={{color: 'black', color: 'blue'}}>Quay lại</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('TabOrder')}
          style={{
            color: 'black',
            marginRight: 10,
            borderWidth: 1,
            borderRadius: 3,
          }}>
          <Text style={{color: 'black'}}>Vào trang đơn hàng</Text>
        </TouchableOpacity>
      </View>

      <View style={{marginBottom:5, height:'40%'}}>
          {/* /list comments */}
          <View style={{marginLeft:20, marginTop: 10}}>
            <FlatList
              data={commentData}
              keyExtractor={item => item.id.toString()}
              renderItem={renderCommentItem}
            />
          </View>
          {/* show cmt vua nhap */}
          
          <View style={{marginLeft:10}}>
            <Text>{listNewComment}</Text>
          </View>
          
          
          {/* post comments */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft:5, marginRight:5 , marginBottom:5, marginTop:5}} >
              <TextInput value={newComment} onChangeText={(text) => setNewComment(text)} style={{borderWidth:1, marginTop:10, width:'80%'}} />
              <View style={{width:'20%', marginLeft:5, marginRight:5}}>
                <Button title='->' onPress={() => handleAddComment()} />
              </View>
          </View>
          
            
            
      </View>
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
  number: {
    fontSize: 20,
    marginHorizontal: 10,
    color: 'black',
  },
});
