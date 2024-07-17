import { Text } from 'react-native'
import React from 'react'

const BoldTitle = ({title , addStyle}) => {
  return (
    <Text className={` text-2xl font-bold ${addStyle} text-secondary`}>{title}</Text>
  )
}

export default BoldTitle

