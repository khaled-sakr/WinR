import {
  Image,
  ScrollView,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import { icons, images } from "../../constants";
import SearchBar from "../../components/SearchBar";
import FlatHorScrol from "../../components/FlatHorScrol";
import BoldTitle from "../../components/BoldTitle";
import { router } from "expo-router";
import Hr from "../../components/Hr";
import ProductCart from "../../components/ProductCart";
import Dues from "../../components/Dues";
import { getCart, getProducts } from "../../lib/supabase";
import FlatHorScrolLoading from "../../components/loading/FlatHorScrolLoading";
import ProductCartLoading from "../../components/loading/ProductCartLoading";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [offers, setOffers] = useState([]);
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cart = await getCart();
      const data = await getProducts("section", "men");
      setCart(cart);
      setOffers(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (cart.length === 0 && !isLoading)
    return (
      <>
        <SafeAreaView>
          <ScrollView>
            <HeadTitle
              titleLeft={`0 item`}
              srcIconRight={icons.favourite}
              srcIconMiddle={icons.winr}
            />
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
          </ScrollView>
        </SafeAreaView>
      </>
    );

  return (
    <View>
      {!isLoading && (
        <View className="bg-[#F2F4F7] z-10 justify-between px-6 pt-2.5 absolute bottom-0 h-[100px] w-full rounded-t-2xl border-t-[1px] border-r-[0.5px] border-l-[0.5px] border-slate-300">
          <View className="h-[30px] items-center flex-row justify-between">
            <Text className="text-lg text-slate-400 font-semibold">1 Item</Text>
            <Text className="text-lg text-slate-700 font-semibold">
              EGP 150
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

          {isLoading ? (
            <FlatList
              className="mt-3 w-full mx-auto"
              data={[{ id: 1 }]}
              keyExtractor={(item) => item.id}
              renderItem={() => <ProductCartLoading cart />}
            />
          ) : (
            <FlatList
              className="mt-3 w-11/12 mx-auto"
              data={cart}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ProductCart cartData={item} cart />}
            />
          )}
          <Hr />
          <BoldTitle
            title="We think you might like these"
            addStyle="w-11/12 mt-2 text-base mx-auto  text-secondary"
          />
          {isLoading ? (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                horizontal
                className="mt-6 w-11/12 mx-auto"
                data={[{ id: 1 }, { id: 2 }]}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={() => <FlatHorScrolLoading />}
              />
            </ScrollView>
          ) : (
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <FlatList
                className="mt-3 w-11/12 mx-auto"
                data={offers.slice(0, 4)}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <FlatHorScrol
                    name={item?.name}
                    imgsrc={item?.imgsrc}
                    price={item?.price}
                  />
                )}
              />
            </ScrollView>
          )}

          {!isLoading && cart.length !== 0 && <Hr />}
          {!isLoading && cart.length !== 0 && <Dues />}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Cart;
