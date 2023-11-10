import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useAppSelector} from '../../store/hooks';

export default function TabHome({navigation}) {
  const networkState = useAppSelector(state => state.network.ipv4Address);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách menu
    fetch(`${networkState}/get-menu`) // Thay API_URL bằng URL thực tế của API
      .then(response => response.json())
      .then(data => setMenu(data.menus))
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 30, color: 'black'}}>Căng tin HUCE</Text>
      </View>
      {/**display Menu */}
      <View style={{marginTop: 10, marginBottom: 70}}>
        <FlatList
          data={menu}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 40,
                borderWidth: 1,
                marginLeft: 10,
                marginRight: 10,
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ItemDetail', {menu: item})}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: item.Menu_image}}
                    style={{width: 60, height: 60}}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text style={{color: 'black'}}>{item.menu_name}</Text>
                    <Text style={{color: 'black'}}></Text>
                    <Text style={{color: 'black'}}>
                      Giá: {item.Price} VND
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
