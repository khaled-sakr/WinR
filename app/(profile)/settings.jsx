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
  const [isChangingLanguage, setIsChangingLanguage] = useState();
  const [isChangingNotification, setIsChangingNotification] = useState();
  const [isChangingCountry, setIsChangingCountry] = useState();
  const [language, setLanguage] = useState();
  const [loading, setLoading] = useState(false);
  const [notfication, setNotfication] = useState(false);
  const AuthList = AsyncStorage.getItem("AuthList");
  console.log(AuthList);

  async function signOut() {
    setLoading(true);
    try {
      const { error } = logOut();
      if (error) {
        Alert.alert("Error signing out:", error.message);
      } else {
        setLoading(false);
        router.replace("welcome");
      }
    } catch (error) {
      throw new error();
    }
  }
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

  useEffect(() => {
    async function changeCountryFun() {
      setIsChangingCountry(true);
      await changeCountry(country);
      setIsChangingCountry(false);
    }
    changeCountryFun();
  }, [country]);
  //////////////////////////////////////
  useEffect(() => {
    async function changeLanguageFun() {
      setIsChangingLanguage(true);
      await changeLanguage(language);
      setIsChangingLanguage(false);
    }
    changeLanguageFun();
  }, [language]);
  //////////////////////////////////////
  useEffect(() => {
    async function changeNotificationFun() {
      setIsChangingNotification(true);
      await changeNotification(notfication);
      setIsChangingNotification(false);
    }
    changeNotificationFun();
  }, [notfication]);
  //////////////////////////////////////////
  const fadeAnim = useRef(new Animated.Value(0)).current;
  function animatedAction() {
    if (notfication) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 32,
        duration: 300,
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
            isChanging={isChangingCountry}
            setValue={setCountry}
            options={countryOptions}
            placeholder={
              (isChangingCountry === true && "Loading...") ||
              user?.country ||
              "Country"
            }
          />
        </View>
        <View className="border w-11/12 mx-auto my-2 rounded-md h-[52px] border-slate-400">
          <DropDown
            settings
            isChanging={isChangingLanguage}
            setValue={setLanguage}
            options={languageOptions}
            placeholder={
              (isChangingLanguage === true && "Loading...") ||
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
            }}
          >
            <View
              className={`px-1 w-full ${
                isChangingNotification
                  ? "bg-gray-300"
                  : notfication
                  ? "bg-secondary"
                  : "bg-gray-300"
              } $
                h-7 my-auto rounded-[30px] mr-3`}
            >
              <Animated.View
                style={[{ translateX: fadeAnim }]}
                className={`h-5 my-auto absolute top-1 transition-all w-5/12  ${
                  notfication
                    ? "bg-slate-300 left-0"
                    : "bg-slate-900 left-[5px]"
                } rounded-2xl`}
              ></Animated.View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="w-11/12 mx-auto mt-4">
          <Text className="text-lg text-red-500 mb-4 mt-2">Delete Account</Text>
        </TouchableOpacity>
        <CustomButton
          //  onPress={}
          title="CONFIRM"
          size="small"
          type="finalButtoms"
          addStyle="mt-16"
        />
        <CustomButton
          loading={loading}
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
