import { Image ,TouchableOpacity ,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons } from '../constants'
import { useState } from 'react'

const FavIcon = ({addStyle , size}) => {
    const [fav,setFav]=useState(true)
    const toggleFavorite = () => {
      setFav((prev) => !prev);
    };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={toggleFavorite} className={`${addStyle} ${size} pb-1 pt-1.5 top-0 right-0 absolute border-2 border-gray-300 rounded-full`}>
    {fav ? <Image source={icons.favourite} className='w-full h-full' resizeMode='contain'/> : <Image source={icons.favouriteFull} className='w-full h-full' resizeMode='contain'/>}
      </TouchableOpacity>
  )
}

export default FavIcon

const styles = StyleSheet.create({})