import { Image, TouchableOpacity ,ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import { icons, images } from '../../constants'
import { router } from 'expo-router'
import ValidCard from '../../components/ValidCard'

const Payment = () => {
  const [chosenCard , setChosenCard] = useState(1)
  const [card , setCard] = useState([1,2])
  return (
    <SafeAreaView>
    <ScrollView>
      <HeadTitle srcIconLeft={icons.back}  middleText='Payment' />
    <View className='w-[87%] mx-auto flex-row justify-between my-8'>
        <Text className='font-semibold text-[17px] '>Card Managment</Text>
        <TouchableOpacity onPress={()=>router.push('add-card')} >
            <Text className='text-red-500 my-auto'>Add New+</Text>
        </TouchableOpacity>
    </View>
    {card.length === 0 ?
    <View>
        <Image source={images.paymentfailed} className='w-11/12 mx-auto h-[330px]'/>
        <Text className='text-center mt-3 mb-1 w-9/12 text-[17px] mx-auto font-semibold text-slate-500'>You don’t have any saved payment methods</Text>
        <Text className='text-center font-[400] text-sm w-8/12 mx-auto text-slate-400'>Add these in at checkout for a smoother experience!</Text>
    </View> :
    <>
    {card.map ((item)=>
    <TouchableOpacity key={item} onPress={()=>setChosenCard (item)} activeOpacity={0.7} className={`my-4 relative w-[343px] h-[218px] rounded-xl mx-auto ${chosenCard === item && 'border-4 border-green-600'}`}>
      <Image source={images.curdback} className='rounded-lg w-[335px] h-[210px] mx-auto '/>
    <Text className='text-3xl absolute top-4 right-4 font-extrabold text-white'>VISA</Text>
    <Text className='absolute font-[300] top-20 left-4 text-white text-xl tracking-[6px]'>1111 2222 3333 4444</Text>
    <Text className='text-xs font-bold absolute bottom-8 left-4 text-white'>CARDHOLDER NAME</Text>
    <Text className='text-xs font-bold absolute bottom-4 left-12 text-white'>KHALED</Text>
    <Text className='text-xs font-bold absolute bottom-8 right-4 text-white'>VALID TRUE</Text>
    <Text className='text-xs font-bold absolute bottom-4 right-8 text-white'>03/26</Text>
    </TouchableOpacity>
      )}
    {/* <TouchableOpacity onPress={()=>setChosenCard(2)} activeOpacity={0.7} className={`my-4 relative w-[343px] h-[218px] rounded-xl mx-auto ${chosenCard === 2 && 'border-4 border-green-600'}`}>
      <Image source={images.curdback} className='rounded-lg w-[335px] h-[210px] mx-auto '/>
    <Text className='text-3xl absolute top-4 right-4 font-extrabold text-white'>VISA</Text>
    <Text className='absolute font-[300] top-20 left-4 text-white text-xl tracking-[6px]'>1111 2222 3333 4444</Text>
    <Text className='text-xs font-bold absolute bottom-8 left-4 text-white'>CARDHOLDER NAME</Text>
    <Text className='text-xs font-bold absolute bottom-4 left-12 text-white'>KHALED</Text>
    <Text className='text-xs font-bold absolute bottom-8 right-4 text-white'>VALID TRUE</Text>
    <Text className='text-xs font-bold absolute bottom-4 right-8 text-white'>03/26</Text>
    </TouchableOpacity> */}
   <View className='flex-row'>
    <View className='w-6/12 ml-4'>
      <Text className='font-semibold w-11/12 mx-auto mt-4'>or check out with</Text>
    <ValidCard/>
      </View>
     <TouchableOpacity onPress={()=>setCard([])} className='font-semibold flex-row justify-end w-6/12 mx-auto mt-2'>
      <Text className='font-semibold underline text-red-600 mr-8'>
      Clear Cards
      </Text>
      </TouchableOpacity>
    </View>
    </>
    }
    </ScrollView>
    </SafeAreaView>
  )
}

export default Payment

