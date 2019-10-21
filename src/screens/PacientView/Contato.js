import React from 'react'
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native'

const MedicSchedule = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} multiline numberOfLines={6} placeholder="Descreva o motivo do contato" />

      <TouchableOpacity style={styles.mainButtons}>
        <Text style={styles.mainButtonsText}>Enviar</Text>
      </TouchableOpacity>
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
  },
  mainButtons: {
    backgroundColor: 'rgba(255, 255, 255, .7)',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10
  },
  mainButtonsText: {
    fontWeight: 'bold',
    color: '#1C71B9',
    fontSize: 16
  }
});

export default MedicSchedule;