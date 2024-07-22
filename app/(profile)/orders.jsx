import { Image, ScrollView ,Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import HeadTitle from '../../components/HeadTitle'
import ProductOrders from '../../components/productOrders'
import { router } from 'expo-router'

const Orders = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <HeadTitle srcIconLeft={icons.back} middleText='Orders'/>
    <View>
    <View className='flex-row mt-6 w-11/12 mx-auto justify-between'>
    <View className='w-6/12 '>
      <Text className='text-lg font-semibold'>Orders ***************</Text>
      <Text className='font-[400] text-slate-500'>Place On Aug 22, 2023</Text>
    </View>
    <TouchableOpacity onPress={()=>router.push(`/orders/${1}`)} className='w-[30%] my-auto flex-row'>
      <Text className='text-base font-semibold text-[#2E1CFF]'>View Details</Text>
      <Image source={icons.rightarrow} className='my-auto  ml-2'/>
    </TouchableOpacity>
    </View>
    <ProductOrders title='CANCELED'/>
    </View>
    <View>
    <View className='flex-row mt-6 w-11/12 mx-auto justify-between'>
    <View className='w-6/12 '>
      <Text className='text-lg font-semibold'>Orders ***************</Text>
      <Text className='font-[400] text-slate-500'>Place On Aug 22, 2023</Text>
    </View>
    <TouchableOpacity onPress={()=>router.push(`/orders/${3}`)} className='w-[30%] my-auto flex-row'>
      <Text className='text-base font-semibold text-[#2E1CFF]'>View Details</Text>
      <Image source={icons.rightarrow} className='my-auto  ml-2'/>
    </TouchableOpacity>
    </View>
    <ProductOrders title='SENT ARRIVED'/>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Orders
