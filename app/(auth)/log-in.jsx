import { Image, Text, View, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import InputForm from "../../components/InputForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { router } from "expo-router";
import TitleWithLine from "../../components/TitleWithLine";
import { login } from "../../lib/supabase";

const defaultValues = {
  email: "",
  password: "",
};
const logIn = () => {
  const [form, setForm] = useState(defaultValues);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const handleChange = (i, value) => {
    setForm({ ...form, [i]: value });
  };
  const validate = () => {
    const newErrors = [];
    if (!form.email) newErrors.push("The email is required");
    if (
      form.email &&
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        form.email
      )
    )
      newErrors.push("The email must be valid");
    if (!form.password) newErrors.push("The password is required");
    return newErrors;
  };
  const signIn = async () => {
    setLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      await login(form.email, form.password).then((result) => {
        if (result.success) {
          router.replace("/home");
        } else {
          setForm(defaultValues);
          Alert.alert("Error", "Email rate llimit exceeded");
        }
      });
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="w-full bg-white h-full">
      <View className="flex justify-center w-9/12 ">
        <Text>use this :</Text>
        <Text>khaledsakr12345</Text>
        <Text>12345678</Text>
      </View>
      <Text className="text-5xl text-Font text-center font-bold mb-12 mt-32">
        Log In
      </Text>
      <View>
        <InputForm
          handleChangeText={(value) => handleChange("email", value)}
          value={form.email}
          name="email"
          placeholder="Your email Adress"
          title="Email Adress"
          type="normal"
          size="full"
          error={
            (errors?.includes("The email is required") &&
              "The email is required") ||
            (errors?.includes("The email must be valid") &&
              "The email must be valid")
          }
          addViewStyle="my-3"
        />
        <InputForm
          handleChangeText={(value) => handleChange("password", value)}
          value={form.password}
          name="Password"
          placeholder="Your password"
          title="Password"
          type="normal"
          size="full"
          error={
            errors?.includes("The password is required")
              ? "The password is required"
              : ""
          }
          addViewStyle="mt-3 "
        />
      </View>
      {errors?.includes("Invalid login credentials") && (
        <Text className="text-red-400 font-[800] text-xs text-center">
          Invalid login credentials! Try Another One password or email
        </Text>
      )}
      {errors.includes("Email rate limit exceeded") && (
        <Text className="mx-auto text-xs w-11/12 text-center mt-1 font-semibold text-red-500">
          Email rate limit exceeded
        </Text>
      )}
      {errors.includes("Email not confirmed") && (
        <Text className="mx-auto text-xs w-11/12 text-center mt-1 font-semibold text-red-500">
          Email not confirmed
        </Text>
      )}
      <CustomButton
        loading={loading}
        onPress={signIn}
        title="Log In"
        size="large"
        type="startButtoms"
        addStyle="mt-8"
      />
      <View className="mt-2 mx-auto flex flex-row">
        <Text className="text-sm font-[200]">Don't have An Account?</Text>
        <TouchableOpacity
          onPress={() => {
            router.replace("/sign-up");
          }}
        >
          <Text className="text-sm text-secondary font-[600] underline">
            Sign Up{" "}
          </Text>
        </TouchableOpacity>
      </View>
      <TitleWithLine title="OR" size="w-3/12" addStyle="font-bold" />
      <View className="flex flex-row w-8/12 mx-auto mt-3 justify-between">
        <View className="border border-slate-300 rounded-full p-3">
          <Image source={images.facebook} className="" />
        </View>
        <View className="border border-slate-300 rounded-full p-3">
          <Image source={images.twitter} />
        </View>
        <View className="border border-slate-300  rounded-full p-3">
          <Image source={images.google} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default logIn;
