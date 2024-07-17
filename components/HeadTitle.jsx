import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import { icons } from '../constants'

const HeadTitle = ({srcIconRight,srcIconMiddle,srcIconLeft}) => {
  return (
    <View className='flex-row mx-auto mt-2 justify-between w-11/12 h-[50] '>
      {srcIconLeft && <TouchableOpacity activeOpacity={0.8} onPress={() => {(srcIconLeft === icons.back ) && router.back()}}>
        <Image source={srcIconLeft} className='mt-3'/>
        </TouchableOpacity>
        }
      {srcIconMiddle && <Image source={srcIconMiddle} className='mt-3 '/>}
      {srcIconRight && <TouchableOpacity className='mt-2' onPress={() => router.push('/favourite')}>
      <Image source={srcIconRight}/>
      </TouchableOpacity>
      
      }
    </View>
  )
}

export default HeadTitle

const styles = StyleSheet.create({})