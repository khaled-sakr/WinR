import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import { icons } from "../../constants";
import SearchBar from "../../components/SearchBar";
import FlatHorScrol from "../../components/FlatHorScrol";
import BoldTitle from "../../components/BoldTitle";
import { router, useFocusEffect } from "expo-router";
import Hr from "../../components/Hr";
import ProductCart from "../../components/ProductCart";
import Dues from "../../components/Dues";
import { getCart, getProducts } from "../../lib/supabase";
import FlatHorScrolLoading from "../../components/loading/FlatHorScrolLoading";
import ProductCartLoading from "../../components/loading/ProductCartLoading";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [rerender, setRerender] = useState();
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [sum, setSum] = useState();
  async function fetchData(loading) {
    {
      loading && setIsLoading(true);
    }
    const cart = await getCart();
    const data = await getProducts("section", "men");
    setSum(
      cart?.reduce(
        (n, { price, quantity_product, discount }) =>
          n + (price - price * (discount / 100)) * quantity_product,
        0
      )
    );
    setCart(
      cart?.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setOffers(data);
    {
      loading && setIsLoading(false);
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchData(true);
    }, [])
  );
  useEffect(() => {
    fetchData();
  }, [rerender]);

  return (
    <View>
      {!isLoading && cart.length !== 0 && (
        <View className="bg-[#F2F4F7] z-10 justify-between px-6 pt-2.5 absolute bottom-0 h-[100px] w-full rounded-t-2xl border-t-[1px] border-r-[0.5px] border-l-[0.5px] border-slate-300">
          <View className="h-[30px] items-center flex-row justify-between">
            <Text className="text-lg text-slate-400 font-semibold">
              {cart.length} Item
            </Text>
            <Text className="text-lg text-slate-700 font-semibold">
              EGP {sum + 20}
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push("/checkout")}
            className={`h-[50px] px-4 justify-between flex-row w-11/12 mx-auto shadow-2xl  bg-secondary font-semibold rounded-md`}
          >
            <Text className="text-center text-white text-lg py-3 mx-auto">
              CHECKOUT
            </Text>
            <View className="bg-white h-6 w-6 my-auto rounded-[4px]">
              <Image source={icons.arrowcheck} className="mx-1 mt-1.5" />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <SafeAreaView>
        <ScrollView className={`${isLoading ? "mb-0" : "mb-[100px]"}`}>
          <HeadTitle
            titleLeft={`${cart.length} item`}
            srcIconRight={icons.favourite}
            srcIconMiddle={icons.winr}
          />
          <SearchBar />
          {!isLoading && cart.length === 0 ? (
            <View className="w-11/12 ">
              <Image
                source={icons.emptyCart}
                resizeMode="contain"
                className="w-8/12 m-auto h-96 "
              />
              <Text className="text-2xl text-center ml-10 font-medium">
                NO ITEM IN CART
              </Text>
            </View>
          ) : (
            <>
              <View className="mt-3 space-y-5 w-11/12 mx-auto">
                {!isLoading ? (
                  cart?.map((item) => (
                    <ProductCart
                      blur={item.section === "women" ? 5 : 0}
                      key={item.id}
                      cartData={item}
                      cart
                      setRerender={setRerender}
                      rerender={rerender}
                    />
                  ))
                ) : (
                  <ProductCartLoading cart />
                )}
              </View>
              <Hr />
              <BoldTitle
                title="We think you might like these"
                addStyle="w-11/12 mt-2 text-base mx-auto  text-secondary"
              />
              <ScrollView
                className="mt-3 w-11/12 mx-auto"
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {!isLoading ? (
                  offers
                    ?.slice(0.3)
                    .map((item) => (
                      <FlatHorScrol
                        key={item.id}
                        blur={item.section === "women" ? 5 : 0}
                        id={item.id}
                        name={item.name}
                        imgsrc={item.imgsrc}
                        price={item.price}
                      />
                    ))
                ) : (
                  <>
                    <FlatHorScrolLoading />
                    <FlatHorScrolLoading />
                    <FlatHorScrolLoading />
                  </>
                )}
              </ScrollView>
              {!isLoading && cart.length !== 0 && <Hr />}
              {!isLoading && cart.length !== 0 && <Dues sum={sum} />}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Cart;
