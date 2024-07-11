import { View, Image, ImageBackground, ActivityIndicator, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react';
import {images} from'../constants'
import { router} from 'expo-router';
const Start = () => { 
  useEffect(() => {
    const setTimeOneTime=()=>{
    router.replace('/sign-up')
  }
  const myInterval = setInterval(setTimeOneTime, 2000);
      return () => clearInterval(myInterval); 
    }, [])
    
        return  ( <ImageBackground source={images.start} resizeMode='cover' >
        <View className='h-full bg-slate-800/50 space-y-6 w-screen'>
           <Image  source={images.logo} resizeMode='contain' className='w-[246px] h-[152px] flex justify-center items-center mx-auto mt-40 '/>
             <ActivityIndicator size="30%" color="#363736"/>
           </View>
                  </ImageBackground> )

      }

export default Start;

