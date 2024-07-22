import { TouchableOpacity ,Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router, useLocalSearchParams } from 'expo-router';
import HeadTitle from '../../../components/HeadTitle';
import { icons, images } from '../../../constants';
import SearchBar from '../../../components/SearchBar';
import FavIcon from '../../../components/FavIcon';
import BoldTitle from '../../../components/BoldTitle';
import ProductCurd from '../../../components/ProductCurd';
import DropDown from '../../../components/DropDown';
import { useState } from 'react';
import ButtonSize from '../../../components/ButtonSize';
import { FlatList } from 'react-native';
import ImageProduct from '../../../components/ImageProduct';
import Hr from '../../../components/Hr';

const Product = () => {
  const { product } = useLocalSearchParams();
  const [value , setValue] = useState()
  const [size , setSize] = useState('M')
  const [prodNumImg , setprodNumImg] = useState(0)
  const handleScroll = (event) => {
    setprodNumImg(event.nativeEvent.contentOffset.x);
  };
  const flatListRef = useRef(null);
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index: index });
  };
  console.log(prodNumImg)
 const  listData= [{src : images.productImg , id : 1} , {src : images.productImgfront , id : 2} , {src : images.productImgback , id : 3}]
  return (
<View>
      <View className='bg-[#F2F4F7] z-10 flex-row justify-between px-6 py-3 absolute bottom-0 h-[70px] w-full rounded-t-2xl border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-slate-300'>
          <View className='relative mx-auto border rounded-md border-slate-400 px-4'>
          <Text className='text-slate-400 text-center'>
            QTY
          </Text>
          <DropDown setValue={setValue} addStyle='absolute top-1'/>
          </View>
          <View className='w-7/12'>    
        <TouchableOpacity activeOpacity={0.7} onPress={()=>router.push('/cart')} className={`w-11/12 mx-auto shadow-2xl  bg-secondary font-semibold rounded-md flex justify-center`}>
          <Text className='text-center text-white text-lg py-2 '>
          Add To Cart
          </Text>
          </TouchableOpacity>
          </View>
        </View>
    <SafeAreaView>
    <ScrollView className='relative' style={{ marginBottom: 70 }}>
    <HeadTitle srcIconLeft={icons.back} srcIconRight={icons.favourite} srcIconMiddle={icons.winr}/>
    <SearchBar/>
    <Text className='w-11/12 text-lg font-bold text-stone-600 my-5 mx-auto'>T-shirt</Text>
   <View className='w-11/12 mx-auto relative'>
    <FlatList 
    ref={flatListRef}
     data={listData}
     horizontal 
     showsHorizontalScrollIndicator={false}
     pagingEnabled
     keyExtractor={(item, index) => index.toString()}
     onScroll={handleScroll}
     renderItem={({item})=>
     <ImageProduct src={item.src} title={item.title}/>
    }/>
    <View className='w-[15%] mx-auto flex-row justify-between mt-6'>
      <TouchableOpacity activeOpacity={0.9} onPress={()=>scrollToIndex(0)}>
        <Image source={prodNumImg >= 0 && prodNumImg < 200  ? icons.dotblack : icons.dotwhite} className='rounded-full'/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={()=>scrollToIndex(1)}>
      <Image source={prodNumImg > 200 && prodNumImg < 400 ? icons.dotblack : icons.dotwhite} className='rounded-full'/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={()=>scrollToIndex(2)}>
      <Image source={prodNumImg > 400 ? icons.dotblack : icons.dotwhite} className='rounded-full'/>
        </TouchableOpacity>
    </View>
   <FavIcon size='w-[45px] h-[45px] p-2.5'/>
   </View>
   <Text className='w-11/12 mx-auto font-bold text-Font text-xl pt-3 mt-5'>
    <Text className='text-stone-500 font-semibold text-xs'>EGP</Text>
    {'  '}150</Text>
    <Text className='font-bold text-green-500 text-lg pt-1 mx-auto w-11/12'>
    <Text className='text-stone-500 font-[300]  line-through'>300</Text>
    {'  '}35% OFF</Text>
    <Text className=' w-11/12 mt-1 mx-auto text-xs text-red-500 font-bold'>Low stock only 4 left</Text>
    <View className='w-11/12 flex-row mt-4 border-stone-400 border-[0.75px] px-3 py-2 rounded-xl mx-auto'>
      <View className='mb-2'><Text className='font-bold text-font text-lg mr-4 mt-0.5'>Size:</Text></View>
      <View className='flex-row justify-between w-10/12'>
     <ButtonSize setSize={setSize} size={size}  currentSize='S'/>
     <ButtonSize setSize={setSize} size={size}  currentSize='M'/>
     <ButtonSize setSize={setSize} size={size}  currentSize='L'/>
     <ButtonSize setSize={setSize} size={size}  currentSize='XL'/>
     <ButtonSize setSize={setSize} size={size} currentSize='XXL' />
      </View>
    </View>
   <Hr/>
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
    <Hr/>

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
      <Hr/>
    <BoldTitle title='Your Common Brands' addStyle='w-11/12 my-4 mx-auto'/>
    <View className='w-11/12 mx-auto'>
    <ProductCurd src={images.menCurd1} title='PRINTED SHIRT' price={300} discount={20}/>
    <ProductCurd src={images.prodAddImg} title='SHEMIZ' price={500} discount={20}/>
    </View>
    {/* <Grid text='hello world' /> */}
    </ScrollView>
    </SafeAreaView>
</View>
  
  )
}


export default Product


// const styles = StyleSheet.create({
  // footer: {
  //   display:'none',
  //   flexDirection: 'row',
  //   justifyContent: 'space-around',
  //   alignItems: 'center',
  //   backgroundColor: '#f8f8f8',
  //   height: 180,
  //   borderTopWidth: 1,
  //   borderTopColor: '#ddd',
  // },
  // button: {
  //   alignItems: 'center',
  // },
  // buttonText: {
  //   fontSize: 16,
  //   color: '#333',
  // },
// });