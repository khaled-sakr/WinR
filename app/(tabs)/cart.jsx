import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import { icons, images } from '../../constants'
import SearchBar from '../../components/SearchBar'
import DropDown from '../../components/DropDown'
import { FlatList } from 'react-native'
import FlatHorScrol from '../../components/FlatHorScrol'
import BoldTitle from '../../components/BoldTitle'
import { router } from 'expo-router'
import Hr from '../../components/Hr'
import ProductCart from '../../components/ProductCart'
import Dues from '../../components/Dues'

const menPro=[
{
  src:images.menPro2,
  title:'Shemiz',
  price:250
},{
  src:images.menPro3,
  title:'Polo T-Shirt',
  price:250
},{
  src:images.menPro4,
  title:'Casual',
  price:300
}
]

const Cart = () => {
  const [value , setValue] = useState()
  return (
    <View>
      <View className='bg-[#F2F4F7] z-10 justify-between px-6 pt-2.5 absolute bottom-0 h-[100px] w-full rounded-t-2xl border-t-[1px] border-r-[0.5px] border-l-[0.5px] border-slate-300'>
        <View className='h-[30px] items-center flex-row justify-between'>
          <Text className='text-lg text-slate-400 font-semibold'>1 Item</Text>
          <Text className='text-lg text-slate-700 font-semibold'>EGP 150</Text>
        </View>  
        <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/checkout')} className={`h-[50px] px-4 justify-between flex-row w-11/12 mx-auto shadow-2xl  bg-secondary font-semibold rounded-md`}>
          <Text className='text-center text-white text-lg py-3 mx-auto'>
          CHECKOUT
          </Text>
          <View className='bg-white h-6 w-6 my-auto rounded-[4px]'>
            <Image source={icons.arrowcheck} className='mx-1 mt-1.5' />
          </View>
          </TouchableOpacity>
        </View>
    <SafeAreaView>
    <ScrollView className='mb-[100px]'>
    <HeadTitle titleLeft={`1 item`} srcIconRight={icons.favourite} srcIconMiddle={icons.winr}/>
    <SearchBar/>
    <>
      <ProductCart/>
      <View className='relative flex-row mt-3 w-11/12 mx-auto justify-between bg-red- '>
        <View className='w-5/12  flex-row'>
        <View className='w-5/12  border-[0.75px] border-slate-400 rounded-md relative'>
          <DropDown setValue={setValue} addStyle='-top-2 absolute'/>
        </View>
        <TouchableOpacity activeOpacity={0.5} className='rounded-md w-8/12 ml-2 py-2 flex-row border-[0.75px] border-slate-400 px-3'>
          <Image source={icons.remove}/>
          <Text className='text-slate-500 '>Remove</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.5} className='w-4/12 h-full rounded-md ml-2 py-2 flex-row border-[0.75px] border-slate-400 px-3'>
        <Image source={icons.favourite} className='w-[16px] h-[14px] mt-1 mr-2'/>
          <Text className='text-slate-500 text-xs mt-[0.75px]'>Move To Fav</Text>
        </TouchableOpacity> 
     </View> 
     </>
    <Hr/>
     <BoldTitle title='We think you might like these' addStyle='w-11/12 mt-2 text-base mx-auto  text-secondary'/>
     <FlatList 
     className='mt-3 w-11/12 mx-auto'
     data={menPro}
     horizontal 
     showsHorizontalScrollIndicator={false}
     keyExtractor={item => item.src}
     renderItem={({item})=>
     <FlatHorScrol src={item.src} title={item.title} price={item.price}/>
    }/>
    <Hr/>
    <Dues/>
    </ScrollView>
    </SafeAreaView>
    </View> 
  )
}

export default Cart

