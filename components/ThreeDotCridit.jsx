import { TouchableOpacity ,Image , Text, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { images } from '../constants';

const ThreeDotCridit = ({item, setThreeDot ,setChosenCard ,chosenCard}) => {
  return (
      <View className='mb-2'>
      <View className='flex-row justify-end w-[88%] mx-auto mt-2'>
    <View className='w-11/12 mx-auto'>
    <TouchableOpacity activeOpacity={0.8} onPress={()=>setChosenCard(item)} className='w-5 h-5 rounded-full border-slate-500 border-2 ml-2'>
      <View className={`w-3 h-3 rounded-full m-auto ${chosenCard === item ? ' bg-green-700': 'bg-transparent'}`}/>
      </TouchableOpacity>
    </View>
      <TouchableOpacity activeOpacity={0.7} className='justify-end z-10 mr-1' onPress={()=>setThreeDot(true)}>
      <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
      </View> 
     <TouchableOpacity activeOpacity={0.8} onPress={()=>setChosenCard(item)} className={`my-2 w-[343px] h-[218px] rounded-xl mx-auto border-4 border-dashed  `}>
     <Image source={images.curdback} className='rounded-lg w-[335px] h-[210px] mx-auto '/>
     <Text className='text-3xl absolute top-4 right-4 font-extrabold text-white'>VISA</Text>
     <Text className='absolute font-[300] top-20 left-4 text-white text-xl tracking-[6px]'>1111 2222 3333 4444</Text>
     <Text className={`text-xs font-bold absolute bottom-8 left-4  text-white`}>CARDHOLDER NAME</Text>
     <Text className={`text-xs font-bold absolute bottom-4 left-12 text-white`}>KHALED</Text>
     <Text className={`text-xs font-bold absolute bottom-8 right-4 text-white`}>VALID TRUE</Text>
     <Text className={`text-xs font-bold absolute bottom-4 right-8 text-white`}>03/26</Text>
     </TouchableOpacity>
       </View>
 )
}

export default ThreeDotCridit 