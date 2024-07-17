import { Image, TouchableOpacity ,Text, View } from 'react-native'
import React from 'react'
import { icons, images } from '../constants'
import { useState } from 'react'

const ProductCurdWithDet = ({src}) => {
    const [fav,setFav]=useState(true)
    const toggleFavorite = () => {
      setFav((prev) => !prev);
    };
  return (
    <View className='my-2 w-[157px] h-[221.21px] relative'>
        <View>
            <Image source={src} className='w-[155px] h-[172.2px]' resizeMode='contain'/>
            <TouchableOpacity activeOpacity={0.7} onPress={toggleFavorite} className='w-[36px] h-[36px] pb-2 pt-2.5 top-1 right-1 absolute bg-white rounded-full'>
            {fav ? <Image source={icons.favourite} className='w-full h-full' resizeMode='contain'/> : <Image source={icons.favouriteFull} className='w-full h-full' resizeMode='contain'/>}
              </TouchableOpacity>
        </View>
        <View className='flex-row w-full flex'>
            <View className='flex w-8/12 flex-col px-0'>
                <Text className='text-sm font-[300]'>Printed Shirt</Text>
                <View className='flex flex-row space-x-3'>
                    <Text className='font-[300]'>EGP</Text>
                    <Text className='font-[900]'>300</Text>
                </View>
                <View className='flex flex-row space-x-4'>
                    <Text className='line-through'>420</Text>
                    <Text className='text-green-400'>40% OFF</Text>
                </View>
            </View>
            <TouchableOpacity  className='w-5/12'>
                <Image source={icons.AddShopping} className='m-auto' resizeMode='constain'/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default ProductCurdWithDet

