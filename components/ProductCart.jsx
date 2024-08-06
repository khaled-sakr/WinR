import { Button, TouchableOpacity, Text, View } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { router } from "expo-router";
import CustomButton from "./CustomButton";
import DropDown from "./DropDown";
import { icons } from "../constants";
const numberOfOptions = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
];
const ProductCart = ({
  overlay,
  favourite,
  addStyle,
  favData,
  cart,
  cartData,
}) => {
  const [quantity, setQuantity] = useState();
  return (
    <View>
      <View
        className={`w-11/12 flex-row justify-between mx-auto  ${
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
          <Text className="text-[20px] text-slate-500 font-semibold">
            {favData?.name || "American Eagle"}
          </Text>
          <Text className="text-lg text-slate-400 font-semibold">
            {favData?.category || cartData?.name}
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
      {cart && (
        <View className="relative flex-row mt-3 w-full mx-auto justify-between ">
          <View className="w-5/12 flex-row">
            <View className="w-5/12  border-[0.75px] border-slate-400 rounded-md relative">
              <DropDown
                placeholder="1"
                options={numberOfOptions}
                setValue={setQuantity}
                addStyle="-top-2 absolute"
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              className="rounded-md w-8/12 ml-2 py-2 flex-row border-[0.75px] border-slate-400 px-3"
            >
              <Image source={icons.remove} />
              <Text className="text-slate-500 ">Remove</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            className="w-4/12 h-full rounded-md ml-2 py-2 flex-row border-[0.75px] border-slate-400 px-3"
          >
            <Image
              source={icons.favourite}
              className="w-[16px] h-[14px] mt-1 mr-2"
            />
            <Text className="text-slate-500 text-xs mt-[0.75px]">
              Move To Fav
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ProductCart;
