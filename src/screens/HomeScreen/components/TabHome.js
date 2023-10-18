import { ScrollView, StyleSheet, Text, View , Image, TouchableOpacity, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function TabHome({navigation}) {

  const [menu, setMenu] = useState([]);

  
  useEffect(() => {
    // Gọi API để lấy danh sách menu
    fetch("https://65269ef2917d673fd76ca806.mockapi.io/menu") // Thay API_URL bằng URL thực tế của API
      .then((response) => response.json())
      .then((data) => setMenu(data))
      .catch((error) => console.error(error));
  }, []);


  return (

    <View>
        <View style={{justifyContent: 'center',alignItems: 'center', marginBottom:10}}>
          <Text style={{fontSize:30}}>Căng tin HUCE</Text>
        </View>
        {/**display Menu */}
        <View style={{marginTop:10, marginBottom:10}}>
            <FlatList
            data={menu}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ flexDirection: 'row', marginBottom:40, borderWidth:1, marginLeft:10, marginRight:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('ItemDetail', {menu: item})}>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={{uri:item.menuImage}} style={{width:60, height:60}} />
                    <View style={{marginLeft:10}}>
                      <Text>{item.menuName}</Text>
                      <Text></Text>
                      <Text>Giá: {item.menuPrice} VND</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
                )}
              />
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  
})