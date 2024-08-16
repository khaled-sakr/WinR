import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import { icons, images } from "../../constants";
import TabProfile from "../../components/TabProfile";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profile = () => {
  // const value = await AsyncStorage.getItem('AuthList');
  // const res=JSON.parse(value)
  // console.log('profile::',res)
  // console.log(value=== null)

  // const value =  AsyncStorage.getItem('AuthList');
  // console.log( JSON.parse(value))
  //       const checkEveryTime = async () => {
  //         const value = await AsyncStorage.getItem('AuthList');
  //         const res=JSON.parse(value)
  //         console.log('profile::',res)
  //         console.log(value=== null)
  //   //     const value = await  AsyncStorage.getItem('AuthList');
  //   //     console.log('prof:',value)
  //   //     if (value !== 'authed') {
  //   //         router.replace('log-in')
  //   // }
  // };
  // useEffect(() => {
  //   checkEveryTime()
  // } )
  //   useEffect(() => {
  //     const checkEveryTime = async () => {
  //       const value = await AsyncStorage.getItem('AuthList');
  //       console.log(value)
  //   if (value !== 'authed') {
  //     router.replace('log-in')
  //   }
  //   }
  //   checkEveryTime()
  // })
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconMiddle={icons.winr} middle />
        <View className="w-11/12 mx-auto flex-row justify-between h-[90px] mb-16">
          <Image
            source={images.profileimage}
            className="w-[90px] rounded-full h-[90px]"
          />
          <View className="w-[50%] my-auto">
            <Text className="text-lg font-semibold text-slate-600">
              Khaled sakr
            </Text>
            <Text className="font-semibold text-slate-600">
              *****@gamil.com
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("edit")}
            className="w-[15%] flex-row rounded-lg text-center  bg-secondary h-6 my-auto"
          >
            <Image source={icons.pen} className="ml-2 my-auto" />
            <Text className="my-auto text-white text-center">Edit</Text>
          </TouchableOpacity>
        </View>
        <TabProfile src={icons.order} title="orders" link="/orderStation" />
        <View className="w-full h-[1px] bg-slate-300" />
        <TabProfile src={icons.wallet} title="payment" link="/payment" />
        <View className="w-full h-[1px] bg-slate-300" />
        <TabProfile src={icons.setting} title="setting" link="/settings" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
