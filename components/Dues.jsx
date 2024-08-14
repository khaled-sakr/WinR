import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Dues = ({ sum, paymentCard }) => {
  return (
    <View className="w-11/12 mx-auto border rounded-md my-3 border-slate-300 ">
      <View className="px-2 py-3 w-11/12 mx-auto flex-row justify-between">
        <View className="flex-row space-x-1">
          <Text className="text-slate-700 font-semibold">Subtotal </Text>
          <Text className="text-slate-400 font-semibold">( 1 item )</Text>
        </View>
        <Text className="font-semibold text-slate-700">EGP {sum}</Text>
      </View>
      <View className=" px-2 border-slate-300 border-t-0 py-3 w-11/12 mx-auto flex-row justify-between">
        <View className="flex-row space-x-1">
          <Text className="text-slate-700 font-semibold">Shipping</Text>
        </View>
        <Text
          className={`font-semibold ${
            paymentCard ? "text-green-500" : "text-red-500"
          }`}
        >
          {paymentCard ? "Free" : "20$"}
        </Text>
      </View>
      <View className="w-10/12 my-2 bg-slate-300 h-[1px] mx-auto" />
      <View className=" px-2 border-slate-300 border-t-0 py-3 w-11/12 mx-auto flex-row justify-between">
        <View className="flex-row space-x-1">
          <Text className="text-slate-700 font-bold  text-[17px]">Total </Text>
        </View>
        <Text className="font-bold text-slate-700 text-[17px] ">
          EGP {paymentCard ? sum : sum + 20}
        </Text>
      </View>
    </View>
  );
};

export default Dues;

const styles = StyleSheet.create({});
