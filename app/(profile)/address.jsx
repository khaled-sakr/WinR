import { TouchableOpacity ,ScrollView, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import InputForm from '../../components/InputForm'
import { icons, images } from '../../constants'
import BoldTitle from '../../components/BoldTitle'
import { useState } from 'react'
import CustomButton from '../../components/CustomButton'

const Address = () => {
  const [ addressLabel , setAddressLabel ] = useState(false)
  return (
    <SafeAreaView >
    <ScrollView>
    <View className='relative h-screen'>
    <HeadTitle srcIconMiddle={icons.winr}  titleRight='Cancel' middle/>
    <View className='w-11/12 mt-3 mx-auto justify-between flex-row'>
      <Text className='text-lg font-bold mt-2'>
      Location Infromation
      </Text>
      <Image source={images.address} className=''/>
    </View>
    <InputForm
    finalInput 
      name='password' placeholder='Enter Your additionAddress'  title='Addition Address Details' type='normal' size='full'  error='' 
     addViewStyle='mt-3 '/>
     <BoldTitle title='Personal Information' addStyle='text-lg w-11/12 mx-auto mt-5 text-slate-400'/>
    <InputForm
    finalInput 
    name='mobile' placeholder='Enter Your Mobile Number'  title='Mobile Number' type='normal' size='full'  error='' 
     addViewStyle='mt-5 '/>
    <InputForm
    finalInput 
      name='firstname' placeholder='Enter Your First Name'  title='Enter Your First Name' type='normal' size='full'  error='' 
     addViewStyle='mt-5 '/>
    <InputForm
    finalInput 
      name='lastname' placeholder='Enter Your Last Name'  title='Enter Your Last Name' type='normal' size='full'  error='' 
     addViewStyle='my-5 '/>
     <Text className='w-11/12 mx-auto text-[17px] my-4'>Address Label ( Option )</Text>
     <View className='w-11/12 flex-row mx-auto'>
      <TouchableOpacity onPress={()=>setAddressLabel('home')} className='w-3/12 '>
        <Text className={`px-4 py-1.5  ${addressLabel==='home' ? 'bg-secondary text-white' : 'border-slate-300 text-slate-500 border'}  font-semibold rounded-2xl h-8 m-auto`} >Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setAddressLabel('work')} className='w-3/12 '>
      <Text className={`px-4 py-1.5  ${addressLabel==='work' ? 'bg-secondary text-white' : 'border-slate-300 text-slate-500 border'}  font-semibold rounded-2xl h-8 m-auto`}>Work</Text>
      </TouchableOpacity>
     </View>
     <CustomButton 
    //  onPress={handleSubmit}
      title='SAVE ADDRESS' size='large' type='finalButtoms' addStyle='mt-16 absolute bottom-4 left-[2.5%]' />
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default Address