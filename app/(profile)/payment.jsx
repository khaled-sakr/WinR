import {
  StyleSheet,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  FlatList,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeadTitle from "../../components/HeadTitle";
import { icons, images } from "../../constants";
import { router, useFocusEffect } from "expo-router";
import ValidCard from "../../components/ValidCard";

import ThreeDotCridit from "../../components/ThreeDotCridit";
import { useRef } from "react";
import ProductCurdLoading from "../../components/loading/ProductCurdLoading";
import { getCards } from "../../lib/supabase";
import DeleteModal from "../../components/DeleteModal";
import FormUserLoading from "../../components/loading/FormUserLoading";
import FormUserCardsLoading from "../../components/loading/FormUserCardsLoading";

const Payment = () => {
  const [chosenCard, setChosenCard] = useState(1);
  const [card, setCard] = useState([]);
  const [threeDot, setThreeDot] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [idTarget, setIdTarget] = useState(1);

  //////////////////////////////////////////////////
  async function fetchData(loading) {
    loading && setIsLoading(true);
    const cards = await getCards();
    setCard(
      cards.sort((a, b) => {
        if (a.credit_name.toLowerCase() < b.credit_name.toLowerCase()) {
          return -1;
        }
        if (a.credit_name.toLowerCase() > b.credit_name.toLowerCase()) {
          return 1;
        }
        return 0;
      })
    );
    loading && setIsLoading(false);
  }
  useEffect(() => {
    fetchData(true);
  }, []);
  useFocusEffect(
    useCallback(() => {
      fetchData(true);
    }, [])
  );

  //////////////////////////////////////////////////
  return (
    <View className="relative h-full">
      <DeleteModal
        id={idTarget}
        threeDot={threeDot}
        setThreeDot={setThreeDot}
        fetchData={fetchData}
        card={card}
      />
      <SafeAreaView>
        <ScrollView>
          <HeadTitle srcIconLeft={icons.back} middleText="Payment" />
          {isLoading ? (
            <FormUserCardsLoading />
          ) : (
            <>
              <View className="w-[87%] mx-auto flex-row justify-between mt-8 mb-8">
                <Text className="font-semibold text-[17px] ">
                  Card Managment
                </Text>
                <TouchableOpacity onPress={() => router.push("add-card")}>
                  <Text className="text-red-500 my-auto">Add New+</Text>
                </TouchableOpacity>
              </View>
              {card?.length === 0 ? (
                <View>
                  <Image
                    source={images.paymentfailed}
                    className="w-11/12 mx-auto h-[330px]"
                  />
                  <Text className="text-center mt-3 mb-1 w-9/12 text-[17px] mx-auto font-semibold text-slate-500">
                    You don’t have any saved payment methods
                  </Text>
                  <Text className="text-center font-[400] text-sm w-8/12 mx-auto text-slate-400">
                    Add these in at checkout for a smoother experience!
                  </Text>
                </View>
              ) : (
                <>
                  {card?.map((item) => (
                    <View key={item?.id}>
                      <ThreeDotCridit
                        item={item}
                        setIdTarget={setIdTarget}
                        setThreeDot={setThreeDot}
                        setChosenCard={setChosenCard}
                        chosenCard={chosenCard}
                      />
                    </View>
                  ))}
                  <View className="flex-row justify-between w-10/12 mx-auto my-10">
                    <View className="w-6/12">
                      <Text className="font-semibold w-11/12 mx-auto mt-4">
                        or check out with
                      </Text>
                      <ValidCard addStyle="mt-6" />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        setCard([]);
                        setThreeDot(false);
                      }}
                      className="font-semibold flex-row w-fit  mt-2 text-center h-7"
                    >
                      <Text className=" font-semibold underline text-red-600 ">
                        Clear Cards
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Payment;
