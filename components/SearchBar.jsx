import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons } from "../constants";
import { router } from "expo-router";

const SearchBar = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => router.push(`/search`)}
      className="w-11/12 mt-6 mx-auto py-3 px-5 bg-[#DFDFDF] flex-col relative  h-[52px] rounded-3xl "
    >
      <View
        class="h-full mx-auto p-2 w-full"
        placeholderTextColor="#6A6A6A"
        placeholder="Search"
      />
      <Text className="text-third mt-1 font-[400]">Search</Text>
      <Image
        source={icons.search}
        className="w-[14px] h-[14px] absolute top-5 right-5"
      />
    </TouchableOpacity>
  );
};

export default SearchBar;
