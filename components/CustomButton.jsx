import {
  ActivityIndicator,
  Animated,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  logout,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { Link, router } from "expo-router";
import { icons } from "@/constants";

const CustomButton = ({
  ErrorPosition,
  title,
  onPress,
  size,
  logout,
  type,
  cancel,
  addStyle,
  loading,
  isLoading,
  fav,
  animation,
  changeForm,
}) => {
  const rotation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        })
      ).start();
    };
    startRotation();
  }, [rotation]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className={` ${addStyle} ${animation && "flex flex-row"} ${
          !fav ? (type === "startButtoms" ? "w-7/12" : "w-[95%]") : "w-[75%]"
        } ${fav ? "mx-1" : "mx-auto"} ${
          size === "large" ? "h-[57px]" : "h-[41px]"
        }  font-semibold ${
          fav ? "rounded-md" : "rounded-[10px]"
        } items-center justify-center ${
          cancel
            ? logout
              ? "bg-transparent"
              : "bg-white border border-slate-300"
            : changeForm
            ? "bg-gray-400"
            : "bg-secondary"
        }`}
      >
        {isLoading && (
          <Animated.Image
            style={[
              {
                transform: [{ rotate: rotateInterpolate }],
              },
            ]}
            className="w-4 mr-[2px] h-4"
            source={icons.clock}
          />
        )}
        <Text
          className={` ${
            cancel
              ? logout
                ? "text-red-500"
                : "text-slate-400 font-semibold"
              : "text-white"
          } text-lg `}
        >
          {loading ? <Text className="animate-pulse">loading...</Text> : title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
