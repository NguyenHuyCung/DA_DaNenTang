import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const TicketLunch = () => {
  return (
    <View>
      <View>
        <Text style={{fontSize:20}}>Vé ăn trưa theo tuần</Text>
        <Text style={{fontSize:20}}>Căng-tin HUCE</Text>
      </View>
      <View style={styles.descriptionText}>
        <Text style={{fontSize:20}}>Mô tả :</Text>
        <Text>  Vé ăn buổi trưa theo tuần giúp bạn thanh toán một món  (0 -{'>'} 26000 đ) :</Text>
        <Text>    Cơm rang thập cẩm, Mì tôm trứng, Bánh mỳ Pate, Bánh Mỳ thập cẩm, ... </Text>
        <Text style={{fontSize:20}}>Hạn sử dụng : </Text> 
        <Text>        đến hết tuần tính từ thời điểm mua vé </Text>
        <Text style={{fontSize:20}}>Sử dụng tại bàn ăn của Căng-tin, không áp dụng hình thức đặt onl</Text>
        <Text style={{fontSize:15}}>Giá vé : 120,000 VND (Một trăm hai mười nghìn đồng) </Text>
      </View>
      <View style={styles.buttonBuy}>
        <TouchableOpacity>
          <Text>Mua Vé </Text>
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
    alignContent :'center',
    justifyContent:'center',
    alignItems:'center',
    marginTop : 30,
    backgroundColor:'green',
    borderRadius:30
  }

})