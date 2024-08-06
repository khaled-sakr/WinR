import { Animated, View } from "react-native";
import React, { useEffect, useRef } from "react";

const ProductCartLoading = ({ cart }) => {
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
    <Animated.View className="flex flex-col" style={[{ opacity }]}>
      <View className="w-11/12 flex flex-row justify-between  mx-auto my-4">
        <View className="w-[137px] h-[174px] rounded-md bg-gray-300 mr-2" />
        <View className="flex-1 ml-3 gap-3">
          <View className="rounded-md h-8 w-9/12 bg-gray-300" />
          <View className="rounded-md h-8 w-9/12 bg-gray-300" />
          <View className="rounded-md h-8 w-9/12 bg-gray-300" />
          <View className=" bg-gray-300 h-8 w-9/12 rounded-md" />
        </View>
      </View>
      {cart && (
        <View className=" h-10 flex-row w-full mx-auto justify-between ">
          <View className="ml-2 w-5/12 justify-between flex-row">
            <View className="w-5/12 bg-gray-300 rounded-md " />
            <View className="w-5/12  bg-gray-300 rounded-md " />
          </View>
          <View className="w-4/12 h-full rounded-md mx-2 flex-row bg-gray-300" />
        </View>
      )}
    </Animated.View>
  );
};

export default ProductCartLoading;
