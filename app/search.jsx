import {
  Image,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { icons } from "../constants";
import { router } from "expo-router";
import { getAllProducts, getCategories } from "../lib/supabase";

const Search = () => {
  const [allDataProd, setAllDataProd] = useState();
  const [datacategories, setDatacategories] = useState();
  const [resultsCat, setResultsCat] = useState();
  const [resultsProd, setResultsProd] = useState();
  const [value, setValue] = useState("");
  async function fetchData() {
    const data = await getAllProducts();
    const categories = await getCategories();
    setDatacategories(categories);
    setAllDataProd(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setResultsProd(
      allDataProd?.filter((product) =>
        product.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setResultsCat(
      datacategories?.filter((category) =>
        category.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    if (value === "") setResultsCat([]);
    if (value === "") setResultsProd([]);
  }, [value]);

  return (
    <SafeAreaView>
      <ScrollView>
        <>
          <View className="relative flex-row mx-auto w-11/12 my-5">
            <TextInput
              value={value}
              onChangeText={(value) => setValue(value)}
              className="py-3 w-10/12 px-10 bg-[#DFDFDF] flex-col relative h-[60px] rounded-2xl"
              placeholderTextColor="#6A6A6A"
              placeholder="What are you looking for"
            />
            <Image
              source={icons.search}
              className="w-[14px] h-[14px] absolute top-6 left-3"
            />
            <TouchableOpacity
              onPress={() => {
                setValue("");
                router.back();
              }}
              className="w-4/12 my-auto mx-2"
            >
              <Text className="text-slate-600 text-lg">Cancel</Text>
            </TouchableOpacity>
          </View>
        </>
        <View className="mb-5">
          {resultsCat?.map((item) => (
            // <View

            // >
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.5}
              className="my-2 flex flex-row justify-between px-5 h-14 bg-gray-200 w-full"
              onPress={() => router.replace(`categories/${item.name}`)}
            >
              <View className="w-2/12">
                <Image
                  source={{ uri: item.imgsrc }}
                  className="w-12 h-12 my-auto "
                />
              </View>
              <View className="flex-row justify-between my-auto w-[80%] ">
                <Text className="underline text-slate-500 font-[500] text-[17px] ">
                  {item.name}
                </Text>
                <Image
                  className="w-[30px] h-[30px]"
                  source={icons.backarrow}
                  resizeMode="contain"
                />
              </View>
              {/* <View className="bg-slate-300 my-1 h-[2px] w-full" /> */}
            </TouchableOpacity>
          ))}
        </View>

        {resultsProd?.length > 1 && resultsCat?.length > 1 && (
          <View className="h-[2px] w-full bg-slate-500 mb-3" />
        )}
        {resultsProd?.map((item) => (
          <View className="mb-5" key={item.id}>
            <View
              className="my-1
          //h-10//
          "
              key={item.id}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.replace(`products/${item.id}`)}
              >
                <View className="flex-row justify-between w-[90%] mx-auto">
                  <Text className="text-slate-500 font-[400] text-[17px] my-auto">
                    {item.name}
                  </Text>
                  <Image
                    className="text-slate-500 font-[300] text-[16px] mt-1 w-[30px] h-[30px]"
                    source={icons.backarrow}
                    resizeMode="contain"
                  />
                </View>
              </TouchableOpacity>
              <View className="bg-slate-300 my-1 h-[2px] w-full" />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
