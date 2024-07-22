import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeadTitle from '../../components/HeadTitle';
import ProductCart from '../../components/ProductCart';
import { icons } from '../../constants';
import Hr from '../../components/Hr';
import BoldTitle from '../../components/BoldTitle';
import Dues from '../../components/Dues';

const Order = () => {
    const { order } = useLocalSearchParams();
  return (
    <SafeAreaView>
    <ScrollView>
    <HeadTitle srcIconLeft={icons.back} middleText='Orders'/>
    <View className='flex-row mt-6 w-11/12 mx-auto justify-between'>
    <View className='w-6/12 '>
      <Text className='text-lg font-semibold'>Orders ***************</Text>
      <Text className='font-[400] text-slate-500'>Place On Aug 22, 2023</Text>
    </View>
    </View>
    <Text className={`text-base w-11/12 my-4 mx-auto ${order === '1' ? 'text-red-500':' text-green-500'} font-semibold`}>{order === '1' ? 'CANCELED' : 'SENT ARRIVED'}</Text>
    <ProductCart overlay={order === '1'}/>
    <Hr/>
    <BoldTitle title='Payment Method ' addStyle='w-11/12 mx-auto'/>
    <Text></Text>
    <View className='flex-row w-11/12 mx-auto'>
        <Image source={icons.iconcard} className='h-[20px] w-[30px] mt-[3px]' resizeMode='contain'/>
        <Text className='text-stone-500 text-base font-semibold ml-1'>Credit Card</Text>
    </View>
    
    <View className='flex-row w-11/12 my-4 mx-auto'>
        <Image source={icons.payment1} className='h-[20px] w-[30px] mt-[3px]' resizeMode='contain'/>
        <Text className='text-stone-500 text-base font-semibold ml-3 tracking-[6px]'>1111
        </Text>
        <Text className='text-stone-500 text-base font-semibold mt-[3px]  tracking-[6px]'>**** **** ****</Text>
    </View>
    <Hr/>
    <View className='flex-row justify-between w-11/12 mx-auto'>
        <BoldTitle title='Order Summary'/>
        <Text> 1 item</Text>
    </View>
    <Dues/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Order 