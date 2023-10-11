import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Button, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useState } from 'react'
import { Modal } from 'react-native-paper';

export default function TabDetail({navigation}) {
    const [showButtons, setShowButtons] = useState(false);
    const toggleButtons = () => {setShowButtons(!showButtons);};

    {/**Alert logout */}
    const alertLogOut = () => 
        Alert.alert('Cảnh báo', 'Bạn chắc chắn muốn đăng xuất chứ ?', [
            {
            text: 'Hủy',
            style: 'cancel',
            },
            {text: 'Đăng xuất', 
            onPress: () => navigation.navigate('LoginScreen')},
        ]);
    


  return (
    <ScrollView>
        {/**Thong tin tieu de */}
        <View style={styles.tieu_de}> 
            <Text style={{color:'white', marginTop:10,fontSize:25}}>Cang-tin HUCE</Text>
            <View style={{marginLeft:10}}>
                <Text style={{color:'white'}}>Địa chỉ : Nhóm 13 - Đa Nền Tảng</Text>
                <Text style={{color:'white'}}>Liên hệ với chúng tôi</Text>
                <Text style={{color:'white'}}>Email : nhom_13_da_nen_tang@huce.edu.vn</Text>
                <Text style={{color:'white'}}>SĐT : 0111910JQK</Text>
                <Text style={{color:'white', marginBottom:10,}}>Cảm ơn quý khách đã sử dụng dịch vụ của chúng tôi</Text>
            </View>
        </View >
        {/**danh sách tuy chon */}
        <View style={styles.options}>
            {/**thong tin ca nhan */}
            <View >
                <TouchableOpacity style={styles.information} onPress={()=>navigation.navigate('PersonalInformation')} >
                    <Text style={{fontSize:20}}>Thông tin cá nhân </Text>                    
                </TouchableOpacity>
            </View>
            {/**mua ve tuan */}
            <View>
                <TouchableOpacity onPress={toggleButtons}>
                    <Text style={{fontSize:20}}>Mua vé ăn theo tuần</Text> 
                </TouchableOpacity>
                {showButtons && (
                    <View style={styles.ticket}>
                        <TouchableOpacity onPress={()=>navigation.navigate('TicketLunch')} style={{marginBottom:10}}>
                            <Text>Vé buổi trưa </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('TicketEvening')} style={{marginBottom:10}} >
                            <Text>Vé buổi tối </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('TicketTwo')} style={{marginBottom:10}}>
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
        </View>
        {/**Dang xuat */}
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:40}}>
                <TouchableOpacity onPress={alertLogOut}>
                    <Text style={{fontSize:20, color:'red'}}>Đăng Xuất</Text>
                </TouchableOpacity>
        </View>
        
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    tieu_de:{
        backgroundColor:"#0F5CA8",
    },
    options:{
        marginTop:20,
        alignItems:'flex-start',
        justifyContent:'center',
        marginLeft:20
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
        alignItems:'center',
        marginLeft:20
    }
    
})