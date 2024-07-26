import { View, Image, ImageBackground, ActivityIndicator, Text, TouchableOpacity, FlatList } from 'react-native'
import React , { useEffect } from 'react';
import {images} from'../constants';
import { router} from 'expo-router';
import { supabase } from '../lib/supabase';
const Index = () => { 
  useEffect(() => {
    const setTimeOneTime=()=>{
    supabase.auth.onAuthStateChange((session)=>{
      if(session) {
        router.replace('home')
      }else {
        router.replace('home')
        router.replace('payment')
      }
     })
  }
  const myInterval = setInterval(setTimeOneTime, 1000);
      return () => clearInterval(myInterval);
    }, [])
        return  (
           <ImageBackground source={images.start} resizeMode='cover' >
                 <View className='h-full bg-slate-800/50 space-y-6 w-screen'>
                          <Image  source={images.logo} resizeMode='contain' className='w-[246px] h-[152px] flex justify-center items-center mx-auto mt-40 '/>
                          <ActivityIndicator size="30%" color="#363736"/>
                 </View>
             </ImageBackground>
                )
    }
export default Index;

