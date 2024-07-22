import { ScrollView, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native'
import React from 'react'
import HeadTitle from '../components/HeadTitle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons, images } from '../constants'
import { Image } from 'react-native'
import BoldTitle from '../components/BoldTitle'
import { router } from 'expo-router'
import Hr from '../components/Hr'
import { useState } from 'react'
import ProductCart from '../components/ProductCart'

const Checkout = () => {
  const [paymentCash , setPaymentCash ]=useState(true)
  return (
    <SafeAreaView>
    <ScrollView >
    
    <HeadTitle srcIconLeft={icons.back} srcIconMiddle={icons.checkout} srcIconRight={icons.favourite}/>
    <View className='w-11/12 mx-auto mb-2'>
    <BoldTitle title='Ship To' addStyle='w-11/12 my-2 font-bold text-lg mx-auto text-secondary'/>
    <TouchableOpacity activeOpacity={0.8} onPress={()=>router.push('(profile)/address')} className='relative'>
        <Image source={images.adressblur} className='mx-auto'/>
      <View className='absolute flex-row top-[40%] right-[30%] bg-slate-300/50 rounded-md border border-white px-3 py-2'>
        <Image source={icons.pluscircle} className=' '/>
        <Text className='text-lg ml-2 text-white font-bold mb-1'>
          Add Adress 
        </Text>          
        </View>
      </TouchableOpacity>
    </View>
    <Hr/>
    <BoldTitle title='Payment Method' addStyle='w-11/12 my-2 font-bold text-xl mx-auto text-secondary'/>
     <TouchableOpacity activeOpacity={0.7} onPress={()=>setPaymentCash(true)} className={`w-11/12 justify-between px-4 mx-auto  rounded-md ${!paymentCash ? 'border-slate-300 h-16':'border-black h-24'} border shadow-2xl `}>
   <View className='flex-row w-full justify-between mt-3'>
      <View className='flex-row my-auto '>
        <Image source={paymentCash ? icons.dotblack : icons.dotwhitetwo} className='w-[13px] h-[13px] mt-2 rounded-full'/>
        <Text className='text-lg font-semibold ml-3'>Credit Card</Text>
      </View>
      <Image source={icons.iconcard} className='my-auto'/>
    </View>
   {paymentCash &&
     <View className='mx-auto w-full'>
      <View className='bg-slate-300 h-[1.5px] mb-1 w-8/12 mx-auto'/>
       <TouchableOpacity onPress={()=>router.push('add-card')} >
       <Text className='mx-auto text-[17px] mb-3 text-blue-700'>
           + Add New card
       </Text>
    </TouchableOpacity>
      </View>}
    </TouchableOpacity> 
   <TouchableOpacity activeOpacity={0.7} onPress={()=>setPaymentCash(false)} className={`w-11/12 mt-2 justify-between px-4 mx-auto h-16 flex-row rounded-md ${paymentCash ? 'border-slate-300':'border-black'} border`}>
      <View className='flex-row my-auto'>
        <Image source={!paymentCash ? icons.dotblack : icons.dotwhitetwo} className='w-[13px] h-[13px] mt-2 rounded-full'/>
        <Text className='text-lg font-semibold ml-3'>Credit Card</Text>
      </View>
      <Image source={icons.iconcashout} className='my-auto'/>
    </TouchableOpacity>
    <Hr/>
    <BoldTitle title='Order Summary
    ' addStyle='w-11/12 my-2 font-bold text-xl mx-auto text-secondary'/>
    <View className='w-11/12 py-1 mx-auto border bg-secondary rounded-lg my-2 border-slate-300 '>
      <View className='px-2 py-3 w-11/12 mx-auto flex-row justify-between'>
        <View className='flex-row space-x-1'>
          <Text className='text-slate-200 font-semibold'>Subtotal </Text>
          <Text className='text-slate-400 font-semibold'>( 1 item )</Text>
         </View>
        <Text className='font-semibold text-slate-200'>EGP 150</Text>
      </View>
      <View className='px-2 border-slate-200 py-1 w-11/12 mx-auto flex-row justify-between'>
        <View className='flex-row'>
          <Text className='text-slate-200 font-semibold'>Shipping </Text>
         </View>
        <Text className={`font-semibold ${paymentCash?'text-red-500' : 'text-green-500'}`}>{ paymentCash ? 'EGP 10' : 'Free'}</Text>
      </View>
      <View className='my-2 w-10/12 bg-slate-200 h-[1px] mx-auto'/>
      <View className=' px-2 border-slate-200 border-t-0 py-2 w-11/12 mx-auto flex-row justify-between'>
        <View className='flex-row space-x-1'>
          <Text className='text-slate-200 font-bold text-[17px]'>Total </Text>
         </View>
        <Text className='font-bold text-slate-200 text-[17px] '>{ paymentCash ? 'EGP 160' : 'EGP 150'}</Text>
      </View>
    </View>
    <Hr/>
    <BoldTitle title='Review Your Order' addStyle='w-11/12 mt-3 font-bold text-xl mx-auto text-secondary'/>
    <ProductCart/>
      </ScrollView>
     </SafeAreaView>
  )
}

export default Checkout

