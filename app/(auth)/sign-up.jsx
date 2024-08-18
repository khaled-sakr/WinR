import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import React from "react";
import InputForm from "../../components/InputForm";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import { router } from "expo-router";
import { useState } from "react";
import TitleWithLine from "../../components/TitleWithLine";
import { insertUser, signUp } from "../../lib/supabase";
const defaultValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirmPasssword: "",
};
const SignUp = () => {
  const [form, setForm] = useState(defaultValues);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (i, value) => {
    setForm({ ...form, [i]: value });
  };
  const validate = () => {
    const newErrors = [];
    if (!form.firstname) newErrors.push("The first name is required");
    if (!form.lastname) newErrors.push("The last name is required");
    if (
      form.email &&
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        form.email
      )
    )
      newErrors.push("The email must be valid");
    if (!form.email) newErrors.push("The email is required");
    if (!form.password) newErrors.push("The password is required");
    if (form.password && form.password.split("").length < 8)
      newErrors.push("The password must be above 8 char");
    //
    if (!form.confirmPasssword) newErrors.push("The confirm is required");
    if (form.confirmPasssword && form.confirmPasssword !== form.password)
      newErrors.push("This confirm must be equal the password");
    return newErrors;
  };
  const signUpFun = async () => {
    setLoading(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setLoading(true);
      await insertUser({
        email: form?.email,
        password: form?.password,
        firstname: form?.firstname,
        lastname: form?.lastname,
      });
      const { error } = await signUp(form.email, form.password);
      if (error) {
        setForm(defaultValues);
        Alert.alert(
          "Error",
          "Email rate llimit exceeded , try to log in instead"
        );
      } else {
        router.replace("/home");
      }
    }
    setLoading(false);
  };

  return (
    <SafeAreaView className="w-full bg-white h-full">
      <Text className="text-5xl text-Font text-center font-bold my-20">
        Sign Up
      </Text>
      <View className="flex flex-row justify-between w-11/12 mx-auto">
        <InputForm
          handleChangeText={(value) => handleChange("firstname", value)}
          value={form.firstname}
          name="firstname"
          placeholder="Khaled"
          title="First Name"
          type="normal"
          size="half"
          error={
            errors?.includes("The first name is required")
              ? "The first name is required"
              : ""
          }
        />

        <InputForm
          handleChangeText={(value) => handleChange("lastname", value)}
          value={form.lastname}
          name="lastname"
          placeholder="Sakr"
          title="Last Name"
          type="normal"
          size="half"
          error={
            errors?.includes("The last name is required")
              ? "The last name is required"
              : ""
          }
        />
      </View>
      <InputForm
        handleChangeText={(value) => handleChange("email", value)}
        value={form.email}
        name="email"
        title="Email Address"
        placeholder="khaledsakr12345@gmail.com"
        error={
          (errors?.includes("The email is required") &&
            "The email is required") ||
          (errors?.includes("The email must be valid") &&
            "The email must be valid")
        }
        type="normal"
        size="full"
        addclass=""
      />
      <InputForm
        handleChangeText={(value) => handleChange("password", value)}
        value={form.password}
        name="Password"
        title="Password"
        placeholder="**********"
        type="normal"
        size="full"
        addclass=""
        error={
          errors?.includes("The password is required")
            ? "The password is required"
            : "" || errors?.includes("The password must be above 8 char")
            ? "The password must be above 8 char"
            : ""
        }
      />
      <InputForm
        handleChangeText={(value) => handleChange("confirmPasssword", value)}
        value={form.confirmPasssword}
        name="Password"
        title="Confirm Password"
        placeholder="**********"
        type="normal"
        size="full"
        addclass=""
        error={
          errors?.includes("The confirm is required")
            ? "The confirm is required"
            : "" || errors.includes("This confirm must be equal the password")
            ? "This confirm must be equal the password"
            : ""
        }
      />

      <CustomButton
        loading={loading}
        onPress={signUpFun}
        title="Create Account"
        size="large"
        type="startButtoms"
        addStyle="mt-10"
      />
      {errors.includes("Email rate limit exceeded") && (
        <Text className="mx-auto text-xs w-11/12 text-center mt-1 font-semibold text-red-500">
          Email rate limit exceeded
        </Text>
      )}
      {/* {errors.includes('Email rate limit exceeded')&&<Text className='text-xs w-11/12 text-center mt-1 font-semibold text-red-500'>Email rate limit exceeded</Text>} */}
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

      <View
        className={`mx-auto ${
          errors.length ? " mt-1 " : " mt-12 "
        } flex flex-row`}
      >
        <Text className="text-lg font-[200]">Already have account?</Text>
        <TouchableOpacity
          onPress={() => {
            router.replace("/log-in");
          }}
        >
          <Text className="mt-0 text-lg text-secondary font-[600] underline">
            log in{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
