import { TouchableWithoutFeedback ,Image, TouchableOpacity ,ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import { icons, images } from '../../constants'
import { router } from 'expo-router'
import ValidCard from '../../components/ValidCard'

import { Entypo } from '@expo/vector-icons';
import CreditCard from '../../components/CreditCard'
import ThreeDotCridit from '../../components/ThreeDotCridit'

const Payment = () => {
  const [chosenCard , setChosenCard] = useState(1)
  const [card , setCard] = useState([1,2])
  // const [threeDot , setThreeDot] = useState(false)
 
  return (
    <SafeAreaView >
    <ScrollView >
      <View className='relative h-screen'>
 
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
     <>
    <ThreeDotCridit item={item} setChosenCard={setChosenCard} chosenCard={chosenCard}/>
   </>
      )}
   <View className='flex-row justify-between w-10/12 mx-auto'>
    <View className='w-6/12'>
      <Text className='font-semibold w-11/12 mx-auto mt-4'>or check out with</Text>
    <ValidCard addStyle='mt-6'/>
      </View>
     <TouchableOpacity onPress={()=>{setCard([]);setThreeDot(false)}} className='font-semibold flex-row w-fit  mt-2 text-center h-7'>
      <Text className=' font-semibold underline text-red-600 '>
      Clear Cards
      </Text>
      </TouchableOpacity>
    </View>
    </>
    } 
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Payment

