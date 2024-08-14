import SelectDropdown from "react-native-select-dropdown";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
const emojisWithIcons = [
  { title: "1", value: 1 },
  { title: "2", value: 2 },
  { title: "3", value: 3 },
  { title: "4", value: 4 },
  { title: "5", value: 5 },
  { title: "6", value: 6 },
  { title: "7", value: 7 },
  { title: "8", value: 8 },
  { title: "9", value: 9 },
];

const DropDown = ({
  isChanging,
  placeholder,
  setValue,
  addStyle,
  options,
  settings,
}) => {
  return (
    <View className={`${addStyle}`}>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
          // console.log(selectedItem)
          setValue(selectedItem.value);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View
              style={
                settings
                  ? styles.dropdownButtonStyleFinal
                  : styles.dropdownButtonStyle
              }
            >
              <Text
                style={
                  isChanging
                    ? styles.dropdownButtonTxtStyleChanging
                    : settings
                    ? styles.dropdownButtonTxtStyleFinal
                    : styles.dropdownButtonTxtStyle
                }
              >
                {(selectedItem && selectedItem.title) || placeholder}
              </Text>
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#D2D9DF" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    </View>
  );
};
export default DropDown;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    height: 50,
    width: 65,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  dropdownButtonStyleFinal: {
    height: 50,
    width: "100%",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  width: {
    width: "65",
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    color: "#1f1f20",
  },
  dropdownButtonTxtStyleChanging: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    color: `#d0d1d3`,
  },
  dropdownButtonTxtStyleFinal: {
    flex: 1,
    fontSize: 18,
    fontWeight: "400",
    color: "#727476",
  },
  dropdownButtonArrowStyle: {
    fontSize: 24,
  },
  dropdownButtonIconStyle: {
    fontSize: 24,
    marginRight: 0,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "90%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "300",
    color: "#151E26",
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});
