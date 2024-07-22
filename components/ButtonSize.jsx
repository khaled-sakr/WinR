import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const ButtonSize = ({currentSize ,size , setSize}) => {
  return (
    <TouchableOpacity onPress={()=>setSize(currentSize)}>
        <Text  className={`w-[43px] text-center border-stone-400 border-[0.75px] px-2 py-2 ${size === currentSize && 'bg-secondary text-white'} rounded-[3px] `}>{currentSize}</Text>
        </TouchableOpacity>
  )
}

export default ButtonSize

const styles = StyleSheet.create({})