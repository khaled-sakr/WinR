import { TouchableOpacity ,Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const FeatureScrol = ({src , title , price}) => {
  return (
    <TouchableOpacity onPress={()=>{router.push(`products/${3}`)}} className='pr-2'>
      <Image source={src} className='w-[261px] h-[216px] rounded-xl'/>
      <Text className='font-[400]  px-8  text-Font '>{title}</Text>
      <Text  className='font-[600] px-8   text-Font '>{price}EGP</Text>
    </TouchableOpacity>
  )
}

export default FeatureScrol

const styles = StyleSheet.create({})