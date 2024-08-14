import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import HeadTitle from "../components/HeadTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../constants";
import { Image } from "react-native";
import BoldTitle from "../components/BoldTitle";
import { router, useFocusEffect } from "expo-router";
import Hr from "../components/Hr";
import { useState } from "react";
import ProductCart from "../components/ProductCart";
import { deleteCart, getCart, insertOrder } from "../lib/supabase";
import ProductCartLoading from "../components/loading/ProductCartLoading";
import Dues from "../components/Dues";

const Checkout = () => {
  const [paymentCard, setPaymentCard] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [isLoadingClick, setIsLoadingClick] = useState();
  const [rerender, setRerender] = useState();
  const [sum, setSum] = useState();
  const date = new Date().toISOString().split("T")[0];
  function generateRandomId() {
    return Math.floor(100000000 + Math.random() * 900000000);
  }
  function formatDateToShort() {
    const options = { year: "numeric", month: "short", day: "numeric" };
    let dateEnd = new Date();
    dateEnd.setDate(dateEnd.getDate() + 3);
    dateEnd = dateEnd.toLocaleDateString("en-US", options);
    let dateStart = new Date();
    dateStart = dateStart.toLocaleDateString("en-US", options);
    return { dateStart, dateEnd };
  }
  async function fetchData(loading) {
    {
      loading && setIsLoading(true);
    }
    const cart = await getCart();
    setSum(
      cart.reduce(
        (n, { price, quantity_product, discount }) =>
          n + (price - price * (discount / 100)) * quantity_product,
        0
      )
    );

    setCart(
      cart.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    {
      loading && setIsLoading(false);
    }
  }
  function insertOrderFun() {
    cart.map((item) => {
      const id = generateRandomId();
      const { dateStart, dateEnd } = formatDateToShort();
      console.log("dateStart, dateEnd", dateStart, dateEnd);
      insertOrder({
        ...item,
        status: "PENDING",
        id_order: id,
        date_order: dateStart,
        date_arrived: dateEnd,
        payment: paymentCard ? "credit card" : "cash money",
      });
    });
    cart.map((item) => {
      deleteCart(item.id);
    });
    setIsLoadingClick(false);
    router.replace("/orders");
  }
  useFocusEffect(
    useCallback(() => {
      fetchData(true);
    }, [])
  );
  return (
    <SafeAreaView>
      <View className="bg-[#F2F4F7] z-10 flex-row justify-between p-3 absolute bottom-0 h-[90px] w-full rounded-t-2xl border-t-[0.5px] border-x-[0.5px] border-slate-300">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={insertOrderFun}
          className={`w-11/12 mx-auto shadow-2xl h-full bg-secondary font-semibold rounded-lg flex justify-center`}
        >
          {isLoadingClick ? (
            <Text className="text-xl text-white mx-auto text-center">
              loading...
            </Text>
          ) : (
            <Text className="text-xl text-white mx-auto text-center">
              Place Order
            </Text>
          )}
        </TouchableOpacity>
      </View>

      <ScrollView className="relative mb-[90px]">
        <HeadTitle
          srcIconLeft={icons.back}
          srcIconMiddle={icons.checkout}
          srcIconRight={icons.favourite}
        />
        <View className="w-11/12 mx-auto mb-2">
          <BoldTitle
            title="Ship To"
            addStyle="w-11/12 my-2 font-bold text-lg mx-auto text-secondary"
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => router.push("(profile)/address")}
            className="relative"
          >
            <Image source={images.adressblur} className="mx-auto" />
            <View className="absolute flex-row top-[40%] right-[30%] bg-slate-300/50 rounded-md border border-white px-3 py-2">
              <Image source={icons.pluscircle} className=" " />
              <Text className="text-lg ml-2 text-white font-bold mb-1">
                Add Adress
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Hr />
        <BoldTitle
          title="Payment Method"
          addStyle="w-11/12 my-2 font-bold text-xl mx-auto text-secondary"
        />
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPaymentCard(true)}
          className={`w-11/12 justify-between px-4 mx-auto  rounded-md ${
            !paymentCard ? "border-slate-300 h-16" : "border-black h-24"
          } border shadow-2xl `}
        >
          <View className="flex-row w-full justify-between mt-3">
            <View className="flex-row my-auto ">
              <Image
                source={paymentCard ? icons.dotblack : icons.dotwhitetwo}
                className="w-[13px] h-[13px] mt-2 rounded-full"
              />
              <Text className="text-lg font-semibold ml-3">Credit Card</Text>
            </View>
            <Image source={icons.iconcard} className="my-auto" />
          </View>
          {paymentCard && (
            <View className="mx-auto w-full">
              <View className="bg-slate-300 h-[1.5px] mb-1 w-8/12 mx-auto" />
              <TouchableOpacity onPress={() => router.push("payment")}>
                <Text className="mx-auto text-[17px] mb-3 text-blue-700">
                  Edit Cards
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPaymentCard(false)}
          className={`w-11/12 mt-2 justify-between px-4 mx-auto h-16 flex-row rounded-md ${
            paymentCard ? "border-slate-300" : "border-black"
          } border`}
        >
          <View className="flex-row my-auto">
            <Image
              source={!paymentCard ? icons.dotblack : icons.dotwhitetwo}
              className="w-[13px] h-[13px] mt-2 rounded-full"
            />
            <Text className="text-lg font-semibold ml-3">Cash Money</Text>
          </View>
          <Image source={icons.iconcashout} className="my-auto" />
        </TouchableOpacity>
        <Hr />
        <BoldTitle
          title="Order Summary
    "
          addStyle="w-11/12 my-2 font-bold text-xl mx-auto text-secondary"
        />
        <Dues sum={sum} paymentCard={paymentCard} />
        <Hr />
        <BoldTitle
          title="Review Your Order"
          addStyle="w-11/12 mt-3 font-bold text-xl mx-auto text-secondary"
        />
        <View className="w-11/12  ">
          {!isLoading ? (
            cart.map((item) => (
              <ProductCart
                key={item.id}
                cartData={item}
                rerender={rerender}
                setRerender={setRerender}
                checkout
              />
            ))
          ) : (
            <ProductCartLoading />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checkout;
