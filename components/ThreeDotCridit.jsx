import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Animated,
  StyleSheet,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";
import { images } from "../constants";

const ThreeDotCridit = ({ item, setIdTarget, setThreeDot }) => {
  return (
    <View className="mb-2">
      <View className="flex-row justify-end w-[88%] mx-auto mt-2">
        <View className="w-[88%] mx-auto"></View>
        <TouchableOpacity
          activeOpacity={0.7}
          className="justify-end z-10 mr-1 my-1"
          onPress={() => {
            setThreeDot(true);
            setIdTarget(item.id);
          }}
        >
          <Entypo name="dots-three-vertical" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        className={`my-2 w-[343px] h-[218px] rounded-xl mx-auto border-4 ${
          item.chosen_card ? "border-green-600" : "border-transparent"
        }`}
      >
        <Image
          source={images.curdback}
          className="rounded-lg w-[335px] h-[210px] mx-auto  "
        />
        <Text className="text-3xl absolute top-4 right-4 font-extrabold text-white">
          VISA
        </Text>
        <Text className="absolute font-[300] top-20 left-4 text-white text-xl tracking-[6px]">
          {String(item.credit_id).slice(0, 4)}{" "}
          {String(item.credit_id).slice(4, 8)}{" "}
          {String(item.credit_id).slice(8, 12)}{" "}
          {String(item.credit_id).slice(12, 16)}
        </Text>
        <Text
          className={`text-xs font-bold absolute bottom-12 left-6  text-white`}
        >
          CARDHOLDER NAME
        </Text>
        <Text
          className={`text-xs font-bold absolute bottom-6 left-12 text-white`}
        >
          {item?.credit_name}
        </Text>
        <Text
          className={`text-xs font-bold absolute bottom-12 right-6 text-white`}
        >
          CVV NUM
        </Text>
        <Text
          className={`text-xs font-bold absolute bottom-6 right-8 text-white`}
        >
          {item.cvv}{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThreeDotCridit;
