import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatHorScrol = ({src , title ,price , blur}) => {
  return (
      <View className='w-[174px] h-[242px] mr-2'>
    <Image blurRadius={blur} source={src} resizeMode='contain' className='w-[174px] h-[201px] rounded-xl'/>
    <Text className='font-bold  pl-2 pt-1'>{title}</Text>
    <Text className='font-[400] pl-2 '>EGP {price}</Text>
      </View>
  )
}

export default FlatHorScrol

