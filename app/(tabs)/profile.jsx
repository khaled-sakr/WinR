import {
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import ImageProfile from "../../components/ImageProfile";
import { icons, images } from "../../constants";
import TabProfile from "../../components/TabProfile";
import { router, useFocusEffect } from "expo-router";
import { getUsers } from "../../lib/supabase";

const profile = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    useCallback(() => {
      async function fetchdata() {
        setLoading(true);
        const user = await getUsers();
        setUser(user[0]);
        setLoading(false);
      }
      fetchdata();
    }, [])
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconMiddle={icons.winr} middle />
        <View className="w-11/12 mx-auto flex-row justify-between h-[90px] mb-16">
          <ImageProfile isLoading={loading} imageProfile={user?.imageProfile} />
          <View className="w-[50%] my-auto">
            <Text
              className={`text-lg font-semibold  ${
                loading ? "text-slate-400" : "text-slate-600"
              }`}
            >
              {loading ? "Loading..." : user?.firstname + " " + user?.lastname}
            </Text>
            <Text className="font-semibold text-slate-600">{user?.email}</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("edit")}
            className="w-[15%] flex-row rounded-lg text-center  bg-secondary h-6 my-auto"
          >
            <Image source={icons.pen} className="ml-2 my-auto" />
            <Text className="my-auto text-white text-center">Edit</Text>
          </TouchableOpacity>
        </View>
        <TabProfile src={icons.order} title="orders" link="/orderStation" />
        <View className="w-full h-[1px] bg-slate-300" />
        <TabProfile src={icons.wallet} title="payment" link="/payment" />
        <View className="w-full h-[1px] bg-slate-300" />
        <TabProfile src={icons.setting} title="setting" link="/settings" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({});
