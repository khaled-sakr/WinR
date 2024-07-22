import { TouchableOpacity ,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const FlatHorScrol = ({src , title ,price , blur}) => {
  return (
      <TouchableOpacity onPress={()=>{router.push(`products/${3}`)}}  className='w-[174px] h-[242px] mr-2'>
    <Image blurRadius={blur} source={src} resizeMode='contain' className='w-[174px] h-[201px] rounded-xl'/>
    <Text className='font-bold  pl-2 pt-1'>{title}</Text>
    <Text className='font-[400] pl-2 '>EGP {price}</Text>
      </TouchableOpacity>
  )
}

export default FlatHorScrol

