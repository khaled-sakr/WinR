import { Animated ,Image ,TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons'
import { useRef } from 'react';
import { images } from '../constants';

const ThreeDotCridit = ({item,setChosenCard ,chosenCard}) => {
    const [threeDot , setThreeDot] = useState(false);
    const slide = useRef(new Animated.Value(0)).current;
    function animatedAction() {
      if (!threeDot) {   
              Animated.timing(slide, {
                  toValue:0,
                  duration: 300,
                  useNativeDriver: true,
              }).start();
      }else{
          Animated.timing(slide, {
              toValue: 128,
              duration: 300,
              useNativeDriver: true,
            }).start();
      }
    } 
  return (
      <>
      <View className='flex-row justify-end w-[88%] mx-auto'>
      <TouchableOpacity className='justify-end' onPress={()=>{animatedAction() ; setThreeDot((e)=>!e)}}>
      <Entypo name="dots-three-vertical" size={20} color="black" />
      </TouchableOpacity>
      </View>
     
      
     {threeDot && <TouchableOpacity activeOpacity={1} onPress={()=>
      {animatedAction();
      setThreeDot(false)}
     } className='justify-end w-screen h-screen absolute z-10 '>
      
      </TouchableOpacity> 
      }
       <View className='absolute bottom-0 h-[15%] w-full'>  
          <Animated.View style={[{translateY:(slide)}]} className={`pt-1  h-full w-full rounded-t-[30px] bg-slate-200 z-10`}>
        <TouchableOpacity activeOpacity={0.6} className='w-11/12 h-[30%] items-center  mx-auto flex-1 font-semibold text-center my-2'>
           <Text className='font-bold text-center text-base text-slate-600 my-auto'>delete</Text>
           </TouchableOpacity>
                <View className='w-full h-[0.5%] rounded-xl mx-auto bg-slate-500 '/>
           <TouchableOpacity onPress={()=>{setChosenCard(item);setThreeDot(false);animatedAction()}} activeOpacity={0.6} className='w-11/12 h-[64.5%] items-center  mx-auto flex-1 font-semibold text-center my-2'>
           <Text className='font-bold text-center text-base text-slate-600 my-auto'>Choose Default</Text>
           </TouchableOpacity>
          </Animated.View>
       </View> 
     <View className={`my-4 w-[343px] h-[218px] rounded-xl mx-auto border-4  ${chosenCard === item ? ' border-green-600': 'border-transparent'}`}>
     <Image source={images.curdback} className='rounded-lg w-[335px] h-[210px] mx-auto '/>
     <Text className='text-3xl absolute top-4 right-4 font-extrabold text-white'>VISA</Text>
     <Text className='absolute font-[300] top-20 left-4 text-white text-xl tracking-[6px]'>1111 2222 3333 4444</Text>
     <Text className={`text-xs font-bold absolute bottom-8 left-4  text-white`}>CARDHOLDER NAME</Text>
     <Text className={`text-xs font-bold absolute bottom-4 left-12 text-white`}>KHALED</Text>
     <Text className={`text-xs font-bold absolute bottom-8 right-4 text-white`}>VALID TRUE</Text>
     <Text className={`text-xs font-bold absolute bottom-4 right-8 text-white`}>03/26</Text>
     </View>
       </>
 )
}

export default ThreeDotCridit 