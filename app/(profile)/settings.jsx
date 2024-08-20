import { Alert, Animated, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import { icons } from "../../constants";
import DropDown from "../../components/DropDown";
import CustomButton from "../../components/CustomButton";
import { TouchableOpacity } from "react-native";
import { router, useFocusEffect } from "expo-router";
import {
  changeCountry,
  changeLanguage,
  changeNotification,
  getUsers,
  logOut,
} from "../../lib/supabase";
import AsyncStorage from "@react-native-async-storage/async-storage";
const countryOptions = [
  { title: "Egypt", value: "Egypt" },
  { title: "KSA", value: "KSA" },
  { title: "UAE", value: "UAE" },
];
const languageOptions = [
  { title: "Arabic", value: "Arabic" },
  { title: "English", value: "English" },
  { title: "Frensh", value: "Frensh" },
];
const Settings = () => {
  const [user, setUser] = useState();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState();
  const [pressedAnimated, setPressedAnimated] = useState(false);
  const [notification, setNotfication] = useState();
  const AuthList = AsyncStorage.getItem("AuthList");
  console.log(AuthList);

  async function signOut() {
    setIsLoading(true);
    try {
      const { error } = logOut();
      if (error) {
        Alert.alert("Error signing out:", error.message);
      } else {
        setIsLoading(false);
        router.replace("welcome");
      }
    } catch (error) {
      throw new error();
    }
  }
  useFocusEffect(
    useCallback(() => {
      async function fetchdata() {
        setIsLoading(true);
        const user = await getUsers();
        setNotfication(user[0]["notification"]);
        setUser(user[0]);
        animatedAction();
        setIsLoading(false);
      }
      fetchdata();
    }, [])
  );
  async function confirmFun() {
    if (isLoading) return;
    setIsLoading(true);
    await changeCountry(country);
    await changeLanguage(language);
    await changeNotification(notification);
    setIsLoading(false);
  }
  //////////////////////////////////////////
  const fadeAnim = useRef(new Animated.Value(0)).current;
  function animatedAction() {
    if (notification) {
      Animated.timing(fadeAnim, {
        toValue: 6,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 32,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }
  /////////////////////////////////////
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle srcIconLeft={icons.back} middleText="settings" />
        <View className="border w-11/12 mx-auto mt-14 mb-4 rounded-md  h-[52px] border-slate-400">
          <DropDown
            settings
            isChanging={isLoading}
            setValue={setCountry}
            options={countryOptions}
            placeholder={
              (isLoading === true && "Loading...") || user?.country || "Country"
            }
          />
        </View>
        <View className="border w-11/12 mx-auto my-2 rounded-md h-[52px] border-slate-400">
          <DropDown
            settings
            isChanging={isLoading}
            setValue={setLanguage}
            options={languageOptions}
            placeholder={
              (isLoading === true && "Loading...") ||
              user?.language ||
              "Language"
            }
          />
        </View>
        <View className="w-11/12 h-14 mt-20 flex-row justify-between mx-auto">
          <Text className="w-6/12 font-semibold text-lg mt-3">
            Notification
          </Text>
          <TouchableOpacity
            className="w-[16%] flex-row "
            onPress={() => {
              setNotfication((e) => !e);
              animatedAction();
              setPressedAnimated(true);
            }}
          >
            <View
              className={`px-1 w-full  ${
                isLoading
                  ? "bg-gray-300"
                  : notification
                  ? "bg-secondary"
                  : "bg-gray-300"
              } 
                h-7 my-auto rounded-[30px] mr-3`}
            >
              <Animated.View
                style={[{ translateX: fadeAnim }]}
                className={`h-5 my-auto 
                    ${!pressedAnimated && !notification && "translate-x-[5px]"}
                 absolute top-1 transition-all w-5/12 ${
                   isLoading
                     ? "bg-transparent"
                     : notification
                     ? `bg-slate-300`
                     : `bg-slate-900`
                 }    rounded-2xl`}
              ></Animated.View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-11/12 mx-auto mt-4">
          <Text className="text-lg text-red-500 mb-4 mt-2">Delete Account</Text>
        </TouchableOpacity>
        <CustomButton
          onPress={confirmFun}
          title="CONFIRM"
          size="small"
          type="finalButtoms"
          addStyle="mt-16"
        />
        <CustomButton
          loading={isLoading}
          onPress={signOut}
          title="Log Out"
          size="small"
          type="finalButtoms"
          addStyle="mt-2"
          logout
          cancel
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
