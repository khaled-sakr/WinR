import { Image, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCart from "../components/ProductCart";
import HeadTitle from "../components/HeadTitle";
import { icons } from "../constants";
import Hr from "../components/Hr";
import { getFavourite } from "../lib/supabase";
import ProductCartLoading from "../components/loading/ProductCartLoading";
import { useFocusEffect } from "expo-router";

const Favourite = () => {
  const [favourite, setFavourite] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [rerender, setRerender] = useState();
  async function fetchData() {
    setIsLoading(true);
    const favourites = await getFavourite();
    setIsLoading(false);
    setFavourite(favourites);
  }
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );
  useEffect(() => {
    fetchData();
  }, [rerender]);
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconLeft={icons.back} middleText="Favourite" />
        <View className="mt-4 w-full mx-auto">
          {isLoading && favourite.length === 0 ? (
            <>
              <ProductCartLoading />
              <Hr />
              <ProductCartLoading />
              <Hr />
              <ProductCartLoading />
            </>
          ) : (
            favourite.map((item) => (
              <View key={item.id}>
                <ProductCart
                  rerender={rerender}
                  setRerender={setRerender}
                  key={item.id}
                  blur={item.name.includes("girl") ? 10 : 0}
                  favourite
                  favData={item}
                />
                {favourite[favourite.length - 1] !== item && <Hr />}
              </View>
            ))
          )}
          {!isLoading && favourite.length === 0 && (
            <>
              <Image
                source={icons.alert}
                resizeMode="contain"
                className="w-6/12 h-96 mx-auto"
              />
              <Text className="text-2xl text-center font-semibold">
                NO ITEM IN FAVOURITE
              </Text>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Favourite;
