import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const CartLayout = () => {
  return (
    <>
    <Stack>
    <Stack.Screen name="confirm" options={{headerShown:false}}/>      
    <Stack.Screen name="checkout" options={{headerShown:false}}/>      
    </Stack>
    <StatusBar backgroundColor="#ffffff" style="light"/>
    </>
  )
}

export default CartLayout

const styles = StyleSheet.create({})