import { StyleSheet ,Animated ,Image, TouchableOpacity ,ScrollView, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle'
import { icons, images } from '../../constants'
import { router } from 'expo-router'
import ValidCard from '../../components/ValidCard'
 
import ThreeDotCridit from '../../components/ThreeDotCridit'
import { useRef } from 'react'

const Payment = () => {
  const [chosenCard , setChosenCard] = useState(1)
  const [card , setCard] = useState([1,2,3,4]) 
  const [threeDot , setThreeDot] = useState(false)
  const slide = useRef(new Animated.Value(0)).current;
  function animatedAction(bool) {
      if (bool) {   
        Animated.timing(slide, {
          toValue:0,
          duration: 200,
          useNativeDriver: true,
        }).start();
      }else{
        Animated.timing(slide, {
          toValue: 190,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
  } 
  useEffect(()=>{
    animatedAction(threeDot)
  },[threeDot])
  return (
    <View>
        {threeDot&&<TouchableOpacity style={[styles.outSideClicker]} onPress={()=>setThreeDot(false)} className='absolute bottom-0 z-10 w-full h-screen flex-1'>
        </TouchableOpacity >}
        
          <Animated.View style={[{translateY:(slide)}]} className={`absolute bottom-0 h-[70px] z-30 pt-1 w-full rounded-t-xl bg-slate-200`}>
           <TouchableOpacity onPress={()=>setThreeDot(false) } activeOpacity={0.6} className='w-11/12 h-[64.5%] items-center  mx-auto flex-1 font-semibold text-center my-2'>
           <Text className='font-bold text-center text-base text-slate-600 my-auto'>DELETE</Text>
           </TouchableOpacity>
          </Animated.View>
      
    <SafeAreaView>
    <ScrollView>
      
      <HeadTitle srcIconLeft={icons.back}  middleText='Payment' />
    <View className='w-[87%] mx-auto flex-row justify-between mt-8 mb-8'>
        <Text className='font-semibold text-[17px] '>Card Managment</Text>
        <TouchableOpacity onPress={()=>router.push('add-card')} >
            <Text className='text-red-500 my-auto'>Add New+</Text>
        </TouchableOpacity>
    </View>
    {card.length === 0 ?
    <View>
        <Image source={images.paymentfailed} className='w-11/12 mx-auto h-[330px]'/>
        <Text className='text-center mt-3 mb-1 w-9/12 text-[17px] mx-auto font-semibold text-slate-500'>You don’t have any saved payment methods</Text>
        <Text className='text-center font-[400] text-sm w-8/12 mx-auto text-slate-400'>Add these in at checkout for a smoother experience!</Text>
    </View> :
    <>
    {card.map ((item)=>
     <>
    <ThreeDotCridit key={item} animatedAction={animatedAction} threeDot={threeDot}  setThreeDot={setThreeDot} item={item} setChosenCard={setChosenCard} chosenCard={chosenCard}/>
   </>
      )}
   <View className='flex-row justify-between w-10/12 mx-auto'>
    <View className='w-6/12'>
      <Text className='font-semibold w-11/12 mx-auto mt-4'>or check out with</Text>
    <ValidCard addStyle='mt-6'/>
      </View>
     <TouchableOpacity onPress={()=>{setCard([]);setThreeDot(false)}} className='font-semibold flex-row w-fit  mt-2 text-center h-7'>
      <Text className=' font-semibold underline text-red-600 '>
      Clear Cards
      </Text>
      </TouchableOpacity>
    </View>
    </>
    } 
 
    </ScrollView>
    </SafeAreaView>
    </View>
  )
}

export default Payment


const styles = StyleSheet.create({
  outSideClicker :{
    backgroundColor: 'rgba(0,0,0,0.5)',
    filter: 'blur(10)',
  }
})