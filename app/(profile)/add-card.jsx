import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import { icons } from "../../constants";
import BoldTitle from "../../components/BoldTitle";
import InputForm from "../../components/InputForm";
import CustomButton from "../../components/CustomButton";
import ValidCard from "../../components/ValidCard";
import { router, useFocusEffect } from "expo-router";
import FormUserLoading from "../../components/loading/FormUserLoading";
import { changeCardsDetails, getCards, insertCards } from "../../lib/supabase";

const Addcard = () => {
  const [form, setForm] = useState();
  const [errors, setErrors] = useState([]);
  const [loadingClick, setLoadingClick] = useState(false);
  ////////////////////////////////////////////////////
  const validate = () => {
    const newErrors = [];
    if (!form?.credit_id) newErrors.push("The credit id is required");
    if (form?.credit_id && form?.credit_id.length !== 16)
      newErrors.push("The credit id must be 16 numbers");
    if (!form?.credit_name) newErrors.push("The credit name is required");
    if (!form?.cvv) newErrors.push("The cvv is required");
    if (form?.cvv && form?.cvv.length !== 3)
      newErrors.push("The cvv must be 3 numbers");
    return newErrors;
  };

  ///////////////////////////////////////FORM /////////
  const handleChange = (i, value) => {
    setForm({ ...form, [i]: value });
  };
  ///////////////////////////////////////FORM /////////
  const changeFun = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoadingClick(true);
      await insertCards(form);
      router.replace("/profile");
      setLoadingClick(false);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="relative h-screen">
          <HeadTitle srcIconMiddle={icons.winr} titleRight="Cancel" middle />
          <BoldTitle
            title="Add a new card"
            addStyle="text-lg w-11/12 mx-auto"
          />
          <Text className="font-semibold text-slate-400 w-11/12 mx-auto mt-2">
            we accept
          </Text>
          <ValidCard />
          <InputForm
            finalInput
            num
            name="Card Number"
            placeholder="Enter Card Number"
            title="Card Number"
            type="normal"
            size="full"
            addViewStyle="mt-5 "
            handleChangeText={(value) => handleChange("credit_id", value)}
            value={form?.credit_id}
            error={
              errors?.includes("The credit id is required")
                ? "The credit id is required"
                : errors?.includes("The credit id must be 16 numbers")
                ? "The credit id must be 16 numbers"
                : ""
            }
          />
          <View className="flex flex-row justify-between w-11/12 mx-auto">
            <InputForm
              finalInput
              name="Name"
              placeholder="Enter Name "
              title="Name"
              type="normal"
              size="half"
              addViewStyle="mt-5 "
              handleChangeText={(value) => handleChange("credit_name", value)}
              value={form?.credit_name}
              error={
                errors?.includes("The credit name is required") &&
                "The credit name is required"
              }
            />
            <InputForm
              finalInput
              name="CVV"
              num
              placeholder="123"
              title="CVV"
              type="normal"
              size="half"
              addViewStyle="mt-5 "
              handleChangeText={(value) => handleChange("cvv", value)}
              value={form?.cvv}
              error={
                errors?.includes("The cvv is required")
                  ? "The cvv is required"
                  : errors?.includes("The cvv must be 3 numbers")
                  ? "The cvv must be 3 numbers"
                  : ""
              }
            />
          </View>
          <Text className="text-base w-11/12 mx-auto font-semibold mt-4">
            Remember this card
          </Text>
          <Text className="text-xs text-slate-400 w-11/12 mx-auto font-semibold">
            BSB STORE will securely store this card for a faster payment
            experience. Your CV number will not be stored.
          </Text>
          <CustomButton
            onPress={changeFun}
            title={loadingClick ? "Loading..." : "ADD MY CARD"}
            size="large"
            type="finalButtoms"
            addStyle="mt-16 absolute bottom-4 left-[2.5%]"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Addcard;

const styles = StyleSheet.create({});
