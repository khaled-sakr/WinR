import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const TabProfile = ({src , title ,link}) => {
  return (
    <TouchableOpacity onPress={()=>router.push(link)} className='flex-row my-7 w-11/12 mx-auto space-x-3 '>
        <Image source={src}/>
      <Text className='text-[17px] font-semibold my-auto'>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabProfile

const styles = StyleSheet.create({})