import { TouchableOpacity, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { icons } from "../constants";
import { useState } from "react";
import { router } from "expo-router";
import FavIcon from "./FavIcon";
import { insertFav } from "../lib/supabase";

const ProductCurd = ({ allData, blur, id }) => {
  // function insertTHis() {}
  return (
    <View className="flex flex-row w-full mt-4">
      <Image
        source={{ uri: allData.imgsrc }}
        blurRadius={blur}
        className="w-[170px] h-[254px] rounded-md"
      />
      <View className="flex flex-col relative flex-1">
        <FavIcon size="w-[30px] h-[30px]" allData={allData} id={id} />
        <Text className="top-10 text-lg text-Font font-[400] left-2 absolute">
          {allData.name}
        </Text>
        <Text className="absolute top-24 left-2 text-lg ">
          <Text className="text-gray-400 font-semibold text-sm">EGP </Text>
          {allData.price - allData.price * (allData.discount / 100)}
        </Text>
        <View className="absolute top-28 left-2">
          <Text className="text-secondary-100 absolute top-0 left-8 text-[20px] space-x-3">
            {allData.discount}% OFF
          </Text>
          <Text className="text-gray-400 line-through text-[15px] font-bold absolute top-[5px] left-0">
            {allData.price}
          </Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            router.push(`/products/${id}`);
          }}
          className="absolute bottom-1 left-2 px-0 w-11/12  bg-gray-300 rounded-lg py-4 items-center"
        >
          <Text className="font-bold">Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCurd;
