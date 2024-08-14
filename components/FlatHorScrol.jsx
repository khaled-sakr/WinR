import { TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

const FlatHorScrol = ({ imgsrc, name, price, id, blur }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`products/${id}`);
      }}
      className="w-[174px] h-[242px] mr-4"
    >
      <Image
        blurRadius={blur}
        source={{ uri: imgsrc }}
        resizeMode="cover"
        className="w-[174px] h-[201px] rounded-xl"
      />
      <Text className="font-bold  pl-2 pt-1">{name}</Text>
      <Text className="font-[400] pl-2 ">EGP {price}</Text>
    </TouchableOpacity>
  );
};

export default FlatHorScrol;
