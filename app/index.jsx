import { View, Image, ImageBackground, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { images } from "../constants";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Index = () => {
  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem("AuthList");
      if (value) {
        router.replace("home");
      } else {
        router.replace("welcome");
      }
    };

    const myInterval = setInterval(getData, 1000);
    return () => clearInterval(myInterval);
  }, []);

  return (
    <ImageBackground source={images.start} resizeMode="cover">
      <View className="h-full bg-slate-800/50 space-y-6 w-screen">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[246px] h-[152px] flex justify-center items-center mx-auto mt-40 "
        />
        <ActivityIndicator size="30%" color="#363736" />
      </View>
    </ImageBackground>
  );
};
export default Index;
