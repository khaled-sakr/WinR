import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryCurd from '../../components/CategoryCurd'
import HeadTitle from '../../components/HeadTitle'
import SearchBar from '../../components/SearchBar'
import { icons, images } from '../../constants'

const CategoriesStation = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <HeadTitle  srcIconRight={icons.favourite} srcIconMiddle={icons.men}/>
  <SearchBar/>
      <CategoryCurd src={images.mencategory}/>
      <CategoryCurd src={images.womencategory}/>
      <CategoryCurd src={images.childrencategory}/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default CategoriesStation

