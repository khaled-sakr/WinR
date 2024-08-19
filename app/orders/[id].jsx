import {
  Animated,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import ProductCart from "../../components/ProductCart";
import { icons } from "../../constants";
import Hr from "../../components/Hr";
import BoldTitle from "../../components/BoldTitle";
import Dues from "../../components/Dues";
import { deleteOrder, getOrderById } from "../../lib/supabase";
import OrderLoading from "../../components/loading/OrderLoading";

const OrderId = () => {
  const { id } = useLocalSearchParams();
  const [rerender, setRerender] = useState(0);
  const [isLoading, setIsLoading] = useState();
  const [thisOrder, setThisOrder] = useState();

  async function fetchData() {
    setIsLoading(true);
    const order = await getOrderById(id);
    setThisOrder(order[0]);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  async function deleteOrderFun() {
    setIsLoading(true);
    await deleteOrder(id);
    setIsLoading(false);
  }
  if (isLoading) return <OrderLoading />;
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconLeft={icons.back} middleText="Orders" />
        <View className="flex-row mt-6 w-11/12 mx-auto justify-between">
          <View className="w-6/12 ">
            <Text className="text-lg font-semibold">
              Orders {thisOrder?.id_order}
            </Text>
            <View className="gap-3 flex-row mt-2">
              <Text className="font-[400] text-slate-900">
                Place On {thisOrder?.date_order}
              </Text>
              <Text className="font-[400] text-slate-500">
                Arrived On {thisOrder?.date_order}🤲🏻
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-row mt-6 w-11/12 mx-auto justify-between">
          <Text
            className={`text-base  ${
              thisOrder?.status === "PENDING"
                ? "text-orange-500"
                : thisOrder?.status === "CANCELED"
                ? "text-red-500"
                : " text-green-500"
            } font-semibold`}
          >
            {thisOrder?.status === "PENDING"
              ? "PENDING"
              : thisOrder?.status === "CANCELED"
              ? "CANCELED"
              : "SENT ARRIVED"}
          </Text>
          {thisOrder?.status === "PENDING" && (
            <TouchableOpacity
              onPress={() => {
                deleteOrderFun();
                router.replace("/orderStation");
              }}
            >
              <Text className="text-lg underline font-semibold text-[#2E1CFF] mx-auto">
                Remove order
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <ProductCart
          blur={thisOrder?.section === "women" ? 5 : 0}
          cartData={thisOrder}
          setRerender={setRerender}
          rerender={rerender}
          overlay={thisOrder?.status === "CANCELED"}
        />
        <Hr />
        <BoldTitle title="Payment Method " addStyle="w-11/12 mx-auto" />
        <View className="flex-row w-11/12 mx-auto my-3 ">
          <Image
            source={
              thisOrder?.payment === "cash money"
                ? icons.iconcashout
                : icons.iconcard
            }
            className="h-[20px] w-[30px] mt-[6px]"
            resizeMode="contain"
          />
          <Text className="text-stone-500 text-lg font-semibold ml-1">
            {thisOrder?.payment}
          </Text>
          {thisOrder?.payment === "cash money" && (
            <Text className="my-auto text-green-500 text-base font-semibold ml-3">
              (On Delivery)
            </Text>
          )}
        </View>
        {thisOrder?.payment === "credit card" && (
          <View className="flex-row w-11/12 my-4 mx-auto">
            <Image
              source={icons.payment1}
              className="h-[20px] w-[30px] mt-[3px]"
              resizeMode="contain"
            />
            <Text className="text-stone-500 text-base font-semibold ml-3 tracking-[6px]">
              1111
            </Text>
            <Text className="text-stone-500 text-base font-semibold mt-[3px]  tracking-[6px]">
              **** **** ****
            </Text>
          </View>
        )}
        <Hr />
        <View className="flex-row justify-between w-11/12 mx-auto">
          <BoldTitle title="Order Summary" />
          <Text className="text-gray-400 text-lg font-semibold mt-1">
            {" "}
            1 item
          </Text>
        </View>
        <Dues sum={thisOrder?.price} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderId;
