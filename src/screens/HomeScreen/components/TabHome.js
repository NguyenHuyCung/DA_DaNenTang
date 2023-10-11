import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'


export default function TabHome({navigation}) {
  return (

    <View>
        <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:10}}>
          <Text style={{fontSize:30}}>Căng tin HUCE</Text>
        </View>
        <View style={styles.tabOrder}>
            <TouchableOpacity style={{marginLeft:10, borderWidth:1, borderRadius:5}}>
                <Text>Đồ ăn</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderWidth:1, borderRadius:5}}>
                <Text>Đồ uống</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight:10, borderWidth:1, borderRadius:5}}>
                <Text>Đồ ăn vặt</Text>
            </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop:10}}>
            {/**display Items */}
            <View style={{ flexDirection: 'row', marginBottom:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('ItemDetail')}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={require('./th.png')} style={{width:60, height:60}} />
                    <View style={{marginLeft:10}}>
                      <Text>Tên :</Text>
                      <Text> </Text>
                      <Text>Giá :</Text>
                    </View>
                  </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  tabOrder:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between' 
  }
})