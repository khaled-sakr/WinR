import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCart from '../components/ProductCart'
import HeadTitle from '../components/HeadTitle'
import { icons } from '../constants'

const Favourite = () => {
  return (
    <SafeAreaView>
    <ScrollView>

    <HeadTitle srcIconLeft={icons.back} middleText='Favourite'/>
      <View className='mt-4 '>
      <ProductCart  favourite/>
      <ProductCart  favourite/>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Favourite

