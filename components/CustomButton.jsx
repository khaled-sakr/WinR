import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View ,logout} from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const CustomButton = ({title , onPress, size ,logout , type , cancel ,addStyle ,loading}) => {
  return (
<>
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className={` ${addStyle} ${type ==='startButtoms'?'w-7/12': 'w-[95%]'} mx-auto ${size === 'large'?'h-[57px]':'h-[41px]'}  font-semibold rounded-[10px] items-center justify-center ${cancel ?  (logout ? 'bg-transparent':'bg-white border border-slate-300') :'bg-secondary'}`}>
    <Text className={` ${cancel ? (logout ? 'text-red-500':'text-slate-400 font-semibold') : 'text-white' } text-lg `}>
      {/* <ActivityIndicator className='mt-4' size="5%" color="#363736"/>  */}
    {loading ? (
       <Text className='animate-pulse'>wait second pls...</Text>
      ): title} 
    </Text>
    </TouchableOpacity>
    </>
  )
}

export default CustomButton
