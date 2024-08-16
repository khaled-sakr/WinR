import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import HeadTitle from "../../components/HeadTitle";
import ProductOrders from "../../components/ProductOrders";
import { router } from "expo-router";
import { getOrder } from "../../lib/supabase";
import ProductOrdersLoading from "../../components/loading/ProductOrdersLoading";
import Hr from "../../components/Hr";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState();

  async function fetchData() {
    setIsLoading(true);

    const orders = await getOrder();

    setOrders(
      orders.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    setIsLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (!isLoading && orders.length === 0) {
    return (
      <SafeAreaView>
        <ScrollView>
          <HeadTitle srcIconLeft={icons.back} middleText="Orders" />

          <Image
            source={icons.alert}
            resizeMode="contain"
            className="w-6/12 h-96 mx-auto"
          />
          <Text className="text-2xl text-center font-semibold">
            NO ITEM IN ORDERS
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconLeft={icons.back} middleText="Orders" />
        {isLoading ? (
          <>
            <ProductOrdersLoading />
            <Hr />
            <ProductOrdersLoading />
            <Hr />
            <ProductOrdersLoading />
          </>
        ) : (
          orders.map((item) => (
            <View key={item.id_order}>
              <ProductOrders
                key={item.id}
                title={item.status}
                orderData={item}
              />
              {orders[orders.length - 1] !== item && <Hr />}
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
