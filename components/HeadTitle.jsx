import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HeadTitle = ({srcIconRight,srcIconMiddle,srcIconLeft}) => {
  return (
    <View className='flex-row mx-auto mt-2 justify-between w-11/12 h-[50] '>
      {srcIconLeft && <Image source={srcIconLeft} className='mt-3'/>}
      {srcIconMiddle && <Image source={srcIconMiddle} className='mt-3 '/>}
      {srcIconRight && <Link href='/favourite'>
      <Image source={srcIconRight}/>
      </Link>}
    </View>
  )
}

export default HeadTitle

const styles = StyleSheet.create({})