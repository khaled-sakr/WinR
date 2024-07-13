import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomIcon = ({srcImage , title}) => {
  return (
    <View className='w-[122.74px] pr-2'>
    <Image source={srcImage} resizeMode='contain' className='w-[100%] h-[91.24px]'/>
    <Text className='text-center font-semibold text-secondary'>{title}</Text>
  </View>
  )
}

export default CustomIcon
