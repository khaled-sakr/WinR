import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icons } from "../constants";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

const ProductOrders = ({ title, orderData, blur }) => {
  return (
    <>
      <View className="flex-row mt-4 w-11/12 mx-auto justify-between">
        <View className="w-6/12">
          <Text className="text-lg font-semibold">Orders ***************</Text>
          <View className="flex h-12 justify-between w-full">
            <Text className="font-[400] text-slate-900">
              Place On {orderData.date_order}
            </Text>
            <Text className="font-[400] text-slate-500">
              Arrived On {orderData.date_arrived} 🤲🏻
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => router.replace(`/orders/${orderData.id_order}`)}
          className="w-[30%] my-auto flex-row"
        >
          <Text className="text-base font-semibold text-[#2E1CFF]">
            View Details
          </Text>
          <Image source={icons.rightarrow} className="my-auto  ml-2" />
        </TouchableOpacity>
      </View>

      <View className="w-11/12 flex-row justify-between mx-auto my-4">
        <Image
          source={{ uri: orderData.imgsrc }}
          className="w-[137px] h-[174px] rounded-md"
          blurRadius={blur}
        />
        <View className="flex-1 ml-3">
          <Text className="text-lg text-slate-500 font-semibold">
            American Eagle
          </Text>
          <Text className="text-lg text-slate-400 font-semibold">
            {orderData.name}
          </Text>
          <Text className="text-lg text-slate-400 font-semibold">
            "{orderData.size} " "{orderData.quantity_product} pcs"
          </Text>
          <Text
            className={`text-lg ${
              title === "PENDING"
                ? "text-orange-400"
                : title === "CANCELED"
                ? "text-red-500"
                : "text-green-500"
            } font-semibold mt-2 `}
          >
            {title}
          </Text>
          <View className="flex-row justify-start gap-3 items-center  ">
            {orderData.payment === "cash money" ? (
              <Image
                source={icons.iconcashout}
                className="w-5 h-5"
                resizeMode="contain"
              />
            ) : (
              <Image
                source={icons.iconcard}
                className="w-5 h-5"
                resizeMode="contain"
              />
            )}
            <Text className="text-lg mb-1 text-slate-400 font-semibold ">
              {orderData.payment}
            </Text>
          </View>
          <Text
            className={`${
              orderData.payment === "cash money"
                ? "text-orange-400 "
                : "text-green-500 "
            }text-sm font-[350]`}
          >
            {orderData.payment === "cash money"
              ? "prepare your money"
              : "your order is payed"}
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProductOrders;

const styles = StyleSheet.create({});
