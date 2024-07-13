import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FeatureScrol = ({src , title , price}) => {
  return (
    <View className='pr-2'>
      <Image source={src} className='w-[261px] h-[216px] rounded-xl'/>
      <Text className='font-[400]  px-8  text-Font '>{title}</Text>
      <Text  className='font-[600] px-8   text-Font '>{price}EGP</Text>
    </View>
  )
}

export default FeatureScrol

const styles = StyleSheet.create({})