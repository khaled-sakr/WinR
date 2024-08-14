import { ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryCurd from "../../components/CategoryCurd";
import HeadTitle from "../../components/HeadTitle";
import SearchBar from "../../components/SearchBar";
import { icons, images } from "../../constants";

const CategoriesStation = () => {
  return (
    <SafeAreaView>
      <ScrollView className="mb-2">
        <HeadTitle
          srcIconRight={icons.favourite}
          srcIconMiddle={icons.winr}
          middle
        />
        <SearchBar />
        <CategoryCurd src={images.mencategory} title="Fashion Men" />
        <CategoryCurd src={images.womencategory} title="Fashion Women" />
        <CategoryCurd src={images.childrencategory} title="Fashion children" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoriesStation;
