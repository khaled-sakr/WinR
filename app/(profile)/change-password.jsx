import { ScrollView, Text, View } from 'react-native'
import React from 'react'
import HeadTitle from '../../components/HeadTitle'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import InputForm from '../../components/InputForm'
import { router } from 'expo-router'

const ChangePassword = () => {
  return (
    <SafeAreaView>
    <ScrollView >
    <HeadTitle srcIconLeft={icons.back} srcIconMiddle={icons.winr} srcIconRight={icons.favourite}/>

    <InputForm
    finalInput 
    name='Password' placeholder='Enter Your Password'  title='Password' type='normal' size='full'  error='' 
     addViewStyle='mt-20' value='********'/>

     
    <InputForm
    finalInput 
    name='New Password' placeholder='Enter Your New Password'  title='New Password' type='normal' size='full'  error='' 
     addViewStyle='mt-5' />

     
    <InputForm
    finalInput 
    name='Confirm Password' placeholder='Confirm Your New Password'  title='Confirm Password' type='normal' size='full'  error='' 
     addViewStyle='mt-5' />
    
    <CustomButton 
    //  onPress={handleSubmit}    
      title='CONFIRM' size='large' type='finalButtoms' addStyle='mt-6' />
    <CustomButton 
    onPress={() => router.back()}
      title='Cancel' size='large' type='finalButtoms' addStyle='mt-6' cancel/>
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default ChangePassword

