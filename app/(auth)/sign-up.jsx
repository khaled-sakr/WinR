import {  Image, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../../components/InputForm'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <SafeAreaView className='w-full bg-white h-full'>
      <Text className='text-5xl text-Font text-center font-bold my-20'>Sign Up</Text>
      <View className='flex flex-row justify-between w-11/12 mx-auto'>
        <InputForm title='First Name' type='normal' size='half'  error='' validation=''/>
        <InputForm title='Last Name' type='normal' size='half' error='' validation=''/>
        </View>
      <InputForm title='Email Address' type='normal' size='full' addclass='' error='' validation=''/>
      <InputForm title='Password' type='normal' size='full' addclass='' error='' validation=''/>
      <InputForm title='Confirm Password' type='normal' size='full' addclass='' error='' validation=''/>
      <CustomButton title='Create Account' size='large' type='startButtoms'/>
    <View className='flex relative mx-auto flex-row my-4'>

      <View className=' h-[2px] bg-slate-400 w-1/12 mt-4' />
    <Text className='text-center text-Font text-xl w-1/12'>OR</Text>
  <View className='h-[2px] bg-slate-400 w-1/12 mt-4'/> 
    </View>
          <View className='flex flex-row w-8/12 mx-auto mt-3 justify-between'>
    <View className='border border-slate-300 rounded-full p-3'>
      <Image source={images.facebook} className=''/>
    </View>
    <View  className='border border-slate-300 rounded-full p-3'>
      <Image source={images.twitter} />
    </View>
    <View  className='border border-slate-300  rounded-full p-3'>
      <Image source={images.google}/>
    </View>
          </View>

<View className='mx-auto mt-12 flex flex-row'>

          <Text className='text-lg font-[200]'>
            Already have account?
          </Text>

            <Link href='/log-in' className='text-lg text-secondary font-[600] underline'>log in</Link>
</View>
    </SafeAreaView>
  )
}

export default signUp


