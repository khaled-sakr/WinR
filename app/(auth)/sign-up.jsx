import {  Image, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import InputForm from '../../components/InputForm'
import CustomButton from '../../components/CustomButton'
import { images } from '../../constants'
import { Link } from 'expo-router'
import { useState } from 'react'
const defaultValues={   firstname: "",
lastname: "",
email: "",
password: "",
confirmPasssword: "",
}
const signUp = () => {
  const [form, setForm] = useState(defaultValues
);
  const [errors, setErrors] = useState([]);
  const handleChange = (i,value) => {
    setForm({ ...form, [i]: value });
  };
  const validate = () => {
    const newErrors = [];
    if (!form.firstname) newErrors.push("The first name is required");
    if (!form.lastname) newErrors.push("The last name is required");
    if (!form.email) newErrors.push("The email is required");
    if (!form.password) newErrors.push("The password is required");
    if (!form.confirmPasssword) newErrors.push("The confirm is required");
    return newErrors;
  };
  const handleSubmit = () => {
    const validationErrors = validate();    
    if (validationErrors.length !== 0) {
    setErrors(validationErrors);
  } else {
    setErrors({});
    console.log('done withour errors')
  }}
  console.log(form.firstname)
  console.log(errors)
  return (
    <SafeAreaView className='w-full bg-white h-full'>
      <Text className='text-5xl text-Font text-center font-bold my-20'>Sign Up</Text>
      <View className='flex flex-row justify-between w-11/12 mx-auto'>
        <InputForm handleChangeText={(value) => handleChange('firstname', value)} value={form.firstname} name='firstname' placeholder='Khaled'  title='First Name' type='normal' size='half'  />
        
     {errors.includes("The first name is required") && (<Text className='text-xs text-red-500 font-semibold px-2'>fill this field</Text>)}
      
        <InputForm handleChangeText={(value) => handleChange('lastname', value)} value={form.lastname} name='lastname' placeholder='Sakr' title='Last Name' type='normal' size='half'   error={errors.includes("The last name is required") ? "The last name is required" : ''} />
        </View>
      <InputForm handleChangeText={(value) => handleChange('email', value)} value={form.email} name='email' title='Email Address' placeholder='khaledsakr12345@gmail.com' error={errors.includes("The email is required") ? "The email is required" : ''}  type='normal' size='full' addclass=''  />
      <InputForm handleChangeText={(value) => handleChange('password', value)} value={form.password} name='password' title='Password' placeholder='**********' type='normal' size='full' addclass='' error={errors.includes("The password is required") ? "The password is required" : ''}  />
      <InputForm handleChangeText={(value) => handleChange('confirmPasssword', value)} value={form.confirmPasssword} name='confirmPassword' title='Confirm Password'  placeholder='**********' type='normal' size='full' addclass='' error={errors.includes("The confirm is required") ? "The confirm is required" : ''}  />
      <Text className='mx-5 text-red-400 font-semibold h-full'>fill al field</Text>
      <CustomButton handlePress={handleSubmit} title='Create Account' size='large' type='startButtoms'/>
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


