import { TouchableOpacity ,ScrollView ,Text, View } from 'react-native'
import React from 'react'
import HeadTitle from '../../components/HeadTitle'
import InputForm from '../../components/InputForm'
import CustomButton from '../../components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { icons } from '../../constants'
import { router } from 'expo-router'

const Edit = () => {
  return (
    <SafeAreaView>
    <ScrollView >
    <HeadTitle srcIconLeft={icons.back} srcIconMiddle={icons.winr} srcIconRight={icons.favourite}/>
    
    <InputForm
    finalInput 
    name='first name' placeholder='Enter Your First Name'  title='First Name' type='normal' size='full'  error='' 
     addViewStyle='mt-5' value='khaled'/>

     
    <InputForm
    finalInput 
    name='last name' placeholder='Enter Your Last Name'  title='Last Name' type='normal' size='full'  error='' 
     addViewStyle='mt-5' value='sakr'/>


     
    <InputForm
    finalInput 
    name='Mobile Number' placeholder='Enter Your Mobile Number'  title='Mobile Number' type='normal' size='full'  error='' 
     addViewStyle='mt-5' value='+201028577310'/>

     
    <InputForm
    finalInput 
    name='Email' placeholder='Enter Your Email'  title='Email' type='normal' size='full'  error='' 
     addViewStyle='mt-5' value='******@gmail.com'/>

     
    <InputForm
    finalInput 
    name='Password' placeholder='Enter Your Password'  title='Password' type='normal' size='full'  error='' 
     addViewStyle='mt-5' value='********' disabled/>
     <View className='w-11/12 mx-auto my-2' >
        <TouchableOpacity onPress={()=>router.push('change-password')} activeOpacity={0.7} className='w-[38%]'><Text className='underline font-bold text-secondary '>Change Password</Text></TouchableOpacity>
        </View>
    
    <CustomButton 
    //  onPress={handleSubmit}
      title='CONFIRM' size='large' type='finalButtoms' addStyle='mt-6' />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Edit

