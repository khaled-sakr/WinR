import { TouchableOpacity, Image, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const CategoryCurd = ({ src, title, type }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.push(`/${type}`)}
      className="w-11/12 mx-auto mt-8"
    >
      <Image
        source={src}
        resizeMode="cover"
        className="mx-auto rounded-md w-[333px] h-[180px]"
      />
      <Text className="text-center mx-autom font-semibold text-lg mt-4">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCurd;
