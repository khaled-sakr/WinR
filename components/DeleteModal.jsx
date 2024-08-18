import { Animated, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef } from "react";
import { changeCardsDetails, deleteCards } from "../lib/supabase";

const DeleteModal = ({ id, threeDot, setThreeDot, fetchData, card }) => {
  const ids = card.filter((item) => item.id !== id).map((item) => item.id);
  async function deleteFun() {
    await deleteCards(id);
    setThreeDot(false);
    fetchData();
  }
  async function defaultFun() {
    await changeCardsDetails(id, "chosen_card", true);
    ids.map((id) => changeCardsDetails(id, "chosen_card", false));
    setThreeDot(false);
    await fetchData();
  }

  console.log(ids);
  ////////////////////////////////////////////////////////
  const slide = useRef(new Animated.Value(0)).current;
  function animatedAction(bool) {
    if (bool) {
      Animated.timing(slide, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slide, {
        toValue: 1000,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }
  useEffect(() => {
    animatedAction(threeDot);
  }, [threeDot]);
  return (
    <>
      {threeDot && (
        <TouchableOpacity
          style={[styles.outSideClicker]}
          onPress={() => setThreeDot(false)}
          className="absolute bottom-0 z-10 w-full h-screen flex-1"
        ></TouchableOpacity>
      )}

      <Animated.View
        style={[{ translateY: slide }]}
        className={`absolute bottom-0 h-[150px] z-30 pt-1 w-full rounded-t-xl bg-slate-200`}
      >
        <TouchableOpacity
          onPress={() => defaultFun()}
          activeOpacity={0.6}
          className="w-11/12 h-[64.5%] items-center border-b border-b-gray-400 mx-auto flex-1 font-semibold text-center my-2"
        >
          <Text className="font-bold text-center text-base text-slate-600 my-auto">
            SET DEFAULT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteFun()}
          activeOpacity={0.6}
          className="w-11/12 h-[64.5%] items-center  mx-auto flex-1 font-semibold text-center my-2"
        >
          <Text className="font-bold text-center text-base text-slate-600 my-auto">
            DELETE
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  outSideClicker: {
    backgroundColor: "rgba(0,0,0,0.5)",
    filter: "blur(10)",
  },
});
