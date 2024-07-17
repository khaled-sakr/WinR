import { FlatList, ScrollView , Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TitleWithLine from '../../../components/TitleWithLine'
import SearchBar from '../../../components/SearchBar'
import HeadTitle from '../../../components/HeadTitle'
import CustomIcon from '../../../components/CustomIcon'
import { icons, images } from '../../../constants'
import BoldTitle from '../../../components/BoldTitle'
import SquareText from '../../../components/SquareText'
import FlatHorScrol from '../../../components/FlatHorScrol'
import ProductCurd from '../../../components/ProductCurd'

const womenFlat=[
  {
  src:images.scrolHorWomen1,
  title:'T-Shirts',
  price:150
  }
  ,
  {
  src:images.scrolHorWomen2,
  title:'Bluoses',
  price:250
  }
  ,
  {
  src:images.scrolHorWomen3,
  title:'Coats',
  price:250
  }
  ,
  {
  src:images.scrolHorWomen4,
  title:'Dress',
  price:400
  }
 ,{
  src:images.scrolHorWomen5,
  title:'Suits',
  price:300
  }
]

const womenPro=[{
  src:images.scrolWomenMain1,
  title:'T-Shirt',
  price:150
},
{
  src:images.scrolWomenMain2,
  title:'Shemiz',
  price:250
},{
  src:images.scrolWomenMain3,
  title:'Polo T-Shirt',
  price:250
},{
  src:images.scrolWomenMain4,
  title:'Casual',
  price:300
}
]
const Women = () => {
  return (
    <ScrollView >
    <SafeAreaView>
    <HeadTitle srcIconLeft={icons.chat} srcIconRight={icons.favourite} srcIconMiddle={icons.women}/>
  <SearchBar/>
  <TitleWithLine title='SHOP ALL CATEGORIES' addStyle='font-[300]' size='w-full'/>

<FlatList className='mt-6 w-11/12 mx-auto'
     data={womenFlat}
     horizontal
     showsHorizontalScrollIndicator={false}
     keyExtractor={item => item.src}
     renderItem={({item})=>
     <CustomIcon blur={5} addStyleImage=' text-center h-[64px] w-[64px] ' src={item.src} title={item.title} price={item.price} addStyleText='text-xs' addStyleView='h-[92px]' /> 
    }
      />

<View className='w-11/12 mx-auto flex flex-row justify-between mt-8'>
    <BoldTitle title='Curated for you'  addstyle=''/>
    <SquareText title='SHOP NOW' addstyle='text-Font text-third bg-secondary text-white h-[40px] w-[106px] rounded-[2px]'/>
  </View>
  <FlatList 
  className='mt-6 w-11/12 mx-auto'
    data={womenPro}
     horizontal 
     showsHorizontalScrollIndicator={false}
     keyExtractor={item => item.src}
     renderItem={({item})=>
     <FlatHorScrol blur={5} src={item.src} title={item.title} price={item.price}/>
    }/>

<TitleWithLine title='SHOP ALL' addStyle='font-[300]' size='w-full'/>
    <View className='w-11/12 mx-auto'>
      <ProductCurd blur={5} src={images.imgWomenCurd1} title='SHIRT' price={420} discount={20}/>
    <ProductCurd blur={5} src={images.imgWomenCurd2} title='SHIRT AND COAT' price={800} discount={20}/>
    <ProductCurd blur={5} src={images.imgWomenCurd3} title='SHEMIZ' price={600} discount={25}/>
      </View>

    </SafeAreaView>
    </ScrollView>
  )
}

export default Women

