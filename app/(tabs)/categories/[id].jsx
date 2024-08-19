import {
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import React, { useCallback, useState } from "react";
import { router, useFocusEffect, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../../components/HeadTitle";
import SearchBar from "../../../components/SearchBar";
import { icons } from "../../../constants";
import SquareText from "../../../components/SquareText";
import ProductCurdWithDet from "../../../components/ProductCurdWithDet";
import { getProducts } from "../../../lib/supabase";
import { FlatGrid } from "react-native-super-grid";
import ProductCurdWithDetLoading from "../../../components/loading/ProductCurdWithDetLoading";

const scrolCategories = [
  { title: "t-shirt", link: "t-shirt" },
  { title: "shemiz", link: "shemiz" },
  { title: "shirt", link: "shirt" },
  { title: "jacket", link: "jacket" },
  { title: "sweat shirt", link: "sweatshirt" },
  { title: "fashion", link: "fashion" },
  { title: "sport", link: "sport" },
  { title: "swim wear", link: "swimwear" },
];
const CategoryId = () => {
  const { id } = useLocalSearchParams();
  const [thisCategory, setThisCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function fetchData() {
    setIsLoading(true);
    const data = await getProducts("category", id);
    setIsLoading(false);
    setThisCategory(data);
  }

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [id])
  );
  if (!isLoading && thisCategory.length === 0)
    return (
      <SafeAreaView>
        <ScrollView>
          <HeadTitle
            srcIconLeft={icons.back}
            srcIconRight={icons.favourite}
            srcIconMiddle={icons.men}
          />
          <SearchBar />
          <FlatList
            className="w-11/12 mx-auto mt-4"
            data={scrolCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => router.push(`/categories/${item.link}`)}
                className="mr-2 mb-4"
              >
                <SquareText
                  id={id}
                  title={item.title}
                  link={item.link}
                  addstyle={` h-[40px]  w-[106px] rounded-[2px]`}
                />
              </TouchableOpacity>
            )}
          />
          <Image
            source={icons.alert}
            resizeMode="contain"
            className="w-6/12 h-96 mx-auto"
          />
          <Text className="text-2xl text-center font-semibold">
            NO ITEM IN THIS CATEGORY
          </Text>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle
          srcIconLeft={icons.back}
          srcIconRight={icons.favourite}
          srcIconMiddle={icons.men}
        />
        <SearchBar />
        <FlatList
          className="w-11/12 mx-auto mt-4"
          data={scrolCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push(`/categories/${item.link}`)}
              className="mr-2 mb-4"
            >
              <SquareText
                id={id}
                title={item.title}
                link={item.link}
                addstyle={` h-[40px]  w-[106px] rounded-[2px]`}
              />
            </TouchableOpacity>
          )}
        />
        <View className="w-[100%] flex-row justify-between mx-auto my-100">
          {isLoading ? (
            <>
              <ProductCurdWithDetLoading />
              <ProductCurdWithDetLoading />
            </>
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatGrid
                showsVerticalScrollIndicator={false}
                itemDimension={157}
                data={thisCategory}
                renderItem={({ item }) => (
                  <ProductCurdWithDet
                    allData={item}
                    imgsrc={item?.imgsrc}
                    name={item?.name}
                    price={item?.price}
                    discount={item?.discount}
                    blur={item.section === "women" ? 10 : 0}
                  />
                )}
              />
            </ScrollView>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryId;
