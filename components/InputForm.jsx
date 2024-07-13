import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {icons,images} from '../constants'

const InputForm = ({name,value,title,placeholder,type,size,addclass,handleChangeText,error,validation,LogInError,addViewStyle,addInputStyle ,...props}) => {
  
  const [showPassword, setShowPassword] = useState(true);
  return (
    <View className={`mb-1 relative bg-white ${size ==='full'?' w-11/12 mx-auto':'w-[48%]'} ${addViewStyle} `} >
        <Text className='inline text-sm text-Font px-1 font-semibold'>{title}</Text>
        <TextInput name={name} value={value}  placeholder={placeholder} onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
       placeholderTextColor="#b6b6b7"
        className={`${addclass} h-[52px] text-Font ${type} ${addInputStyle} w-full rounded-[10px] placeholder:text-sm  font-semibold px-3 border-2 ${error ? ' border-red-300 ':'border-[#C1C1C1]'} bg-[#DFDFDF] `}
        />
        {error && <Text className='text-xs text-red-400 font-[500] px-1'> {error} </Text> } 
              {title.includes('Password')  && (
          <TouchableOpacity className={`
          absolute ${error?'right-4 bottom-7':' right-4 bottom-4 ' } 
          `}
            onPress={() => setShowPassword(!showPassword)}>
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
