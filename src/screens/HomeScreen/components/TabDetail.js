import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'
export default function TabDetail({navigation}) {
    const [showButtons, setShowButtons] = useState(false);
    const toggleButtons = () => {setShowButtons(!showButtons);};
  return (
    <ScrollView>
        {/**Thong tin tieu de */}
        <View style={styles.tieu_de}>
            <Text>Cang-tin HUCE</Text>
            <Text>Địa chỉ : Nhóm 13 - Đa Nền Tảng</Text>
            <Text>Liên hệ :</Text>
            <Text>Email : nhom_13_da_nen_tang@huce.edu.vn</Text>
            <Text>SĐT : 0111910JQK</Text>
            <Text>Cảm ơn quý khách đã xử dụng dịch vụ của chúng tôi</Text>
        </View >
        {/**danh sách tuy chon */}
        <View style={styles.options}>
            {/**thong tin ca nhan */}
            <View >
                <TouchableOpacity style={styles.information} onPress={()=>navigation.navigate('PersonalInformation')} >
                    <Icon name='information-circle-outline'  />
                    <Text style={{fontSize:20}}> Thông tin cá nhân </Text>                    
                </TouchableOpacity>
            </View>
            {/**mua ve tuan */}
            <View>
                <TouchableOpacity onPress={toggleButtons}>
                    <Text style={{fontSize:20}}>Mua vé ăn theo tuần</Text> 
                </TouchableOpacity>
                {showButtons && (
                    <View style={styles.ticket}>
                        <TouchableOpacity onPress={()=>navigation.navigate('TicketLunch')}>
                            <Text>Vé buổi trưa </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('TicketEvening')} >
                            <Text>Vé buổi tối </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('TicketTwo')}>
                            <Text>Vé 2 buổi</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            {/**lich su mua hang */}
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate('OrderHistory')}>
                    <Text style={{fontSize:20}}>Lịch sử mua hàng</Text>
                </TouchableOpacity>
            </View>
            {/**Dang xuat */}
            <View style={styles.log_out}>
                <TouchableOpacity onPress={()=> navigation.navigate('LoginScreen')}>
                    <Text style={{fontSize:20}}>Đăng Xuất</Text>
                </TouchableOpacity>
            </View>

        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    tieu_de:{
        backgroundColor:"blue"
    },
    options:{
        backgroundColor:'green',
        marginTop:20,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    information:{
        marginTop:20,
        borderRadius:30,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'

    },
    ticket:{
        alignItems:'center'
    }
    
})