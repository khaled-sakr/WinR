import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SquareText = ({title , addstyle}) => {
  return (
      <Text className={`rounded-[5px] text-center font-bold  py-2.5 ${addstyle}`}>{title}</Text>
  )
}

export default SquareText

const styles = StyleSheet.create({})