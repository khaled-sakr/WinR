import { ScrollView,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleWithLine from '../../../components/TitleWithLine'
import { Link } from 'expo-router'
import CustomIcon from '../../../components/CustomIcon'
import { icons, images } from '../../../constants'
import HeadTitle from '../../../components/HeadTitle'
import SearchBar from '../../../components/SearchBar'
import ProductCurdWithDet from '../../../components/ProductCurdWithDet'

const Children = () => {
  return (
    <SafeAreaView>
    <ScrollView >
      <HeadTitle srcIconLeft={icons.chat} srcIconRight={icons.favourite} srcIconMiddle={icons.men}/>
      <SearchBar/>
      <TitleWithLine title='SHOP ALL CATEGORIES' addStyle='font-[300]' size='w-full'/>
      <View className='w-11/12 h-fit mt-4 flex-row flex justify-between mx-auto '>
      <Link href='/categories/t-shirt'><CustomIcon src={images.tshirt} title='t-shirt'/></Link>
      <Link href='/categories/shirt'><CustomIcon src={images.shirt} title='shirt'/></Link>
      <Link href='/categories/sweat-shirt'><CustomIcon src={images.sweatshirt} title='sweat shirt'/></Link>
      </View>
      <View className='w-11/12 h-fit mt-2 flex-row flex justify-between mx-auto '>
      <Link href='/categories/Fashion'><CustomIcon src={images.fashion} title='Fashion'/></Link>
      <Link href='/categories/Sport'><CustomIcon src={images.sport} title='Sport'/></Link>
      <Link href='/categories/Swim-Wear'><CustomIcon src={images.swimming} title='Swim Wear'/></Link>
      </View>
      <TitleWithLine title='SHOP ALL' addStyle='font-[300]' size='w-full'/>
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default Children

const styles = StyleSheet.create({})