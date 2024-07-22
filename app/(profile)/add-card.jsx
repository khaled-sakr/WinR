import { Image, ScrollView,  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import { icons } from '../../constants'
import BoldTitle from '../../components/BoldTitle'
import InputForm from '../../components/InputForm'
import CustomButton from '../../components/CustomButton'
import ValidCard from '../../components/ValidCard'

const Addcard = () => {
  return (
    <SafeAreaView>
    <ScrollView>
    <View className='relative h-screen'>
    <HeadTitle srcIconMiddle={icons.winr}  titleRight='Cancel' middle/>
    <BoldTitle title='Add a new card' addStyle='text-lg w-11/12 mx-auto'/>
    <Text className='font-semibold text-slate-400 w-11/12 mx-auto mt-2'>we accept</Text>
    <ValidCard/>
    <InputForm
    finalInput 
      name='Card Number' placeholder='Enter Card Number'  title='Card Number' type='normal' size='full'  error='' 
     addViewStyle='mt-5 '/>
     <View className='flex flex-row justify-between w-11/12 mx-auto'>
    <InputForm
    finalInput 
      name='Expiry' placeholder='Enter Expiry'  title='Expiry' type='normal' size='half'  error='' 
     addViewStyle='mt-5 '/>
     <InputForm
     finalInput 
       name='CVV' placeholder='Secure Code'  title='CVV' type='normal' size='half'  error='' 
      addViewStyle='mt-5 '/>
     </View>
     <Text className='text-base w-11/12 mx-auto font-semibold mt-4'>Remember this card</Text>
     <Text className='text-xs text-slate-400 w-11/12 mx-auto font-semibold'>
BSB STORE will securely store this card for a faster payment experience. Your CV number will not be stored.</Text>
     <CustomButton 
    //  onPress={handleSubmit}
      title='ADD MY CARD' size='large' type='finalButtoms' addStyle='mt-16 absolute bottom-4 left-[2.5%]' />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Addcard

const styles = StyleSheet.create({})