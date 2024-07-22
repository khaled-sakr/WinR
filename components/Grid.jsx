import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const data = [
  { key: '1', text: 'Item 1' },
  { key: '2', text: 'Item 2' },
  { key: '3', text: 'Item 3' },
  { key: '4', text: 'Item 4' },
  { key: '5', text: 'Item 5' },
  { key: '6', text: 'Item 6' },
  { key: '7', text: 'Item 7' },
  { key: '8', text: 'Item 8' },
  // Add more items as needed
];

const GridItem = ({ text }) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>{text}</Text>
  </View>
);

const Grid = () => {
  const [numColumns, setNumColumns] = useState(2);
  const ITEM_WIDTH = 100; // Width of each itemz

  useEffect(() => {
    const updateNumColumns = () => {
      const screenWidth = Dimensions.get('window').width;
      const numColumns = Math.floor(screenWidth / ITEM_WIDTH);
      setNumColumns(numColumns);
    };

    updateNumColumns();
    Dimensions.addEventListener('change', updateNumColumns);

    return () => {
      Dimensions.removeEventListener('change', updateNumColumns);
    };
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <GridItem text={item.text} />}
      keyExtractor={item => item.key}
      numColumns={numColumns}
      key={numColumns} // Important to re-render FlatList on column change
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  item: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    height: 100, // Set your desired item height
  },
  itemText: {
    fontSize: 16,
  },
});

export default Grid;
