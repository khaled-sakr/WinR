import { Animated, SafeAreaView, ScrollView, View } from "react-native";
import React, { useEffect, useRef } from "react";
import HeadTitle from "../HeadTitle";
import { icons } from "../../constants";
import Hr from "../Hr";

const OrderLoading = () => {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <SafeAreaView>
      <HeadTitle srcIconLeft={icons.back} middleText="Orders" />
      <Animated.View style={[{ opacity }]} className="w-full mt-6">
        <View className="h-8 ml-4 w-9/12 bg-gray-300 rounded-md" />
        <View className="h-8 mt-4 ml-4 w-9/12 bg-gray-300 rounded-md" />
        <View className="flex-row mt-6 w-11/12 mx-auto justify-between">
          <View className="h-8 w-6/12 bg-gray-300 rounded-md" />
          <View className="h-8 w-5/12 bg-gray-300 rounded-md" />
        </View>
        <View className="w-11/12 flex flex-row justify-between  mx-auto my-4">
          <View className="w-[137px] h-[174px] rounded-md bg-gray-300 mr-2" />
          <View className="flex-1 ml-3 gap-3">
            <View className="rounded-md h-8 w-9/12 bg-gray-300" />
            <View className="rounded-md h-8 w-9/12 bg-gray-300" />
            <View className="rounded-md h-8 w-9/12 bg-gray-300" />
            <View className=" bg-gray-300 h-8 w-9/12 rounded-md" />
          </View>
        </View>
        <Hr />
        <View className="h-12 my-4 ml-4 w-11/12 bg-gray-300 rounded-md" />
        <Hr />
        <View className="h-8 my-4 ml-4 w-11/12 bg-gray-300 rounded-md" />
        <View className="w-11/12 mx-auto border-gray-300 flex flex-col justify-evenly py-1 border rounded-md h-32">
          <View className="h-7 ml-4 w-11/12 bg-gray-300 rounded-md" />
          <View className="h-7 ml-4 w-11/12 bg-gray-300 rounded-md" />
          <View className="h-7 ml-4 w-11/12 bg-gray-300 rounded-md" />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default OrderLoading;
