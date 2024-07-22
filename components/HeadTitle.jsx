import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { icons } from '../constants'

const HeadTitle = ({srcIconRight,srcIconMiddle,srcIconLeft , titleLeft , titleRight ,middle ,middleText}) => {
  return (
    <View className='flex-row mx-auto mt-2 justify-between w-11/12 h-[50] '>
      {srcIconLeft && <TouchableOpacity className={`${middleText ?'w-[36%]': 'w-4/12'} `} activeOpacity={0.8} onPress={() => {(srcIconLeft === icons.back ) && router.back()} }>
        <Image source={srcIconLeft} className='mt-3'/>
        </TouchableOpacity>
         || srcIconLeft && titleLeft && <View className='w-4/12'/>}
         {titleLeft && 
         <View className='flex-row w-4/12 mt-2'>
          <Text className='text-slate-500 text-xl font-semibold'>
          Cart
          </Text>
          <Text className='text-slate-400 font-semibold mt-1 ml-2'>
          ( {titleLeft} )
          </Text>
          </View>}
      {srcIconMiddle &&  <View className={`mt-3 ${middle ? 'w-[61%] relative': 'w-4/12' } `} onPress={() => router.push('/favourite')}>
        <Image source={srcIconMiddle} className={`mx-auto ${ middle && 'absolute right-0'} `}/>
      </View>}
      {middleText && <Text className='my-auto text-3xl font-semibold w-full ' >{middleText}</Text>}
      {srcIconRight && <TouchableOpacity className='mt-3 w-4/12 flex-row justify-end ' onPress={() => router.push('/favourite')}>
      <Image source={srcIconRight}/>
      </TouchableOpacity>
      }
      {titleRight && <TouchableOpacity className='mt-3 w-4/12 flex-row justify-end ' onPress={() => router.back()}>
      <Text className='text-lg font-[600] text-slate-500'>
        {titleRight}
        </Text>
      </TouchableOpacity>
      }
    </View>
  )
}

export default HeadTitle

const styles = StyleSheet.create({})