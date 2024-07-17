import { ScrollView, View, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../../components/HeadTitle'
import { icons, images } from '../../../constants'
import SearchBar from '../../../components/SearchBar'
import CustomIcon from '../../../components/CustomIcon'
import TitleWithLine from '../../../components/TitleWithLine'
import { Link } from 'expo-router'
import BoldTitle from '../../../components/BoldTitle'
import SquareText from '../../../components/SquareText'
import FlatHorScrol from '../../../components/FlatHorScrol'
import ProductCurd from '../../../components/ProductCurd'

const menPro=[{
  src:images.menPro1,
  title:'T-Shirt',
  price:150
},
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

const Men = () => {
  return (
    <ScrollView >
    <SafeAreaView>
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
  <View className='w-11/12 mx-auto flex flex-row justify-between mt-8'>
    <BoldTitle title='Curated for you'  addstyle=''/>
    <SquareText title='SHOP NOW' addstyle='text-Font text-third bg-secondary text-white h-[40px] w-[106px] rounded-[2px]'/>
  </View>
  <FlatList 
  className='mt-6 w-11/12 mx-auto'
    data={menPro}
     horizontal 
     showsHorizontalScrollIndicator={false}
     keyExtractor={item => item.src}
     renderItem={({item})=>
     <FlatHorScrol src={item.src} title={item.title} price={item.price}/>
    }/>

  <TitleWithLine title='SHOP ALL' addStyle='font-[300]' size='w-full'/>
    <View className='w-11/12 mx-auto'>
      <ProductCurd src={images.menCurd1} title='PRINTED SHIRT' price={300} discount={20}/>
    <ProductCurd src={images.menCurd2} title='SHEMIZ' price={500} discount={20}/>
      </View>
    </SafeAreaView>
    </ScrollView>
  )
}

export default Men

