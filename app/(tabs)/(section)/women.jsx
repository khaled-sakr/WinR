import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleWithLine from "../../../components/TitleWithLine";
import SearchBar from "../../../components/SearchBar";
import HeadTitle from "../../../components/HeadTitle";
import CustomIcon from "../../../components/CustomIcon";
import { icons, images } from "../../../constants";
import BoldTitle from "../../../components/BoldTitle";
import SquareText from "../../../components/SquareText";
import FlatHorScrol from "../../../components/FlatHorScrol";
import ProductCurd from "../../../components/ProductCurd";
import { getProducts } from "../../../lib/supabase";
import ProductCurdLoading from "../../../components/loading/ProductCurdLoading";
import FlatHorScrolLoading from "../../../components/loading/FlatHorScrolLoading";
import { useFocusEffect } from "expo-router";

const womenCat = [
  {
    src: images.scrolHorWomen1,
    title: "T-Shirts",
  },
  {
    src: images.scrolHorWomen2,
    title: "Bluoses",
  },
  {
    src: images.scrolHorWomen3,
    title: "Coats",
  },
  {
    src: images.scrolHorWomen4,
    title: "Dress",
  },
  {
    src: images.scrolHorWomen5,
    title: "Suits",
  },
];

const Women = () => {
  const [womenProducts, setWomenProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  async function fetchData() {
    setIsLoading(true);
    const data = await getProducts("section", "women");
    setIsLoading(false);
    setWomenProducts(data);
  }
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle
          srcIconLeft={icons.chat}
          srcIconRight={icons.favourite}
          srcIconMiddle={icons.women}
        />
        <SearchBar />
        <TitleWithLine
          title="SHOP ALL CATEGORIES"
          addStyle="font-[300]"
          size="w-full"
        />
        <FlatList
          className="mt-6 w-11/12 mx-auto"
          data={womenCat}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.src}
          renderItem={({ item }) => (
            <CustomIcon
              blur={10}
              addStyleImage=" text-center h-[64px] w-[64px] "
              src={item.src}
              title={item.title}
              price={item.price}
              addStyleText="text-xs"
              addStyleView="h-[92px]"
            />
          )}
        />
        {isLoading ? (
          <FlatList
            className="mt-6 w-11/12 mx-auto"
            data={[{ id: 1 }, { id: 2 }]}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={() => <FlatHorScrolLoading />}
          />
        ) : (
          <FlatList
            className="mt-6 w-11/12 mx-auto"
            data={womenProducts?.slice(0, 3)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FlatHorScrol
                blur={item.section === "women" ? 10 : 0}
                imgsrc={item.imgsrc}
                name={item.name}
                price={item.price}
                id={item.id}
              />
            )}
          />
        )}

        <View className="w-11/12 mx-auto flex flex-row justify-between mt-8">
          <BoldTitle title="Curated for you" addstyle="" />
          <SquareText
            title="SHOP NOW"
            addstyle="text-Font text-third bg-secondary text-white h-[40px] w-[106px] rounded-[2px]"
          />
        </View>

        <TitleWithLine title="SHOP ALL" addStyle="font-[300]" size="w-full" />
        <View className="w-11/12 mx-auto">
          {isLoading ? (
            <View className="flex">
              <ProductCurdLoading />
              <ProductCurdLoading />
            </View>
          ) : (
            womenProducts
              ?.slice(2, 4)
              .map((item) => (
                <ProductCurd
                  allData={item}
                  id={item.id}
                  key={item.id}
                  blur={10}
                  imgsrc={item.imgsrc}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                />
              ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Women;
