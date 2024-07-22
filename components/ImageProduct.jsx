import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const ImageProduct = ({src}) => {
  return (
    <View className='w-[90vw] mx-auto '>
        <Image source={src} className='mx-auto rounded-xl w-[250px] h-[305px]'/>
    </View>
  )
}

export default ImageProduct

