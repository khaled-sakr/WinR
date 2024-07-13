import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const CustomButton = ({title , onPress, size , type, SignUpHint ,addStyle}) => {
  return (
<>
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} className={`${type ==='startButtoms'?'w-7/12': 'w-[95%]'} mx-auto ${size === 'large'?'h-[57px]':'h-[41px]'} bg-secondary font-semibold rounded-[10px] items-center flex justify-center ${addStyle}`}>
    <Text className='text-white text-lg'>
    {title}
    </Text>
    </TouchableOpacity>
    { SignUpHint && <View className='mt-2 mx-auto flex flex-row'>
          <Text className='text-sm font-[200]'>
            Don't have An Account?
          </Text>
          <TouchableOpacity onPress={()=>{router.replace('/sign-up')}}><Text className='text-sm text-secondary font-[600] underline'>
            Sign Up </Text>
              </TouchableOpacity>
            {/* <Link href='/sign-up' className='text-sm text-secondary font-[600] underline'>{' '}Sign Up</Link> */}
    </View>}
    </>
  )
}

export default CustomButton
