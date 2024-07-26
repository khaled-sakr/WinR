import {Button, TouchableOpacity, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { images } from '../constants'
import { router } from 'expo-router'
import CustomButton from './CustomButton'
import Hr from './Hr'

const ProductCart = ({overlay , favourite ,addStyle}) => {
  return (
    <>
    <View  className={`w-11/12 flex-row justify-between mx-auto  ${addStyle ? addStyle:'my-4'} ${overlay && 'opacity-40'} `}>
      <Image source={images.productImg} className='w-[137px] h-[174px]'/>
      <View className='flex-1 ml-3'>
        <Text className='text-lg text-slate-500 font-semibold'>American Eagle</Text>
        <Text className='text-lg text-slate-400 font-semibold'>T-shirt</Text>
        <Text className='text-sm text-slate-500 font-semibold'>EGP 150</Text>
        <View className='flex-row'> 
          <Text className='line-through text-lg text-slate-600 font-[300]'>300</Text>
          <Text className='text-lg text-green-500 ml-3 font-[400]'>35% OFF</Text>
          </View>
         {!favourite ? <>
         <View className='flex-row'> 
          <Text className='text-slate-600 text-[17px] font-[500]'>Free delivery</Text>
          <Text className='text-[17px] text-slate-600 font-[300]'>{' '}by{' '}</Text>
          <Text className='text-[17px] text-green-500 font-[500]'>Fri, Nov 11.</Text>
          </View>        
          <Text className='text-lg text-slate-500 font-[300]'>Order in 9h 31m</Text>
         </>:<>
         <CustomButton onPress={()=>router.push('/products/1')} fav title='Buy' size='half' type='finalButtoms' addStyle='mt-6 '/>
         </>
          }
         {!favourite&& <View className='flex-row'> 
          <Text className='text-[17px] text-slate-400 font-[500]'>Sold by{' '}</Text>
          <Text className='text-[17px] text-slate-700 font-[500]'>American Eagle</Text>
          </View>}
      </View>
    </View>
    {favourite&&<Hr/>}      
      </>
  )
}

export default ProductCart

