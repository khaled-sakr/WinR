import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomIcon = ({src , title ,addStyleImage  ,addStyleText ,
  addStyleView , blur
}) => {
  return (
    <View className={`mr-3 justify-center ${addStyleView ? addStyleView : 'w-[122.74px]'}`}>
    <Image blurRadius={blur} source={src} resizeMode='contain' className={` rounded-full pr-2 mx-auto ${addStyleImage ? addStyleImage : ' w-[100%] h-[91.24px] '}`} />
    <Text className={`text-center font-[500] text-secondary ${addStyleText ? addStyleText : ' text-base ' }`}>{title}</Text>
  </View>
  )
}

export default CustomIcon
