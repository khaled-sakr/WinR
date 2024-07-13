import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import { icons, images } from '../../constants'
import SearchBar from '../../components/SearchBar'
import CustomIcon from '../../components/CustomIcon'
import {FlatList, Image, ScrollView, Text, View } from 'react-native'
import ScrolImg from '../../components/ScrolImg'
import { Link } from 'expo-router'
import SquareText from '../../components/SquareText'
import FeatureScrol from '../../components/FeatureScrol'
const ImgOfScrol=[{
  title:'Fashion Men',
  src:images.scrolImg1
},{
  title:'New Collection',
  src:images.scrolImg2
},{
  title:'Fashion Women',
  src:images.scrolImg3
}]
const FeatureImg=[{
  src:images.featureImg1,
  title:'Wool blouse',
  price:200
},
{
  src:images.featureImg2,
  title:'Classic Collection',
  price:500
},{
  src:images.featureImg1,
  title:'Wool blouse',
  price:500
},{
  src:images.featureImg3,
  title:'Kraft',
  price:100
},{
  src:images.featureImg4,
  title:'Bloude',
  price:150
},
]
const Home = () => {
  return (
    <ScrollView >
      <SafeAreaView>
    <HeadTitle srcIconLeft={icons.chat} srcIconRight={icons.favourite} srcIconMiddle={icons.winr}/>
    <SearchBar/>
    <View className='w-11/12 h-fit mt-6 flex-row flex justify-between mx-auto '>
     <Link href='/men'><CustomIcon srcImage={images.men} title='men'/></Link>
      <Link href='/women'><CustomIcon srcImage={images.women} title='women'/></Link>
      <Link href='/children'><CustomIcon srcImage={images.children} title='children'/></Link>
    </View>
    <View className=' w-11/12 mx-auto mt-8 rounded-xl relative'>
    <FlatList 
    data={ImgOfScrol}
     horizontal 
     pagingEnabled
     renderItem={({item})=>
     <ScrolImg src={item.src} title={item.title}/>
    }/>
    </View>
    <Text className='mx-auto text-2xl font-bold mt-6 w-11/12 text-secondary'>Your Common Brands</Text>
    <View className='w-11/12 mx-auto mt-6 flex-row justify-between '>
      <SquareText title='NIKE' addstyle='text-Font text-third bg-[#DFDFDF] '/>
      <SquareText title='ZARA' addstyle='text-Font text-third bg-[#DFDFDF] '/>
      <SquareText title='H&M' addstyle='text-Font text-third bg-[#DFDFDF] '/>
    </View>
    <View className='w-11/12 mx-auto mt-4 flex-row justify-between '>
      <SquareText title='BERSHKA' addstyle='text-Font text-third bg-[#DFDFDF] '/>
      <SquareText title='ADIDAS' addstyle='text-Font text-third bg-[#DFDFDF] '/>
      <SquareText title='GUCCA' addstyle='text-Font text-third bg-[#DFDFDF] '/>
    </View>

    <Text className='mx-auto text-2xl font-bold my-8 w-11/12 text-secondary'>Feature Products</Text>

    <View className='w-11/12 mx-auto'>
    <FlatList 
    data={FeatureImg}
     horizontal 
     pagingEnabled={false}
     renderItem={({item})=>
     <FeatureScrol src={item.src} title={item.title} price={item.price}/>
    }/>
    </View>
    <Text className='mx-auto text-2xl font-bold mt-8 mb-2 w-11/12 text-secondary'>Sells</Text>
<View className='w-11/12 mx-auto bg-red-300 relative rounded-2xl mb-2'>
  <Image source={images.sells} className='w-full'/>
  <Text className='text-6xl font-semibold text-white absolute top-16 right-5'>20% TO 70%</Text>
</View>
   </SafeAreaView>
   </ScrollView>
  )
}

export default Home
