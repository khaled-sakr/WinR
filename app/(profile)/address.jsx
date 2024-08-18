import {
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import InputForm from "../../components/InputForm";
import { icons, images } from "../../constants";
import BoldTitle from "../../components/BoldTitle";
import { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { router, useFocusEffect } from "expo-router";
import { changeUserDetails, getUsers } from "../../lib/supabase";
import FormUserLoading from "../../components/loading/FormUserLoading";

const Address = () => {
  const [addressLabel, setAddressLabel] = useState(false);
  const [form, setForm] = useState();
  const [checkForm, setCheckForm] = useState();
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingClick, setLoadingClick] = useState(false);
  ////////////////////////////////////////////////////////
  useEffect(() => {
    async function fetchdata() {
      setLoading(true);
      const user = await getUsers();
      setForm(user[0]);
      setCheckForm(user[0]);
      setLoading(false);
      console.log("form", form);
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
        setAddressLabel(user[0].type_address);
        setLoading(false);
      }
      fetchdata();
    }, [])
  );
  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  const validate = () => {
    const newErrors = [];
    if (!form?.address) newErrors.push("The address is required");
    if (!form?.phoneNumber) newErrors.push("The phone number is required");
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
      await changeUserDetails("firstname", form?.firstname);
      await changeUserDetails("lastname", form?.lastname);
      await changeUserDetails("phoneNumber", form?.phoneNumber);
      await changeUserDetails("address", form?.address);
      await changeUserDetails(
        "type_address",
        addressLabel || form?.type_address
      );
      setLoadingClick(false);
      router.replace("/checkout");
    }
  };

  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////
  if (loading) {
    return <FormUserLoading />;
  }
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="relative h-screen">
          <HeadTitle srcIconMiddle={icons.winr} titleRight="Cancel" middle />
          <View className="w-11/12 mt-3 mx-auto justify-between flex-row">
            <Text className="text-lg font-bold mt-2">Location Infromation</Text>
            <Image source={images.address} className="" />
          </View>
          <InputForm
            finalInput
            name="address"
            placeholder="Enter Your additionAddress"
            title="Addition Address Details"
            type="normal"
            size="full"
            addViewStyle="mt-3 "
            handleChangeText={(value) => handleChange("address", value)}
            value={form?.address}
            error={
              errors?.includes("The address is required") &&
              "The address is required"
            }
          />
          <BoldTitle
            title="Personal Information"
            addStyle="text-lg w-11/12 mx-auto mt-5 text-slate-400"
          />
          <InputForm
            finalInput
            name="mobile"
            placeholder="Enter Your Mobile Number ( Not Option )"
            title="Mobile Number"
            type="normal"
            size="full"
            error={
              errors?.includes("The phone number is required") &&
              "The phone number is required"
            }
            num
            addViewStyle="mt-5 "
            handleChangeText={(value) => handleChange("phoneNumber", value)}
            value={form?.phoneNumber}
          />
          <InputForm
            finalInput
            name="firstname"
            placeholder="Enter Your First Name"
            title="Enter Your First Name"
            type="normal"
            size="full"
            error={
              errors?.includes("The first name is required") &&
              "The first name is required"
            }
            addViewStyle="mt-5 "
            handleChangeText={(value) => handleChange("firstname", value)}
            value={form?.firstname}
          />
          <InputForm
            finalInput
            name="lastname"
            placeholder="Enter Your Last Name"
            title="Enter Your Last Name"
            type="normal"
            size="full"
            addViewStyle="my-5 "
            handleChangeText={(value) => handleChange("lastname", value)}
            error={
              errors?.includes("The last name is required") &&
              "The last name is required"
            }
            value={form?.lastname}
          />
          <Text className="w-11/12 mx-auto text-[17px] my-4">
            Address Label ( Option )
          </Text>
          <View className="w-11/12 flex-row mx-auto">
            <TouchableOpacity
              onPress={() => setAddressLabel("home")}
              className="w-3/12 "
            >
              <Text
                className={`px-4 py-1.5  ${
                  addressLabel === "home"
                    ? "bg-secondary text-white"
                    : "border-slate-300 text-slate-500 border"
                }  font-semibold rounded-2xl h-8 m-auto`}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAddressLabel("work")}
              className="w-3/12 "
            >
              <Text
                className={`px-4 py-1.5  ${
                  addressLabel === "work"
                    ? "bg-secondary text-white"
                    : "border-slate-300 text-slate-500 border"
                }  font-semibold rounded-2xl h-8 m-auto`}
              >
                Work
              </Text>
            </TouchableOpacity>
          </View>

          <CustomButton
            onPress={changeFun}
            title={loadingClick ? "LOADING..." : "SAVE ADDRESS"}
            size="large"
            type="finalButtoms"
            // changeForm={form === checkForm}
            addStyle="mt-6"
            isLoading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Address;
