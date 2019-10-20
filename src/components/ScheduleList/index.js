import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'

const List = props => {
  const { schedule, modalOpen, setModalOpen } = props;

  const renderItem = itemData => {
    const { startDate, professional, patient, checked } = itemData.item;
    const applyStyle = checked ? [styles.listItemText, styles.risked] : styles.listItemText;

    return (
      <View style={styles.listItemWrapper}>
        <TouchableOpacity style={applyStyle} onPress={() => setModalOpen(!modalOpen)}>
        <Text style={applyStyle}>{startDate} | {(professional || patient).name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.listWrapper}>
      <FlatList 
        keyExtractor={item => item.id} 
        data={schedule} 
        renderItem={renderItem} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listWrapper: {
    height: 300,
    width: '100%'
  },
  listItemWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    width: '100%',
    borderRadius: 6,
    marginVertical: 5,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  listItemText: {
    color: '#fff',
    fontSize: 20
  },
  risked: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  }
});

export default List;
