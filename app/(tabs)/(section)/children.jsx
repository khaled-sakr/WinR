import { Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import TitleWithLine from "../../../components/TitleWithLine";
import { Link, useFocusEffect } from "expo-router";
import CustomIcon from "../../../components/CustomIcon";
import { icons, images } from "../../../constants";
import HeadTitle from "../../../components/HeadTitle";
import SearchBar from "../../../components/SearchBar";
import ProductCurdWithDet from "../../../components/ProductCurdWithDet";
import { getProducts } from "../../../lib/supabase";
import ProductCurdWithDetLoading from "../../../components/loading/ProductCurdWithDetLoading";
import { FlatGrid } from "react-native-super-grid";
import { ScrollView } from "react-native";
const Children = () => {
  const [childrenProducts, setChildrenProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();
  async function fetchData() {
    setIsLoading(true);
    const data = await getProducts("section", "children");
    setIsLoading(false);
    setChildrenProducts(data);
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
          srcIconMiddle={icons.children}
        />
        <SearchBar />
        <TitleWithLine
          title="SHOP ALL CATEGORIES"
          addStyle="font-[300]"
          size="w-full"
        />
        <View className="w-11/12 h-fit mt-4 flex-row flex justify-between mx-auto ">
          <Link href="/categories/t-shirt">
            <CustomIcon src={images.tshirt} title="t-shirt" />
          </Link>
          <Link href="/categories/shirt">
            <CustomIcon src={images.shirt} title="shirt" />
          </Link>
          <Link href="/categories/sweat-shirt">
            <CustomIcon src={images.sweatshirt} title="sweat shirt" />
          </Link>
        </View>
        <View className="w-11/12 h-fit mt-2 flex-row flex justify-between mx-auto ">
          <Link href="/categories/Fashion">
            <CustomIcon src={images.fashion} title="Fashion" />
          </Link>
          <Link href="/categories/Sport">
            <CustomIcon src={images.sport} title="Sport" />
          </Link>
          <Link href="/categories/Swim-Wear">
            <CustomIcon src={images.swimming} title="Swim Wear" />
          </Link>
        </View>
        <TitleWithLine title="SHOP ALL" addStyle="font-[300]" size="w-full" />
        <View className="w-[100%] flex-row justify-between mx-auto my-100">
          {isLoading ? (
            [{ id: 1 }, { id: 2 }].map((item) => (
              <ProductCurdWithDetLoading key={item.id} />
            ))
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatGrid
                showsVerticalScrollIndicator={false}
                itemDimension={157}
                data={childrenProducts}
                renderItem={({ item }) => (
                  <ProductCurdWithDet
                    allData={item}
                    imgsrc={item?.imgsrc}
                    name={item?.name}
                    price={item?.price}
                    discount={item?.discount}
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

export default Children;
