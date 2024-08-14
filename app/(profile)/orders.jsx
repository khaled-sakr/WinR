import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import HeadTitle from "../../components/HeadTitle";
import ProductOrders from "../../components/ProductOrders";
import { router } from "expo-router";
import { getOrder } from "../../lib/supabase";

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
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconLeft={icons.back} middleText="Orders" />
        {orders.map((item) => (
          <View>
            <ProductOrders title={item.status} orderData={item} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
