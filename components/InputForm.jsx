import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {icons,images} from '../constants'

const InputForm = ({value,title,placeholder,type,size,addclass,handleChangeText,error,validation ,...props}) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View className={`relative bg-white ${size ==='full'?' w-11/12 mx-auto':'w-[48%]'}  `}>
        <Text className='inline text-sm text-Font px-1 font-semibold'>{title}</Text>
        <TextInput value={value}  placeholder={placeholder} onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword}
        className={`${addclass} h-[52px] text-Font ${type} ${addclass} w-full border-[#C1C1C1] rounded-[10px] placeholder:text-sm  font-semibold px-3  border bg-slate-200 `}
        />
   {title.includes('Password')  && (
          <TouchableOpacity className=' absolute right-4 bottom-4 ' onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}        
    </View>
  )
}

export default InputForm
