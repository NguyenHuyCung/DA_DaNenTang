import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const TicketLunch = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#002A5C'} barStyle={'light-content'} />
      <View style={styles.headerScreen}>
        <Text style={{fontSize:20,color:'#FFFFFF'}}>Vé ăn trưa theo tuần</Text>
        <Text style={{fontSize:20,color:'#FFFFFF'}}>Căng-tin HUCE</Text>
      </View>
      <View style={styles.descriptionText}>
        <Text style={{fontSize:20}}>Mô tả :</Text>
        <Text style={{fontSize:15}}>  Vé ăn buổi trưa theo tuần giúp bạn thanh toán một món  (0 -{'>'} 26000 đ) :</Text>
        <Text style={{fontSize:15}}>    Cơm rang thập cẩm, Mì tôm trứng, Bánh mỳ Pate, Bánh Mỳ thập cẩm, ... {'\n'}</Text>
        <Text style={{fontSize:20}}>Hạn sử dụng : </Text> 
        <Text style={{fontSize:15}}>        đến hết tuần tính từ thời điểm mua vé {'\n'} </Text>
        <Text style={{fontSize:20}}>Sử dụng tại bàn ăn của Căng-tin, không áp dụng hình thức đặt onl {'\n'}</Text>
        <Text style={{fontSize:15}}>Giá vé : 120,000 VND (Một trăm hai mười nghìn đồng) </Text>
      </View>
      <View style={styles.buttonBuy}>
        <TouchableOpacity >
          <Text style={{fontSize:20}}>Mua Vé </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TicketLunch

const styles = StyleSheet.create({
  descriptionText:{
    marginTop:20
  },
  buttonBuy :{
    justifyContent:'center',
    alignItems:'center',
    marginTop : 30,
    backgroundColor:'green',
    borderRadius:30,
    height:50

    
  },
  headerScreen:{
    alignContent:'center',
    alignItems:'center',
    backgroundColor:'#002A5C',
    height:70
  }

})