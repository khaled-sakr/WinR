import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useCallback, useRef } from "react";
import HeadTitle from "../components/HeadTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../constants";
import { Image } from "react-native";
import BoldTitle from "../components/BoldTitle";
import { Redirect, router, useFocusEffect } from "expo-router";
import Hr from "../components/Hr";
import { useState } from "react";
import ProductCart from "../components/ProductCart";
import {
  deleteCart,
  getCards,
  getCart,
  getUsers,
  insertOrder,
} from "../lib/supabase";
import ProductCartLoading from "../components/loading/ProductCartLoading";
import Dues from "../components/Dues";
import { Animated } from "react-native";

const Checkout = () => {
  const scrollViewRef = useRef(null);
  const [paymentCard, setPaymentCard] = useState(false);
  const [cart, setCart] = useState([]);
  const [checkAddress, setCheckAddress] = useState(true);
  const [checkCard, setCheckCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingClick, setIsLoadingClick] = useState();
  const [rerender, setRerender] = useState();
  const [sum, setSum] = useState();
  /////////////////////////////////////////////
  /////////////////////////////////////////////
  const scrollToAddress = () => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };
  const scrollToCard = () => {
    scrollViewRef.current?.scrollTo({ y: 150, animated: true });
  };
  /////////////////////////////////////////////
  const translateX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(translateX, {
      toValue: 250,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const endAnimation = () => {
    Animated.timing(translateX, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  /////////////////////////////////////////////
  /////////////////////////////////////////////
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
    const addressUser = await getUsers();
    const cardsUser = await getCards();
    setCheckAddress(addressUser[0].address && addressUser[0].phoneNumber);
    setCheckCard(
      cardsUser.filter((item) => item.chosen_card === true).length > 0
    );
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
    if (isLoading || isLoadingClick) return null;
    if (paymentCard ? checkAddress && checkCard : checkAddress) {
      cart.map((item) => {
        const id = generateRandomId();
        const { dateStart, dateEnd } = formatDateToShort();
        insertOrder({
          ...item,
          status: "PENDING",
          id_order: id,
          date_order: dateStart,
          date_arrived: dateEnd,
          payment: paymentCard ? "credit card" : "cash money",
        });
      });

      setIsLoadingClick(true);
      setTimeout(() => {
        cart.map((item) => {
          deleteCart(item.id);
        });
        router.replace("/orderStation");
        setIsLoadingClick(false);
        endAnimation();
      }, 2800);
    } else {
      !checkAddress ? scrollToAddress() : scrollToCard();
    }
  }
  useFocusEffect(
    useCallback(() => {
      fetchData(true);
    }, [])
  );
  if (!isLoading && cart.length === 0) return <Redirect href="/home" />;
  return (
    <SafeAreaView>
      <View className="bg-[#F2F4F7] z-10 flex-row justify-between p-3 absolute bottom-0 h-[90px] w-full rounded-t-2xl border-t-[0.5px] border-x-[0.5px] border-slate-300">
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            if (isLoading || isLoadingClick) return null;
            startAnimation();
            insertOrderFun();
          }}
          className={`w-11/12 mx-auto shadow-2xl h-full bg-secondary font-semibold rounded-lg flex justify-center ${
            !isLoadingClick ? "bg-secondary" : "bg-white"
          }`}
        >
          {isLoadingClick ? (
            <Text className="text-xl text-white mx-auto text-center">
              arriving...
            </Text>
          ) : (
            <Text className="text-xl text-white mx-auto text-center">
              Place Order
            </Text>
          )}

          {isLoadingClick && (
            <Animated.Image
              style={[
                {
                  transform: [{ translateX }],
                },
              ]}
              source={icons.deliveryTruck}
              resizeMode="contain"
              className="h-[68px] absolute translate-x-72 bg-transparent w-20 rounded-md"
            />
          )}
        </TouchableOpacity>
      </View>

      <ScrollView className="relative mb-[90px]" ref={scrollViewRef}>
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
            onPress={() => {
              router.push("(profile)/address");
            }}
            className="relative"
          >
            <Image source={images.adressblur} className="mx-auto " />
            <View
              className={`absolute flex-row top-[40%] right-[30%]  rounded-md border border-white px-3 py-2 ${
                checkAddress ? "bg-slate-300/50" : "bg-red-500 opacity-80"
              }`}
            >
              <Image source={icons.pluscircle} className="" />
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
                <Text
                  className={`mx-auto text-[17px]  mb-3 ${
                    checkCard ? "text-blue-700" : " text-red-700"
                  } `}
                >
                  {checkCard ? "Edit Cards" : "Set One Default"}
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
                blur={item.section === "women" ? 10 : 0}
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
