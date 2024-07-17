import { TouchableOpacity ,Image, Text, View } from 'react-native'
import React from 'react'
import {images} from '../constants'
import { router } from 'expo-router'

const CategoryCurd = ({src}) => {
  return (
    <TouchableOpacity onPress={()=>router.push('/categories/0')} className='w-11/12 mx-auto mt-8'>
      <Image source={src} resizeMode='contain' className='mx-auto'/>
      <Text className='text-center mx-autom font-semibold text-lg mt-2'>Fashon men</Text>
    </TouchableOpacity>
  )
}

export default CategoryCurd

