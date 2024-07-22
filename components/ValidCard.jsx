import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../constants'

const ValidCard = () => {
  return (
    <View className='flex-row w-11/12 mx-auto space-x-3 my-3'>
    <Image source={icons.payment1}/>
    <Image source={icons.payment2}/>
    <Image source={icons.payment3}/>
  </View>
  )
}

export default ValidCard
