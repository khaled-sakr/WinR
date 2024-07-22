import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '../constants'

const ProductOrders = ({title}) => {
  return (
    <View className='w-11/12 flex-row justify-between mx-auto my-4'>
      <Image source={images.productImg} className='w-[137px] h-[174px]'/>
      <View className='flex-1 ml-3'>
        <Text className='text-lg text-slate-500 font-semibold'>American Eagle</Text>
        <Text className='text-lg text-slate-400 font-semibold'>T-shirt</Text>
        <Text className={` text-lg ${title ==='CANCELED'?'text-red-500':'text-green-500'} font-semibold mt-2 `}>{title}</Text>
      </View>
    </View>
  )
}

export default ProductOrders

const styles = StyleSheet.create({})