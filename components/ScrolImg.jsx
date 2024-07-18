import {TouchableOpacity , Image, Text, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const ScrolImg = ({src , title}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={()=>{router.push('products/2')}} className='w-[244.92px] relative h-[163px] mr-2'>
        <Image source={src} resizeMode='contain' className='w-[244.92px] h-[163px] rounded-xl'/>
      <Text className='absolute top-5 left-3 text-xl w-[100px] font-semibold bg-slate-200/10 px-1'>{title}</Text>
    </TouchableOpacity>
  )
}

export default ScrolImg
