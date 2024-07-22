import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const CustomButton = ({title , onPress, size , type , cancel ,addStyle}) => {
  return (
<>
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className={` ${addStyle} ${type ==='startButtoms'?'w-7/12': 'w-[95%]'} mx-auto ${size === 'large'?'h-[57px]':'h-[41px]'}  font-semibold rounded-[10px] items-center justify-center ${cancel ? 'bg-white border border-slate-300' : 'bg-secondary'}`}>
    <Text className={` ${cancel ? 'text-slate-400 font-semibold' : 'text-white'} text-lg `}>
    {title}
    </Text>
    </TouchableOpacity>
    </>
  )
}

export default CustomButton
