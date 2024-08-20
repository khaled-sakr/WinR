import { TouchableOpacity, ScrollView, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import HeadTitle from "../../components/HeadTitle";
import InputForm from "../../components/InputForm";
import CustomButton from "../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { router, useFocusEffect } from "expo-router";
import { changeUserDetails, getUsers } from "../../lib/supabase";
import FormUserLoading from "../../components/loading/FormUserLoading";
const Edit = () => {
  const [form, setForm] = useState();
  const [checkForm, setCheckForm] = useState();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingClick, setLoadingClick] = useState(false);
  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const user = await getUsers();
      setForm(user[0]);
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
        setForm(user[0]);
        setCheckForm(user[0]);
        setLoading(false);
      }
      fetchdata();
    }, [])
  );
  const validate = () => {
    const newErrors = [];
    if (!form?.firstname) newErrors.push("The first name is required");
    if (!form?.lastname) newErrors.push("The last name is required");
    if (
      form.email &&
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        form.email
      )
    )
      newErrors.push("The email must be valid");
    if (!form.email) newErrors.push("The email is required");
    return newErrors;
  };

  const handleChange = (i, value) => {
    setForm({ ...form, [i]: value });
  };
  const changeFun = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      if (form !== checkForm) {
        setLoadingClick(true);
        await changeUserDetails("firstname", form?.firstname);
        await changeUserDetails("lastname", form?.lastname);
        await changeUserDetails("phoneNumber", form?.phoneNumber);
        router.replace("/profile");
        setLoadingClick(false);
      }
    }
  };

  if (loading) {
    return <FormUserLoading />;
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
          name="first name"
          placeholder="Enter Your First Name"
          title="First Name"
          type="normal"
          size="full"
          addViewStyle="mt-5"
          handleChangeText={(value) => handleChange("firstname", value)}
          value={form?.firstname}
          error={
            errors?.includes("The first name is required")
              ? "The first name is required"
              : ""
          }
        />

        <InputForm
          finalInput
          name="last name"
          placeholder="Enter Your Last Name"
          title="Last Name"
          type="normal"
          size="full"
          error={
            errors?.includes("The last name is required") &&
            "The last name is required"
          }
          addViewStyle="mt-5"
          handleChangeText={(value) => handleChange("lastname", value)}
          value={form?.lastname}
        />

        <InputForm
          finalInput
          name="Mobile Number"
          placeholder="Enter Your Mobile Number"
          title="Mobile Number"
          type="normal"
          size="full"
          num
          addViewStyle="mt-5"
          handleChangeText={(value) => handleChange("phoneNumber", value)}
          value={form?.phoneNumber}
        />

        <InputForm
          finalInput
          name="Email"
          placeholder="Enter Your Email"
          error={
            (errors?.includes("The email is required") &&
              "The email is required") ||
            (errors?.includes("The email must be valid") &&
              "The email must be valid")
          }
          title="Email"
          type="normal"
          size="full"
          addViewStyle="mt-5"
          value={form?.email}
        />

        <InputForm
          finalInput
          name="Password"
          placeholder="Enter Your Password"
          title="Password"
          type="normal"
          size="full"
          addViewStyle="mt-5"
          value="************"
          disabled
        />
        <View className="w-11/12 mx-auto my-2">
          <TouchableOpacity
            onPress={() => router.replace("change-password")}
            activeOpacity={0.8}
            className="w-[38%]"
          >
            <Text className="underline font-bold text-secondary ">
              Change Password
            </Text>
          </TouchableOpacity>
        </View>

        <CustomButton
          onPress={changeFun}
          title={loadingClick ? "LOADING..." : "CONFIRM"}
          size="large"
          type="finalButtoms"
          changeForm={form === checkForm}
          addStyle="mt-6"
          isLoading={loading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;
