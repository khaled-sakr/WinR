import { Button, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "./CustomButton";
import Hr from "./Hr";

const ProductCart = ({ overlay, favourite, addStyle, favData, cartData }) => {
  return (
    <>
      <View
        className={`w-11/12 flex-row  justify-between mx-auto  ${
          addStyle ? addStyle : "my-4"
        } ${overlay && "opacity-40"} `}
      >
        <View className="w-5/12">
          <Image
            source={{ uri: favData?.imgsrc || cartData?.imgsrc }}
            className="w-[137px] h-[174px] rounded-md"
          />
        </View>
        <View className="flex-1 ml-3">
          <Text className="text-lg text-slate-500 font-semibold">
            {favData?.name}
          </Text>
          <Text className="text-lg text-slate-400 font-semibold">
            {favData?.category}
          </Text>
          <Text className="text-sm text-slate-500 font-semibold">
            EGP{" "}
            {(favData?.price || cartData?.price) -
              (favData?.price || cartData?.price) *
                ((favData?.discount || cartData?.discount) / 100)}
          </Text>
          <View className="flex-row">
            <Text className="line-through text-lg text-slate-600 font-[300]">
              {favData?.price || cartData?.price}
            </Text>
            <Text className="text-lg text-green-500 ml-3 font-[400]">
              {favData?.discoun || cartData?.discount}% OFF
            </Text>
          </View>
          {!favourite ? (
            <>
              <View className="flex-row">
                <Text className="text-slate-600 text-[17px] font-[500]">
                  Free delivery
                </Text>
                <Text className="text-[17px] text-slate-600 font-[300]">
                  {" "}
                  by{" "}
                </Text>
                <Text className="text-[17px] text-green-500 font-[500]">
                  Fri, Nov 11.
                </Text>
              </View>
              <Text className="text-lg text-slate-500 font-[300]">
                Order in 9h 31m
              </Text>
            </>
          ) : (
            <>
              <CustomButton
                onPress={() => router.push("/products/1")}
                fav
                title="Buy"
                size="half"
                type="finalButtoms"
                addStyle="mt-6 "
              />
            </>
          )}
          {!favourite && (
            <View className="flex-row">
              <Text className="text-[17px] text-slate-400 font-[500]">
                Sold by{" "}
              </Text>
              <Text className="text-[17px] text-slate-700 font-[500]">
                American Eagle
              </Text>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

export default ProductCart;
