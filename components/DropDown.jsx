import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; 
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
  const emojisWithIcons = [
    {title: '1', value : 1},
    {title: '2', value : 2},
    {title: '3', value : 3},
    {title: '4', value : 4},
    {title: '5', value : 5},
    {title: '6', value : 6},
    {title: '7', value : 7},
    {title: '8', value : 8},
    {title: '9', value : 9},
    ]; 
   

const DropDown = ({setValue , addStyle}) => {
  return (
    <View className={`${addStyle}`}>
    <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
        // console.log(selectedItem)
        setValue(selectedItem.value)
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || '1'}
          </Text>
          <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
          <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
    />
</View>
  )
}

export default DropDown


  const styles = StyleSheet.create({
      dropdownButtonStyle: {
      width: 65,
      height: 50,
      //   backgroundColor: '',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '400',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 24,
    },
    dropdownButtonIconStyle: {
      fontSize: 24,
      marginRight: 0,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '90%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '300',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  });