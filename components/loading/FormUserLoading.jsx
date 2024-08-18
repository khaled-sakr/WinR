import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeadTitle from "../HeadTitle";
import { icons } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const FormUserLoading = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle
          srcIconLeft={icons.back}
          srcIconMiddle={icons.winr}
          srcIconRight={icons.favourite}
        />
        <View className="w-11/12 mt-10 mx-auto">
          <View className="h-16 w-full bg-gray-300 my-[15px] rounded-md" />
          <View className="h-16 w-full bg-gray-300 my-[15px] rounded-md" />
          <View className="h-16 w-full bg-gray-300 my-[15px] rounded-md" />
          <View className="h-16 w-full bg-gray-300 my-[15px] rounded-md" />
          <View className="h-16 w-full bg-gray-300 my-[15px] rounded-md" />
          <View className="h-16 w-full bg-gray-300 my-[15px] rounded-md" />
        </View>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
};

export default FormUserLoading;
