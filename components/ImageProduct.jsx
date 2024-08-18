import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";

const ImageProduct = ({ isLoading, blur, src }) => {
  return (
    <View className="w-[90vw] mx-auto ">
      {!isLoading && (
        <Image
          source={{ uri: src }}
          className="mx-auto rounded-xl w-[250px] h-[305px]"
          blurRadius={blur}
        />
      )}
    </View>
  );
};

export default ImageProduct;
