import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

const MedicSchedule = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} multiline numberOfLines={6} placeholder="Descreva o que está sentindo" />      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C71B9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.7)',
    borderStyle: 'solid',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
    marginVertical: 8,
    alignItems: 'flex-start'
  }
});

export default MedicSchedule;