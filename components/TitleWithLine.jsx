import {  Text, View } from 'react-native'
import React from 'react'

const TitleWithLine = ({title , size , addStyle}) => {
  return (
    <View className={`flex relative mx-auto flex-row my-4 ${size}`}>
    <View className='h-[2px] bg-slate-400 mt-4 flex-1' />
    <Text className={`text-center text-Font ${addStyle} text-xl mx-2`}>{title}</Text>
    <View className='h-[2px] bg-slate-400 mt-4 flex-1'/> 
    </View>
  )
}

export default TitleWithLine

