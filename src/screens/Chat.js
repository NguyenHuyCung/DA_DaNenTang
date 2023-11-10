import { StyleSheet, Text, View , TouchableOpacity, Button} from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import avatarBot from './../../assets/2Q.png';
import axios from 'axios'; 

const Chat = ({navigation}) => {
  
  const [messages, setMessages] = useState([]);// Sử dụng useEffect để thêm tin nhắn mặc định khi component được tạo
  useEffect(() => {
    const welcomeMessage = {
      _id: 1,
      text: "Xin chào, tôi có thể giúp gì cho bạn?",
      createdAt: new Date(),
      user: {
        _id: 2, // ID của ứng dụng hoặc người phản hồi tự động
        name: "App",
        avatar: avatarBot
      },
    };
    setMessages([welcomeMessage]);
  }, []);



  const onSend = (newMessages = []) => {
    // Gửi tin nhắn từ người dùng
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
    const apiUrl = 'http://192.168.141.175:6868/api/echo'; 
    const userMessage = newMessages[0];
    const textData = userMessage.text;

    axios.post(apiUrl, textData, {
      headers: {
        'Content-Type': 'text/plain', // Thiết lập loại dữ liệu là text/plain
        // Bạn có thể thêm các tiêu đề khác tùy theo yêu cầu của API
      }
    })
    .then(response => {

      const responseMessage = {
        _id: Math.round(Math.random() * 1000000),
        text: response.data,
        createdAt: new Date(),
        user: {
          _id: 2, // ID của ứng dụng hoặc người phản hồi tự động
          name: "App",
          avatar: avatarBot
        },
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, [responseMessage]));
    
      // Xử lý dữ liệu phản hồi từ API ở đây
      console.log(response.data);
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      console.error(error);
    });
    
    

    

  }



  
  


    


  return (

    <View style={{ flex: 1 }}>
        <View style={styles.header} >
            <Text>  </Text>
            <Button  title='<'  onPress={() => navigation.goBack()} />
            <Text style={styles.headerText}>                    CANGTIN HUCE</Text>
            <View style={{ flex: 1 }}></View>
        </View>
    
        <View style={{height:'90%'}}>
        <GiftedChat  style={styles.chatContainer}
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id:1
            }}
        />
        </View>
    </View>
    
  )
}

export default Chat

const styles = StyleSheet.create({

  header: {
    height: 60,
    backgroundColor: 'blue', // Màu nền của tiêu đề
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
  },
  headerText: {
    color: 'white', // Màu chữ của tiêu đề
    fontSize: 20,
  },
  chatContainer: {
    flex: 1,
  },
})