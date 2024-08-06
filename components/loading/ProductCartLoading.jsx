import { Animated, View } from "react-native";
import React, { useEffect, useRef } from "react";

const ProductCartLoading = () => {
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
    <Animated.View
      style={[{ opacity }]}
      className="w-11/12 flex-row justify-between mx-auto my-4"
    >
      <View className="w-[137px] h-[174px] rounded-md bg-gray-300 mr-2" />
      <View className="flex-1 ml-3 gap-2">
        <View className="rounded-md h-8 w-6/12 bg-gray-300" />
        <View className="rounded-md h-8 w-6/12 bg-gray-300" />
        <View className="rounded-md h-8 w-6/12 bg-gray-300" />
        <View className=" bg-gray-300 h-12 w-9/12 rounded-md" />
      </View>
    </Animated.View>
  );
};

export default ProductCartLoading;
