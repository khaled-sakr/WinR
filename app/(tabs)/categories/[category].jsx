import { TouchableOpacity, FlatList,ScrollView , Text, View } from 'react-native'
import React from 'react'
import { Link, router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeadTitle from '../../../components/HeadTitle';
// import TitleWithLine from '../../../components/TitleWithLine';
import SearchBar from '../../../components/SearchBar';
import { icons, images } from '../../../constants';
import SquareText from '../../../components/SquareText';
import ProductCurdWithDet from '../../../components/ProductCurdWithDet';

const scrolCategories=[{title:'T-shirt' , link:'t-shirt'},{title:'Shemiz' , link:'t-shirt'},{title:'Fashion' , link:'t-shirt'},{title:'25% OFF' , link:'t-shirt'}]
const Category = () => {
  const { category } = useLocalSearchParams();
  return (
    <>
    <ScrollView>
    <SafeAreaView>
  <HeadTitle srcIconLeft={icons.back} srcIconRight={icons.favourite} srcIconMiddle={icons.men}/>
  <SearchBar/>
  <FlatList className='w-11/12 mx-auto mt-4' data={scrolCategories} horizontal renderItem={({item})=>(
    <TouchableOpacity activeOpacity={0.7} onPress={()=>router.push(`/categories/${item.link}`)} className='mr-2'>
    <SquareText title={item.title}  addstyle='text-Font bg-secondary text-white h-[40px] w-[106px] rounded-[2px]'/>
    </TouchableOpacity>
  )}/>
    <View className='w-[88%] flex-row justify-between mx-auto mt-2'>
    <ProductCurdWithDet src={images.ProdCurdWithDet1}/>
    <ProductCurdWithDet src={images.ProdCurdWithDet2}/>
    </View>
    <View className='w-[88%] flex-row justify-between mx-auto mt-2'>
    <ProductCurdWithDet src={images.ProdCurdWithDet3}/>
    <ProductCurdWithDet src={images.ProdCurdWithDet4}/>
    </View>
    <View className='w-[88%] flex-row justify-between mx-auto mt-2'>
    <ProductCurdWithDet src={images.ProdCurdWithDet5}/>
    <ProductCurdWithDet src={images.ProdCurdWithDet6}/>
    </View>
    <View className='w-[88%] flex-row justify-between mx-auto mt-2'>
    <ProductCurdWithDet src={images.ProdCurdWithDet7}/>
    <ProductCurdWithDet src={images.ProdCurdWithDet8}/>
    </View>
      </SafeAreaView>
      </ScrollView>
      </>

  )
}

export default Category

