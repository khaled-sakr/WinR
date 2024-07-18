import { Image ,TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '../../components/SearchBar'
import { useState } from 'react'
import { icons } from '../../constants'
import { router } from 'expo-router'
const historySearch = ['T-shirt' , 'Suits']
const Search = () => {
  const [ history , setHistory ]=useState(historySearch)
  return (
    <SafeAreaView>
       <SafeAreaView>
        <SearchBar searchPage={true}/>
        {history.length!== 0 &&
        <View className='w-11/12 mx-auto mt-12 mb-6 flex-row justify-between'>
          <Text className='text-slate-700 font-bold text-[18px]'>Recent Searches</Text>
          <TouchableOpacity onPress={()=>{ setHistory([]) }}>
            <Text className='text-blue-600 font-semibold text-[16px]'>Clear</Text>
          </TouchableOpacity>
          </View>}
        {history.map((item)=>(
        <View className='my-1' key={item}>
       <View className='flex-row justify-between w-11/12 mx-auto'>
        <Text className='text-slate-500 font-[400] text-[17px] mt-2'>{item}</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={()=>router.replace(`categories/${item}`)}>
          <Image className='text-slate-500 font-[300] text-[16px] mt-1 w-[26px] h-[26px]' source={icons.backarrow} resizeMode='contain'/>
          </TouchableOpacity>
        </View> 
        <View className='bg-slate-300 my-1 h-[2px] w-full'/>       
        </View>
        ))}
        </SafeAreaView>
    </SafeAreaView>
  )
}

export default Search

