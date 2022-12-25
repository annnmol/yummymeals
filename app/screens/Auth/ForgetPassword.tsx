import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const ForgetPassword = () => {
  const route = useRoute<any>()
  return (
    <View>
      <Text>ForgetPassword {route?.params?.userId}</Text>
    </View>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})