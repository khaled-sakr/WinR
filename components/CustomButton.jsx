import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({title , onPress, size ,type}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className={`${type ==='startButtoms'?'w-7/12': 'w-[95%]'} mx-auto ${size === 'large'?'h-[57px]':'h-[41px]'} mt-10 bg-secondary font-semibold rounded-[10px] items-center flex justify-center`}>
    <Text className='text-white text-lg'>
    {title}
    </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
