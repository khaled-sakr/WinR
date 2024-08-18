import { ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import HeadTitle from "../../components/HeadTitle";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import CustomButton from "../../components/CustomButton";
import InputForm from "../../components/InputForm";
import { router, useFocusEffect } from "expo-router";
import { changeUserDetails, getUsers, supabase } from "../../lib/supabase";

const ChangePassword = () => {
  const [form, setForm] = useState();
  const [checkForm, setCheckForm] = useState();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingClick, setLoadingClick] = useState(false);
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  /////////////////////////////////////////////////
  const validate = () => {
    const newErrors = [];

    if (form?.password !== checkForm?.password)
      newErrors.push("The password is wrong,try another one");

    if (!form?.newPassword) newErrors.push("The new password is required");

    if (!form?.confirmPassword)
      newErrors.push("The confirmation password is required");
    if (form?.confirmPassword !== form?.newPassword)
      newErrors.push("The confirmatin password must be equal the new password");
    return newErrors;
  };
  /////////////////////////////////////////////////
  const handleChange = (i, value) => {
    setForm({ ...form, [i]: value });
  };
  /////////////////////////////////////////////////
  const changeFun = async () => {
    if (form?.password === checkForm?.password) {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        setLoadingClick(true);
        await supabase.auth.updateUser({ password: form.password });
        await changeUserDetails("password", form?.newPassword);
        router.replace("/edit");
        setLoadingClick(false);
      }
    }
  };
  /////////////////////////////////////////////////
  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const user = await getUsers();
      setCheckForm(user[0]);
      setLoading(false);
    }
    fetchdata();
  }, []);
  useFocusEffect(
    useCallback(() => {
      async function fetchdata() {
        setLoading(true);
        const user = await getUsers();
        setCheckForm(user[0]);
        setLoading(false);
      }
      fetchdata();
    }, [])
  );
  /////////////////////////////////////////////////
  if (loading) {
    return (
      <SafeAreaView>
        <ScrollView>
          <HeadTitle
            srcIconLeft={icons.back}
            srcIconMiddle={icons.winr}
            srcIconRight={icons.favourite}
          />
          <View className="w-11/12 mt-14 mx-auto">
            <View className="h-16 w-full bg-gray-300 my-3 rounded-md" />
            <View className="h-16 w-full bg-gray-300 my-3 rounded-md" />
            <View className="h-16 w-full bg-gray-300 my-3 rounded-md" />
            <View className="h-16 w-full bg-gray-300 my-3 rounded-md" />
            <View className="h-16 w-full bg-gray-300 my-3 rounded-md" />
          </View>
          <View />
        </ScrollView>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <HeadTitle
          srcIconLeft={icons.back}
          srcIconMiddle={icons.winr}
          srcIconRight={icons.favourite}
        />

        <InputForm
          finalInput
          name="Password"
          placeholder="Enter Your Password"
          title="Password"
          type="normal"
          size="full"
          addViewStyle="mt-20"
          handleChangeText={(value) => handleChange("password", value)}
          value={form?.password}
        />

        <InputForm
          finalInput
          name="New Password"
          placeholder="Enter Your New Password"
          title="New Password"
          type="normal"
          size="full"
          error={
            errors?.includes("The new password is required") &&
            "The new password is required"
          }
          addViewStyle="mt-5"
          handleChangeText={(value) => handleChange("newPassword", value)}
          value={form?.newPassword}
        />

        <InputForm
          finalInput
          name="Confirm Password"
          placeholder="Confirm Your New Password"
          title="Confirm Password"
          type="normal"
          size="full"
          // error={
          //   errors?.includes("The confirmation password is required") ?
          //   "The confirmation password is required"
          //   errors?.includes(
          //       "The confirmatin password must be equal the new password"
          //     )
          //   ? "The confirmatin password must be equal the new password"
          //   : ""
          // }
          error={
            errors?.includes("The confirmation password is required")
              ? "The confirmation password is required"
              : errors?.includes(
                  "The confirmatin password must be equal the new password"
                )
              ? "The confirmatin password must be equal the new password"
              : ""
          }
          addViewStyle="mt-5"
          handleChangeText={(value) => handleChange("confirmPassword", value)}
          value={form?.confirmPassword}
        />

        <CustomButton
          onPress={changeFun}
          title={loadingClick ? "LOADING..." : "CONFIRM"}
          size="large"
          type="finalButtoms"
          changeForm={form?.password !== checkForm?.password}
          addStyle="mt-8"
          isLoading={loading}
        />
        <CustomButton
          onPress={() => router.back()}
          title="Cancel"
          ErrorPosition={errors.length > 0}
          size="large"
          type="finalButtoms"
          addStyle="mt-6"
          cancel
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;
