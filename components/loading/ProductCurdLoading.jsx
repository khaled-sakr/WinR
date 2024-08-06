import { Animated, View } from "react-native";
import React, { useEffect, useRef } from "react";

const ProductCurdLoading = () => {
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
    <Animated.View style={[{ opacity }]} className="flex flex-row w-full mt-4">
      <View className="bg-gray-300 rounded-md w-[170px] h-[254px]" />
      <View className="flex flex-col relative flex-1">
        <View className="w-[30px] h-[30px] rounded-md bg-gray-300 absolute right-0" />
        <View className="bg-gray-300 top-10 left-2 absolute rounded-md h-8 w-6/12" />
        <View className="bg-gray-300 absolute top-24 left-2 h-8 rounded-md w-6/12" />
        <View className="bg-gray-300 absolute top-36 left-2 h-8 rounded-md w-6/12" />
        <View className="absolute bottom-1 left-2 px-0 w-11/12 bg-gray-300 rounded-lg h-12 " />
      </View>
    </Animated.View>
  );
};

export default ProductCurdLoading;
