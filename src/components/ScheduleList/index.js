import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'

const List = props => {
  const { schedule, modalOpen, setModalOpen, isLoading } = props;

  const renderItem = itemData => {
    // const { startDate, professional, patient, checked } = itemData.item;
    const checked = false
    const applyStyle = checked ? [styles.listItemText, styles.risked] : styles.listItemText;
    const todayDate = new Date()
    const startDate = new Date(itemData.item.visit.startDate)
    const appointmentDate = (startDate) ? `${startDate.getHours()}:${startDate.getMinutes()}` : ''

    if (startDate !== todayDate) {
      return null
    }

    return (
      <View style={styles.listItemWrapper}>
        <TouchableOpacity style={applyStyle} onPress={() => setModalOpen(!modalOpen)}>
        <Text style={applyStyle}>{`${appointmentDate} | ` || ''}{itemData.item.visit.professional.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const renderEmpty = () => {
    return (
      <View style={styles.listItemWrapper}>
        <Text>Não há nada na sua agenda para hoje</Text>
      </View>
    )
  }

  if (isLoading) {
    return (
      <View style={styles.listWrapper}>
        <ActivityIndicator animating size="large" color="#fff" />
      </View>
    )
  }

  return (
    <View style={styles.listWrapper}>
      <FlatList 
        keyExtractor={item => item.id} 
        data={schedule} 
        renderItem={renderItem} 
        ListEmptyComponent={renderEmpty}
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
