import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'

global.mycart = [];


const ItemDetail = ({route,navigation}) => {

    {/**display detail */}
    const {menu} = route.params;

    {/**display so luong */}
    const [number, setNumber] = useState(1);
    const increaseNumber = () => {
        setNumber(number + 1);
    };
    const decreaseNumber = () => {
        if (number > 1) {
        setNumber(number - 1);
        }
    };
    //handle add to order
    // const [list, setList] = useState([]);


    const handleAddOrder = ()=>{

            
        // setList(global.mycart);
        // const newList = [{menu},...global.mycart];
        // setList(newList);
        // global.mycart = newList;
        const updatedCart = [...global.mycart];

        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingProductIndex = updatedCart.findIndex((item) => item.menu.menuName === menu.menuName);
      
        if (existingProductIndex !== -1) {
          // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng của nó
          updatedCart[existingProductIndex].quantity += number;
        } else {
          // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm nó vào giỏ hàng
          updatedCart.push({ menu, quantity: number });
        }
      
        // Cập nhật giỏ hàng toàn cục
        global.mycart = updatedCart;

        Alert.alert ('Thông báo', 'Bạn đã thêm vào đơn : \n ' +menu.menuName +'\n số lượng : ' +number, [
            {
                text: 'Ok',
                onPress: ()=>[],
            }
        ]);
        
        console.log(global.mycart);
            

            
    };




  return (
    <View>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{fontSize:20}}>Thông tin sản phẩm</Text>
        </View>
        <View >
            <View style={{justifyContent: 'center',alignItems: 'center',marginBottom:10, marginTop:10}}>
                <Image source={{uri: menu.menuImage}} style={{height:70, width:70, }} />
                <Text style={{fontSize:20}}>{menu.menuName} </Text>
            </View>
            <Text style={{marginLeft:10}}>Mô tả : {menu.menuDescription}</Text>
        </View>
        <View style={{marginTop:10, marginLeft:10}}>
            <Text>Số lượng :</Text>
            {/**display so luong */}
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={decreaseNumber}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.number}>{number}</Text>
                <TouchableOpacity style={styles.button} onPress={increaseNumber}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            {/**het dispaly so luong */}
        </View>
        <View style={{alignItems:'center', marginTop:30, }}>
                <TouchableOpacity onPress={handleAddOrder} style={{alignItems:'center', justifyContent:'center',borderWidth:1, height:30, width:120, borderRadius:30, backgroundColor:'#0F5CA8'}}>
                    <Text style={{color:'white'}}>Thêm vào đơn</Text>
                </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:30}} >
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:10}}>
                <Text style={{color:'blue'}}>Quay lại</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('TabOrder')} style={{marginRight:10, borderWidth:1, borderRadius:3}}>
                <Text>Vào trang đơn hàng</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ItemDetail

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
      },

})