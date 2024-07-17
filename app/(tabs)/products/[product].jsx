import { TouchableOpacity ,Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useLocalSearchParams } from 'expo-router';
import HeadTitle from '../../../components/HeadTitle';
import { icons, images } from '../../../constants';
import SearchBar from '../../../components/SearchBar';
import { useState } from 'react';
import FavIcon from '../../../components/FavIcon';
import BoldTitle from '../../../components/BoldTitle';
import ProductCurd from '../../../components/ProductCurd';

const Product = () => {
  const { product } = useLocalSearchParams();

  return (
    <ScrollView>
    <SafeAreaView >
      <View className='w-full h-32 bg-[#F2F4F7]  absolute bottom-0 '>
        {/* <View className='w-4/12 bg-red-300 h-full'><Text></Text></View> */}
      </View>
    <HeadTitle srcIconLeft={icons.back} srcIconRight={icons.favourite} srcIconMiddle={icons.winr}/>
    <SearchBar/>
    <Text className='w-11/12 text-lg font-bold text-stone-600 my-5 mx-auto'>T-shirt</Text>
   <View className='w-11/12 mx-auto relative'>
    <Image source={images.productImg} className='mx-auto'/>
   <FavIcon size='w-[45px] h-[45px] p-2.5'/>
   </View>
   <Text className='w-11/12 mx-auto font-bold text-Font text-xl pt-3  mt-10'>
    <Text className='text-stone-500 font-semibold text-xs'>EGP</Text>
    {'  '}150</Text>
    <Text className='font-bold text-green-500 text-lg pt-1 mx-auto w-11/12'>
    <Text className='text-stone-500 font-[300]  line-through'>300</Text>
    {'  '}35% OFF</Text>
    <Text className=' w-11/12 mt-1 mx-auto text-xs text-red-500 font-bold'>Low stock only 4 left</Text>
    <View className='w-11/12 mt-4 border-stone-400 border-[0.75px] px-3 py-2 rounded-3xl mx-auto'>
      <View className='mb-2'><Text className='font-bold text-font text-lg'>Size:</Text></View>
      <View className='flex-row justify-around'>
      <Text className='border-stone-400 border-[0.75px] px-2 rounded-sm '>S</Text>
      <Text className=' border-stone-400 border-[0.75px] px-2 rounded-sm '>M</Text>
      <Text className=' border-stone-400 border-[0.75px] px-2 rounded-sm '>L</Text>
      <Text className=' border-stone-400 border-[0.75px] px-2 rounded-sm '>XL</Text>
      <Text className=' border-stone-400 border-[0.75px] px-2 rounded-sm '>XXL</Text>
      </View>
    </View>
    <View className='bg-[#E0E0E0] w-full h-3 my-3'/>
    <View className='w-11/12 mx-auto space-y-3'>
      <Text className='text-slate-600 font-semibold text-lg'>Highlights</Text>
      <Text className='text-slate-500 ml-2'>
        • The go-to graphics you want in a super soft jersey you gotta feel to believe.
      </Text>
      <Text className='text-lg font-semibold text-slate-600'>
      Overview
      </Text>
      <Text className='text-slate-500 ml-2'>016-MENS GRAPHICS</Text>
    </View>
    <View className='bg-[#E0E0E0] w-full h-3 my-3'/>

      <View className='w-11/12 mx-auto space-y-3 mt-2 mb-4'>
        <Text className='text-slate-600  text-lg'>User Reviews</Text>
        <View className='h-14 flex-row '>
          <Text className='w-4/12 h-full text-4xl text-center pt-2'>4.4</Text>
          <View className='justify-center' >

          <View className='flex space-x-1 flex-row'>
            <Image source={icons.star} className='w-[20px] h-[20px]'/>
            <Image source={icons.star} className='w-[20px] h-[20px]'/>
            <Image source={icons.star} className='w-[20px] h-[20px]'/>
            <Image source={icons.star} className='w-[20px] h-[20px]'/>
            <Image source={icons.starHalf} className='w-[20px] h-[20px]' />
          </View>
          <Text className='text-slate-500'>Based on 49 ratings</Text>
          </View>
        </View>
        <Text className='text-slate-600  font-[400] text-sm'>There are 49 customers raitings and 1 customer review</Text>
      </View>
    <View className='bg-[#E0E0E0] w-full h-3 my-3'/>
    <BoldTitle title='Your Common Brands' addStyle='w-11/12 my-4 mx-auto'/>
    <View className='w-11/12 mx-auto'>
    <ProductCurd src={images.menCurd1} title='PRINTED SHIRT' price={300} discount={20}/>
    <ProductCurd src={images.prodAddImg} title='SHEMIZ' price={500} discount={20}/>
    </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Product

