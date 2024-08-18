import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { icons } from "../constants";
import { useState } from "react";
import { checkFav, deleteFav, insertFav } from "../lib/supabase";

const FavIcon = ({ addStyle, size, allData, id, children }) => {
  const [fav, setFav] = useState();
  const [isLoading, setIsLoading] = useState();
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0.15,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [opacity]);
  async function fetchCheck() {
    if (isLoading) return;
    setIsLoading(true);
    const fav = await checkFav(id);
    setIsLoading(false);
    setFav(fav);
  }
  useEffect(() => {
    fetchCheck();
  }, []);
  async function insertFavourite() {
    if (isLoading) return;
    setIsLoading(true);
    await insertFav({
      name: allData.name,
      price: allData.price,
      category: allData.category,
      discount: allData.discount,
      imgsrc: allData.imgsrc,
      id: id,
    });
    fetchCheck();
  }
  async function deleteFavourite() {
    // if (isLoading) return;
    setIsLoading(true);
    await deleteFav(id);
    fetchCheck();
  }
  if (fav)
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={deleteFavourite}
        className={`${addStyle} ${size} pb-1 pt-1.5 top-0 right-0 absolute ${
          !children && "border-2 border-gray-300"
        } rounded-full`}
      >
        {isLoading ? (
          <Animated.Image
            style={[{ opacity }]}
            source={icons.hurtgray}
            className="w-full h-full"
            resizeMode="contain"
          />
        ) : (
          <Image
            source={icons.favouriteFull}
            className="w-full h-full"
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    );
  if (!fav)
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={insertFavourite}
        className={`${addStyle} ${size} pb-1 pt-1.5 top-0 right-0 absolute ${
          !children && "border-2 border-gray-300"
        } rounded-full`}
      >
        {isLoading ? (
          <Image
            source={icons.hurtgray}
            className="w-full h-full"
            resizeMode="contain"
          />
        ) : (
          <Image
            source={children ? icons.whiteHurt : icons.favourite}
            className="w-full h-full"
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    );
  // if (isLoading) {
  //   <View
  //     className={`${addStyle} ${size} pb-1 pt-1.5 top-0 right-0 absolute border-2 border-gray-300 rounded-full`}
  //   >
  //     <Image
  //       source={icons.hurtgray}
  //       className="w-full h-full"
  //       resizeMode="contain"
  //     />
  //   </View>;
  // }
  // return (
  //   <TouchableOpacity
  //     activeOpacity={0.7}
  //     onPress={insertFavourite}
  //     className={`${addStyle} ${size} pb-1 pt-1.5 top-0 right-0 absolute border-2 border-gray-300 rounded-full`}
  //   >
  //     {isLoading ? (
  //       <View>
  //         {isLoading ? (
  //           <Image
  //             source={icons.hurtgray}
  //             className="w-full h-full"
  //             resizeMode="contain"
  //           />
  //         ) : (
  //           <Image
  //             source={icons.favourite}
  //             className="w-full h-full"
  //             resizeMode="contain"
  //           />
  //         )}
  //       </View>
  //     ) : fav ? (
  //       <Image
  //         source={icons.favouriteFull}
  //         className="w-full h-full"
  //         resizeMode="contain"
  //       />
  //     ) : (
  //       <Image
  //         source={icons.favourite}
  //         className="w-full h-full"
  //         resizeMode="contain"
  //       />
  //     )}
  //   </TouchableOpacity>
  // );
};

export default FavIcon;
