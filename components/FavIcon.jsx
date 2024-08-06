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
import { checkFav } from "../lib/supabase";

const FavIcon = ({ addStyle, size, allData, id }) => {
  const opacity = useRef(new Animated.Value(1)).current;
  const [fav, setFav] = useState([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  useEffect(() => {
    async function fetchCheck() {
      setIsLoading(true);
      const fav = await checkFav(id);
      setIsLoading(false);
      setFav(fav);
    }
    fetchCheck();
  }, []);
  // async function insertFavourite() {
  //   setIsLoading(true);
  //   await insertFav({ ...allData });
  //   setIsLoading(false);
  // }
  console.log(fav);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // onPress={insertFavourite}
      className={`${addStyle} ${size} pb-1 pt-1.5 top-0 right-0 absolute border-2 border-gray-300 rounded-full`}
    >
      {isLoading ? (
        <Animated.View style={[{ opacity }]}>
          <Image
            source={icons.favourite}
            className="w-full h-full"
            resizeMode="contain"
          />
        </Animated.View>
      ) : fav ? (
        <Image
          source={icons.favouriteFull}
          className="w-full h-full"
          resizeMode="contain"
        />
      ) : (
        <Image
          source={icons.favourite}
          className="w-full h-full"
          resizeMode="contain"
        />
      )}
    </TouchableOpacity>
  );
};

export default FavIcon;
