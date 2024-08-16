import { ScrollView, View, FlatList, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../../components/HeadTitle";
import { icons, images } from "../../../constants";
import SearchBar from "../../../components/SearchBar";
import CustomIcon from "../../../components/CustomIcon";
import TitleWithLine from "../../../components/TitleWithLine";
import BoldTitle from "../../../components/BoldTitle";
import SquareText from "../../../components/SquareText";
import FlatHorScrol from "../../../components/FlatHorScrol";
import ProductCurd from "../../../components/ProductCurd";
import { router, useFocusEffect } from "expo-router";
import { getProducts } from "../../../lib/supabase";
import FlatHorScrolLoading from "../../../components/loading/FlatHorScrolLoading";
import ProductCurdLoading from "../../../components/loading/ProductCurdLoading";
const Men = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  async function fetchData() {
    setIsLoading(true);
    const data = await getProducts("section", "men");
    setIsLoading(false);
    setMenProducts(data);
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
          srcIconMiddle={icons.men}
          rerender={isLoading}
        />
        <SearchBar />
        <TitleWithLine
          title="SHOP ALL CATEGORIES"
          addStyle="font-[300]"
          size="w-full"
        />

        <View className="w-11/12 h-fit mt-4 flex-row flex justify-between mx-auto ">
          <TouchableOpacity onPress={() => router.push("/categories/t-shirt")}>
            <CustomIcon src={images.tshirt} title="t-shirt" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/categories/shirt")}>
            <CustomIcon src={images.shirt} title="shirt" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/categories/sweatshirt")}
          >
            <CustomIcon src={images.sweatshirt} title="sweat shirt" />
          </TouchableOpacity>
        </View>
        <View className="w-11/12 h-fit mt-2 flex-row flex justify-between mx-auto ">
          <TouchableOpacity onPress={() => router.push("/categories/fashion")}>
            <CustomIcon src={images.fashion} title="fashion" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/categories/sport")}>
            <CustomIcon src={images.sport} title="Sport" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/categories/swimwear")}>
            <CustomIcon src={images.swimming} title="Swim Wear" />
          </TouchableOpacity>
        </View>
        <View className="w-11/12 mx-auto flex flex-row justify-between mt-8">
          <BoldTitle title="Curated for you" addstyle="text-secondary" />
          <SquareText
            title="SHOP NOW"
            addstyle="text-Font text-third bg-secondary text-white h-[40px] w-[106px] rounded-[2px]"
          />
        </View>
        <View className="bg-[#E0E0E0] w-full h-3 my-3" />
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
            data={menProducts.slice(0, 3)}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <FlatHorScrol
                id={item.id}
                imgsrc={item.imgsrc}
                name={item.name}
                price={item.price}
              />
            )}
          />
        )}

        <TitleWithLine title="SHOP ALL" addStyle="font-[300]" size="w-full" />
        <View className="w-11/12 mx-auto">
          {isLoading ? (
            <View className="flex">
              <ProductCurdLoading />
              <ProductCurdLoading />
            </View>
          ) : (
            menProducts
              .slice(3, 5)
              .map((item) => (
                <ProductCurd
                  allData={item}
                  key={item.id}
                  id={item.id}
                  imgsrc={item.imgsrc}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                  category={item.category}
                />
              ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Men;
