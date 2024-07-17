import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const CustomButton = ({title , onPress, size , type ,addStyle}) => {
  return (
<>
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className={`${type ==='startButtoms'?'w-7/12': 'w-[95%]'} mx-auto ${size === 'large'?'h-[57px]':'h-[41px]'} bg-secondary font-semibold rounded-[10px] items-center flex justify-center ${addStyle}`}>
    <Text className='text-white text-lg'>
    {title}
    </Text>
    </TouchableOpacity>
    </>
  )
}

export default CustomButton
