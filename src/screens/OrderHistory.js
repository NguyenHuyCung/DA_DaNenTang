import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const OrderHistory = () => {
  return (
    <View>
        {/**header */}
        <View>
            <Text>Lịch sử mua hàng</Text>
        </View>
        {/**body */}
        <ScrollView>
            <Text>body chua lịch sử</Text>
        </ScrollView>
        {/**button delete */}
        <View>
            <TouchableOpacity>
                <Text>Xóa toàn bộ</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default OrderHistory

const styles = StyleSheet.create({})