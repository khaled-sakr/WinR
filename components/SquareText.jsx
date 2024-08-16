import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SquareText = ({ id, link, title, addstyle }) => {
  return (
    <Text
      className={` ${
        link === id ? "bg-secondary text-white" : "text-gray-800 bg-gray-300"
      }   rounded-[5px] text-center font-bold  py-2.5 ${addstyle} `}
    >
      {title}
    </Text>
  );
};

export default SquareText;

const styles = StyleSheet.create({});
