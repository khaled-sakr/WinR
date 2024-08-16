import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import HeadTitle from "../../../components/HeadTitle";
import { icons, images } from "../../../constants";
import SearchBar from "../../../components/SearchBar";
import FavIcon from "../../../components/FavIcon";
import BoldTitle from "../../../components/BoldTitle";
import ProductCurd from "../../../components/ProductCurd";
import DropDown from "../../../components/DropDown";
import { useState } from "react";
import ButtonSize from "../../../components/ButtonSize";
import { FlatList } from "react-native";
import ImageProduct from "../../../components/ImageProduct";
import ProductCurdLoading from "../../../components/loading/ProductCurdLoading";
import Hr from "../../../components/Hr";
import {
  changeQuantity,
  changeSize,
  checkCart,
  getProducts,
  insertCart,
} from "../../../lib/supabase";
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
const ProductId = () => {
  const { id } = useLocalSearchParams();
  console.log(id);
  const [thisProduct, setThisProduct] = useState([]);
  const [quantity, setQuantity] = useState();
  const [offers, setOffers] = useState([]);
  const [checkCartState, setCheckCartState] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingClick, setIsLoadingClick] = useState();
  const [isChanging, setIsChanging] = useState();
  const [isSize, setIsSize] = useState(true);
  const [size, setSize] = useState();
  const [prodNumImg, setprodNumImg] = useState(0);

  // 1. first at all fetch id
  async function fetchData() {
    setIsLoading(true);
    const carts = await getProducts("id", id);
    const offer = await getProducts("section", carts[0].section);
    setThisProduct(carts[0]);
    setOffers(offer.slice(0, 2));
  }

  //2. checker function
  async function checkCartFun() {
    setIsLoadingClick(true);
    const cart = await checkCart(id);
    setQuantity(cart?.quantity_product || 1);
    setSize(cart?.size);
    console.log("cart", cart);
    cart ? setCheckCartState(cart[0]) : setCheckCartState([]);
    setIsLoadingClick(false);
  }
  // 3.sync function
  useEffect(() => {
    setIsLoading(true);
    async function sycnFunc() {
      // setQuantity(1);
      await fetchData(true);
      await checkCartFun();
      setIsLoading(false);
    }
    setCheckCartState([]);
    sycnFunc();
  }, [id]);
  //4. insert and fetch checker
  async function insertCartFun() {
    if (isLoading || checkCartState?.length !== 0) return;
    setIsLoadingClick(true);
    await insertCart({
      ...thisProduct,
      quantity_product: quantity || 1,
      size: size || "M",
    });
    checkCartFun();
    setIsLoadingClick(false);
  }

  useEffect(() => {
    async function changeQuantityFun() {
      setIsChanging(true);
      await changeQuantity(
        thisProduct?.id,
        checkCartState?.quantity_product || quantity
      );
      setIsChanging(false);
    }
    changeQuantityFun();
  }, [quantity]);
  useEffect(() => {
    async function changeSizeFun() {
      setIsSize(true);
      await changeSize(thisProduct?.id, checkCartState?.size || size);
      setIsSize(false);
    }
    changeSizeFun();
  }, [size]);

  // useFocusEffect(
  //   useCallback(() => {
  //     //     // setSize(checkCartState?.size);
  //     //     // setQuantity(checkCartState?.quantity_product || quantity || 1);
  //     //     // setQuantity(checkCartState.quantity_product || quantity || 1);
  //     //     //     // thisProduct?.quantity && setQuantity(thisProduct?.quantity);
  //     //     //     // setSize("M");
  //     //     //     // setQuantity(thisProduct?.quantity);
  //     //     //     // fetchData(true);
  //     setQuantity(1);
  //   }, [])
  // );
  const opacity = useRef(new Animated.Value(1)).current;
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

  /////////////////////////////////////////////////
  const handleScroll = (event) => {
    setprodNumImg(event.nativeEvent.contentOffset.x);
  };
  const flatListRef = useRef(null);
  const scrollToIndex = (index) => {
    flatListRef.current.scrollToIndex({ animated: true, index: index });
  };
  const listData = [
    { src: thisProduct.imgsrc, id: 1 },
    { src: thisProduct.imgsrc, id: 2 },
    { src: thisProduct.imgsrc, id: 3 },
  ];
  /////////////////////////////////////////////////
  if (isLoading)
    return (
      <SafeAreaView>
        <ScrollView className={`relative ${isLoading ? "mb-0" : "mb-[100px]"}`}>
          <HeadTitle
            srcIconLeft={icons.back}
            srcIconRight={icons.favourite}
            srcIconMiddle={icons.winr}
          />
          <SearchBar />
          <Animated.View
            style={[{ opacity }]}
            className="relative w-[90vw] mx-auto mt-20"
          >
            <View className="absolute right-0 top-0 h-8 w-8 bg-gray-300 rounded-md" />
            <View className="absolute left-0 -top-12 h-8 w-20 bg-gray-300 rounded-md" />
            <View className="mx-auto rounded-xl w-[250px] h-[305px]  bg-gray-300" />
          </Animated.View>

          <Animated.View style={[{ opacity }]} className="mx-auto w-11/12 mt-4">
            <View className="h-6 rounded-md w-6/12  bg-gray-300 pt-3" />
            <View className="h-6 rounded-md w-6/12  bg-gray-300 pt-3 my-2" />
            <View className="h-6 rounded-md w-6/12  bg-gray-300 pt-3 " />
          </Animated.View>
          <Animated.View
            style={[{ opacity }]}
            className="w-11/12 mt-10 mx-auto space-y-3"
          >
            <View className="bg-gray-300 font-semibold h-8 w-9/12" />
            <View className="bg-gray-300 font-semibold h-8 w-9/12" />
            <View className="bg-gray-300 font-semibold h-8 w-9/12" />
          </Animated.View>
          <Hr />
          <View className="w-11/12 mx-auto mt-4">
            <ProductCurdLoading />
            <ProductCurdLoading />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  return (
    <SafeAreaView>
      {!isLoading && (
        <View className="bg-[#F2F4F7] z-10 flex-row justify-between px-6 py-3 absolute bottom-0 h-[70px] w-full rounded-t-2xl border-t-[0.5px] border-r-[0.5px] border-l-[0.5px] border-slate-300">
          <View className="relative mx-auto border rounded-md border-slate-400 px-4">
            <Text className="text-slate-400 text-center">QTY</Text>
            <DropDown
              placeholder={checkCartState?.quantity_product || quantity}
              options={numberOfOptions}
              setValue={setQuantity}
              addStyle="absolute top-1"
              isChanging={isChanging}
              setIsChanging={setIsChanging}
            />
          </View>
          <View className="w-7/12">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={insertCartFun}
              className={`w-11/12 mx-auto shadow-2xl  ${
                checkCartState?.length !== 0 ? "bg-slate-700" : "bg-secondary"
              } font-semibold rounded-md flex justify-center `}
            >
              <Text className="text-center text-white text-lg py-2 ">
                {isLoadingClick
                  ? "Loading..."
                  : checkCartState?.length !== 0
                  ? "In Cart"
                  : "Add To Cart"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView className={`relative ${isLoading ? "mb-0" : "mb-[80px]"}`}>
        <HeadTitle
          srcIconLeft={icons.back}
          srcIconRight={icons.favourite}
          srcIconMiddle={icons.winr}
        />
        <SearchBar />

        <Text className="w-11/12 text-lg font-bold text-stone-600 my-5 mx-auto">
          T-shirt
        </Text>
        <View className="w-11/12 mx-auto relative">
          <FlatList
            ref={flatListRef}
            data={listData}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item, index) => index.toString()}
            onScroll={handleScroll}
            renderItem={({ item }) => (
              <ImageProduct
                isLoading={isLoading}
                src={item.src}
                title={item.title}
              />
            )}
          />
          <View className="w-[15%] mx-auto flex-row justify-between mt-6">
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => scrollToIndex(0)}
            >
              <Image
                source={
                  prodNumImg >= 0 && prodNumImg < 200
                    ? icons.dotblack
                    : icons.dotwhite
                }
                className="rounded-full"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => scrollToIndex(1)}
            >
              <Image
                source={
                  prodNumImg > 200 && prodNumImg < 400
                    ? icons.dotblack
                    : icons.dotwhite
                }
                className="rounded-full"
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => scrollToIndex(2)}
            >
              <Image
                source={prodNumImg > 400 ? icons.dotblack : icons.dotwhite}
                className="rounded-full"
              />
            </TouchableOpacity>
          </View>
          <FavIcon
            size="w-[45px] h-[45px] p-2.5"
            allData={thisProduct}
            id={thisProduct.id}
          />
        </View>

        <View>
          <Text className="w-11/12 mx-auto font-bold text-Font text-xl pt-3 mt-5">
            <Text className="text-stone-500 font-semibold text-xs">EGP</Text>
            {thisProduct.price -
              thisProduct.price * (thisProduct.discount / 100)}
          </Text>
          <Text className="font-bold text-green-500 text-lg pt-1 mx-auto w-11/12">
            <Text className="text-stone-500 font-[300]  line-through">
              {thisProduct.price}
            </Text>
            {"  "}
            {thisProduct.discount}%
          </Text>
          <Text
            className={` w-11/12 mt-1 mx-auto text-xs ${
              thisProduct.quantity <= 10 ? "text-red-500" : "text-green-500"
            } font-bold`}
          >
            Low stock only {thisProduct.quantity} left
          </Text>
        </View>

        <View className="w-11/12 flex-row mt-4 border-stone-400 border-[0.75px] px-3 py-2 rounded-xl mx-auto">
          <View className="mb-2">
            <Text className="font-bold text-font text-lg mr-3 my-auto items-center">
              Size:
            </Text>
          </View>
          <View className="flex-row justify-between w-10/12 h-10">
            <ButtonSize
              setSize={setSize}
              isSize={isSize}
              size={size}
              currentSize="S"
            />
            <ButtonSize
              setSize={setSize}
              isSize={isSize}
              size={size}
              currentSize="M"
            />
            <ButtonSize
              setSize={setSize}
              isSize={isSize}
              size={size}
              currentSize="L"
            />
            <ButtonSize
              setSize={setSize}
              isSize={isSize}
              size={size}
              currentSize="XL"
            />
            <ButtonSize
              setSize={setSize}
              isSize={isSize}
              size={size}
              currentSize="XXL"
            />
          </View>
        </View>
        <Hr />
        <View className="w-11/12 mx-auto space-y-3">
          <Text className="text-slate-600 font-semibold text-lg">
            Highlights
          </Text>
          <Text className="text-slate-500 ml-2">
            • The go-to graphics you want in a super soft jersey you gotta feel
            to believe.
          </Text>
          <Text className="text-lg font-semibold text-slate-600">Overview</Text>
          <Text className="text-slate-500 ml-2">016-MENS GRAPHICS</Text>
        </View>
        <Hr />

        <View className="w-11/12 mx-auto space-y-3 mt-2 mb-4">
          <Text className="text-slate-600  text-lg">User Reviews</Text>
          <View className="h-14 flex-row ">
            <Text className="w-4/12 h-full text-4xl text-center pt-2">4.4</Text>
            <View className="justify-center">
              <View className="flex space-x-1 flex-row">
                <Image source={icons.star} className="w-[20px] h-[20px]" />
                <Image source={icons.star} className="w-[20px] h-[20px]" />
                <Image source={icons.star} className="w-[20px] h-[20px]" />
                <Image source={icons.star} className="w-[20px] h-[20px]" />
                <Image source={icons.starHalf} className="w-[20px] h-[20px]" />
              </View>
              <Text className="text-slate-500">Based on 49 ratings</Text>
            </View>
          </View>
          <Text className="text-slate-600  font-[400] text-sm">
            There are 49 customers raitings and 1 customer review
          </Text>
        </View>
        <Hr />
        <BoldTitle title="Your Common Brands" addStyle="w-11/12 my-4 mx-auto" />
        <View className="w-11/12 mx-auto">
          {offers.map((item) => (
            <ProductCurd
              key={item.id}
              allData={item}
              imgsrc={{ uri: item.imgsrc }}
              name={item.name}
              price={item.price}
              discount={item.discount}
              id={item.id}
              category={item.category}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductId;
