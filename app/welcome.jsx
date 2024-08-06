import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { images } from "../constants";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <ImageBackground source={images.welcome3} resizeMode="cover">
      <View className="flex flex-col h-full bg-slate-900/50">
        <Image
          source={images.logo}
          resizeMode="contain"
          className="w-[246px] h-[152px] mx-auto mt-10"
        />
        <View className="mt-64">
          <Text className="text-slate-100 text-2xl font-[600] text-center">
            Welcome to W in T store
          </Text>
          <Text className="text-slate-100 my-3 font-[100] text-center">
            Fashion store for all you needs
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.replace("/log-in")}
            className="bg-slate-500/70 rounded-3xl px-5 py-3 w-6/12 mx-auto mt-20"
          >
            <Text className="text-slate-100 text-sm font-[100] text-center">
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
