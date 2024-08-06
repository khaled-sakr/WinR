import { Animated, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
const FlatHorScrolLoading = () => {
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
      className="w-[174px] h-[242px] mx-2 animate-spin"
    >
      <View className="w-[174px] h-[201px] rounded-xl bg-gray-300" />
      <View className="inline-block bg-gray-300 w-6/12 h-8 rounded-md my-1" />
    </Animated.View>
  );
};
export default FlatHorScrolLoading;
