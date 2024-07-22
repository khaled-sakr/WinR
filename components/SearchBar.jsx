import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { icons} from '../constants'
import { router } from 'expo-router'
import { useState } from 'react'

const SearchBar = ({searchPage}) => {
  const [ value , setValue ]=useState({})
 
return (searchPage?<View className='relative flex-row mx-auto w-11/12 '>
    <TextInput value={value} onChangeText={(value) => setValue(value)} className='py-3 w-10/12 px-10 bg-[#DFDFDF] flex-col relative h-[60px] rounded-2xl' placeholderTextColor='#6A6A6A' placeholder='What are you looking for'/>
    <Image source={icons.search} className='w-[14px] h-[14px] absolute top-6 left-3'/>
  <TouchableOpacity onPress={()=>{setValue('');router.replace('home')}} className='w-4/12 my-auto mx-2'>
    <Text className='text-slate-600 text-lg'>
    Cancel
    </Text>
    </TouchableOpacity>
  </View>:<TouchableOpacity activeOpacity={0.9} onPress={()=>router.push(`/search/${2}`)} className='w-11/12 mt-6 mx-auto py-3 px-5 bg-[#DFDFDF] flex-col relative  h-[52px] rounded-3xl '>
      <View class='h-full mx-auto p-2 w-full' placeholderTextColor='#6A6A6A' placeholder='Search'/>
      <Text className="text-third mt-1 font-[400]">Search</Text>
      <Image source={icons.search} className='w-[14px] h-[14px] absolute top-5 right-5'/>
    </TouchableOpacity>)
}

export default SearchBar

