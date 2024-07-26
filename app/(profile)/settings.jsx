import { Alert,Animated ,ScrollView , StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeadTitle from '../../components/HeadTitle' 
import { icons } from '../../constants'
import DropDown from '../../components/DropDown'
import CustomButton from '../../components/CustomButton'
import { TouchableOpacity } from 'react-native'
import { router } from 'expo-router'  
import { getCurrentUser, supabase } from '../../lib/supabase'
import { useEffect } from 'react'
const countryOptions=[{title: 'Egypt', value : 1},{title: 'KSA', value : 2},{title: 'UAE', value : 3 }]
const Settings = () => {
  const [user , setUser] = useState()
  const [value , setValue]=useState()
  const [loading , setLoading]=useState(false)
  const [notfication , setNotfication] = useState(false)
  
//   useEffect(() => {
//     const fetchUser = async () => {
//         const userData = await getCurrentUser();
//         setUser(userData);
//     };
//     fetchUser();
//     console.log(user)
// }, []);
  async function signOut(){
  setLoading(true)
  const { error } = await supabase.auth.signOut();
  if (error) {
    Alert.alert('Error signing out:', error.message);
    setLoading(false)
  } else {
    setLoading(false)
router.replace('/log-in')
  }
}
  /////////////////////////////////////
    const fadeAnim = useRef(new Animated.Value(0)).current;

        function animatedAction() {
            if (notfication) {   
                    Animated.timing(fadeAnim, {
                        toValue:0,
                        duration: 300,
                        useNativeDriver: true,
                    }).start();
            }else{

                Animated.timing(fadeAnim, {
                    toValue: 32,
                    duration: 300,
                    useNativeDriver: true, 
                  }).start();
            }
   
}
    /////////////////////////////////////
  return (
      <SafeAreaView>
    <ScrollView>
  
    <HeadTitle srcIconLeft={icons.back} middleText='settings'/>
    <View className='border w-11/12 mx-auto mt-14 mb-4 rounded-md h-12 border-slate-400'>
      <DropDown settings setValue={setValue} options={countryOptions} addStyle='' placeholder='Country'/>
    </View> 
        <View className='border w-11/12 mx-auto my-2 rounded-md h-12 border-slate-400'>
      <DropDown settings setValue={setValue} options={countryOptions} addStyle='' placeholder='Language' />
    </View>
    <View className='w-11/12 h-14 mt-20 flex-row justify-between mx-auto'>
    <Text className='w-6/12 font-semibold text-lg mt-3'>
      Notification
    </Text>
      <TouchableOpacity className='w-[16%] flex-row ' onPress={()=>{setNotfication((e)=>!e);animatedAction()}}>
        <View className={` px-1 w-full ${ notfication ? 'bg-secondary' : 'bg-gray-300'} h-7 my-auto rounded-[30px] mr-3`}>
        <Animated.View style={[{translateX:(fadeAnim)}]} className = {`h-5 my-auto absolute top-1 transition-all w-5/12  ${notfication ? 'bg-slate-300 left-0':'bg-slate-900 left-[5px]'} rounded-2xl`}>
           </Animated.View> 
      </View>
      </TouchableOpacity>
    </View>
    <TouchableOpacity  className='w-11/12 mx-auto mt-4'>
    <Text className='text-lg text-red-500 mb-4 mt-2'> 
         Delete Account</Text>
    </TouchableOpacity>
      <CustomButton 
    //  onPress={}
      title='CONFIRM' size='small' type='finalButtoms' addStyle='mt-16' />
        <CustomButton loading={loading}
    onPress={signOut}
    title='Log Out' size='small' type='finalButtoms' addStyle='mt-2' logout  cancel/>
    </ScrollView>
    </SafeAreaView>
  )
}
 
 export default Settings
