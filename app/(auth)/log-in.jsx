import {Image, Text, View ,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton'
import InputForm from '../../components/InputForm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { router } from 'expo-router'
import TitleWithLine from '../../components/TitleWithLine'

const defaultValues={
  email:'',
  password:''
}
const logIn = () => {
  const [form, setForm] = useState(defaultValues
  );
  const validate = () => {
    const newErrors = [];
    if (!form.email) newErrors.push("The email is required");
    if (!form.password) newErrors.push("The password is required");
    return newErrors;
  };
  const handleSubmit = () => {
    const validationErrors = validate();    
    if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    router.replace('/home')
    setErrors({});
  }}
    const [errors, setErrors] = useState([]);
    const handleChange = (i,value) => {
      setForm({ ...form, [i]: value });
    };
  return (
    <SafeAreaView className='w-full bg-white h-full'>
    <Text className='text-5xl text-Font text-center font-bold mb-12 mt-32'>Log In</Text>
    <View>
      <InputForm  handleChangeText={(value) => handleChange('email', value)} value={form.email} name='email' placeholder='Your email Adress'  title='Email Adress' type='normal' size='full'  error={errors?.includes("The email is required") ? "The email is required" : ''} addViewStyle='my-3'/>
    <InputForm  handleChangeText={(value) => handleChange('password', value)} value={form.password} name='password' placeholder='Your password'  title='Password' type='normal' size='full'  error={errors?.includes("The password is required") ? "The password is required" : ''} addViewStyle='mt-3 '/>
      </View>
   {errors?.includes("The password is required")  && <Text className='text-red-400 font-[800] text-xs text-center'>Something is wrong , Try another inputs</Text>  }
    <CustomButton onPress={handleSubmit} title='Log In' size='large' type='startButtoms' addStyle='mt-8'  />
    <View className='mt-2 mx-auto flex flex-row'>
          <Text className='text-sm font-[200]'>
            Don't have An Account?
          </Text>
          <TouchableOpacity onPress={()=>{router.replace('/sign-up')}}><Text className='text-sm text-secondary font-[600] underline'>
            Sign Up </Text>
              </TouchableOpacity>
    </View>
   <TitleWithLine title='OR' size='w-3/12' addStyle='font-bold'/>
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
    </SafeAreaView >
  )
}

export default logIn

