import { Animated, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";

const ProductCurdWithDetLoading = () => {
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
      className="my-2 w-[157px] h-[221.21px] relative mx-auto"
    >
      <View className="w-[155px] h-[172.2px] rounded-md left-0 top-0 bg-gray-300" />
      <View className="flex flex-row justify-between">
        <View className=" bg-gray-300 rounded-md w-6/12 h-8 mt-1" />
        <View className=" bg-gray-300 rounded-md w-4/12 h-8 mt-1" />
      </View>
    </Animated.View>
  );
};

export default ProductCurdWithDetLoading;
