import { TouchableOpacity, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image } from "react-native";
import { router, useFocusEffect } from "expo-router";
import CustomButton from "./CustomButton";
import DropDown from "./DropDown";
import { icons } from "../constants";
import {
  changeQuantity,
  deleteCart,
  deleteFav,
  getCart,
} from "../lib/supabase";
import FavIcon from "./FavIcon";
import { Animated } from "react-native";
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
  rerender,
  setRerender,
  checkout,
}) => {
  const [quantity, setQuantity] = useState(cartData?.quantity_product);
  const [isLoading, setIsLoading] = useState();
  const [isChanging, setIsChanging] = useState();
  // const opacity = useRef(new Animated.Value(1)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  async function deleteCartFun() {
    setIsLoading(true);
    await deleteCart(cartData.id);
    setIsLoading(false);
    setRerender(!rerender);
  }
  useEffect(() => {
    async function changeQuantityFun() {
      setIsChanging(true);
      await changeQuantity(cartData?.id, quantity);
      setIsChanging(false);
      setRerender(!rerender);
    }
    changeQuantityFun();
  }, [quantity]);
  async function deleteFavFun() {
    setIsLoading(true);
    await deleteFav(favData.id);
    setIsLoading(false);
    setRerender(!rerender);
  }

  useEffect(() => {
    const startRotation = () => {
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 1500, // Adjust duration for rotation speed
          useNativeDriver: true,
        })
      ).start();
    };
    startRotation();
  }, [rotation]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  return (
    <View>
      <View
        className={`w-11/12 flex-row justify-between mx-auto  ${
          addStyle ? addStyle : "my-4"
        } ${overlay && "opacity-40"} `}
      >
        <View className="w-5/12 ">
          <Image
            source={{ uri: favData?.imgsrc || cartData?.imgsrc }}
            className="w-[137px] h-[174px] rounded-md"
            resizeMode="cover"
          />
        </View>
        <View className="flex-1 ml-3 ">
          <Text className="text-[20px] text-slate-500 font-semibold">
            {favData?.name || "American Eagle"}
          </Text>
          <Text className="text-base text-slate-400 font-semibold">
            {favData?.category || cartData?.name}{" "}
            {checkout && (
              <Text className=" border text-green-500 px-2 text-sm">
                "{cartData.size}" "{cartData.quantity_product} pcs"
              </Text>
            )}
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
            <View className=" pt-6 w-7/12 space-x-2 justify-between flex flex-row">
              <CustomButton
                onPress={() =>
                  router.push(`/products/${favData?.id || cartData?.id}`)
                }
                fav
                title="Buy"
                size="half"
                type="finalButtoms"
                addStyle=""
              />
              <CustomButton
                onPress={() => deleteFavFun()}
                animation
                isLoading={isLoading}
                fav
                cancel
                title={isLoading ? "Load" : "Remove"}
                size="half"
                type="startButtoms"
              />
            </View>
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
                placeholder={quantity || cartData.quantity_product}
                options={numberOfOptions}
                setValue={setQuantity}
                isChanging={isChanging}
                addStyle={`-top-2 absolute`}
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => deleteCartFun()}
              className="rounded-md w-8/12 ml-2 py-2 flex-row border-[0.75px] border-slate-400 px-3"
            >
              {isLoading ? (
                <Animated.Image
                  style={[
                    {
                      transform: [{ rotate: rotateInterpolate }],
                    },
                  ]}
                  className="w-4 mr-1 my-auto h-4"
                  source={isLoading ? icons.clock : icons.remove}
                />
              ) : (
                <Image className="w-5 h-5" source={icons.remove} />
              )}
              <Text className="text-slate-500 ">
                {isLoading ? "loading" : "Remove"}
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-[13.5%] h-full rounded-md ml-2 py-2 border-[0.75px] border-slate-400 px-3">
            <FavIcon
              allData={cartData}
              id={cartData.id}
              children
              size="absolute  right-0 w-[30px] h-[30px] mt-1 mr-2"
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductCart;
