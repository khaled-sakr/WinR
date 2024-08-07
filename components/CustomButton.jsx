import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  logout,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const CustomButton = ({
  title,
  onPress,
  size,
  logout,
  type,
  cancel,
  addStyle,
  loading,
  fav,
}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        className={` ${addStyle} ${
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
            : "bg-secondary"
        }`}
      >
        <Text
          className={` ${
            cancel
              ? logout
                ? "text-red-500"
                : "text-slate-400 font-semibold"
              : "text-white"
          } text-lg `}
        >
          {loading ? (
            <Text className="animate-pulse">wait second pls...</Text>
          ) : (
            title
          )}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;
