import { Animated, View } from "react-native";
import React, { useEffect, useRef } from "react";

const ProductOrdersLoading = () => {
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
    <>
      <Animated.View
        style={[{ opacity }]}
        className="flex-row mt-6 w-11/12 mx-auto justify-between"
      >
        <View className="w-6/12 ">
          <View className="bg-gray-300 rounded-md h-6 w-9/12" />
          <View className="flex h-14 mt-2 justify-between w-full">
            <View className="bg-gray-300 rounded-md h-6 w-full" />
            <View className="bg-gray-300 rounded-md h-6 w-full" />
          </View>
        </View>
        <View className="w-[40%] bg-gray-300 rounded-md flex-row h-10 " />
      </Animated.View>
      <Animated.View
        style={[{ opacity }]}
        className="w-11/12 flex-row justify-between mx-auto my-4 "
      >
        <View className="w-[137px] h-[174px] rounded-md bg-gray-300" />
        <View className="flex-1 justify-between ml-3">
          <View className="bg-gray-300 rounded-md h-8 w-9/12" />
          <View className="bg-gray-300 rounded-md h-8 w-9/12" />
          <View className="bg-gray-300 rounded-md h-8 w-9/12" />
          <View className="bg-gray-300 rounded-md h-8 w-9/12" />
        </View>
      </Animated.View>
    </>
  );
};

export default ProductOrdersLoading;
