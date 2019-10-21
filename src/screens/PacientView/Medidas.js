import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

const MedicSchedule = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <View style={styles.optionsWrapper}>
          <Text style={styles.headerText}>PAS:</Text>
          <TextInput
            keyboardType="number-pad" 
            style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', flex: 1, color: '#fff' }} 
          />
          <Text style={styles.headerText}>mmHg</Text>
        </View>
        <View style={styles.optionsWrapper}>
          <Text style={styles.headerText}>PAD:</Text>
          <TextInput
            keyboardType="number-pad" 
            style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', flex: 1, color: '#fff' }} 
          />
          <Text style={styles.headerText}>mmHg</Text>
        </View>
        <View style={styles.optionsWrapper}>
          <Text style={styles.headerText}>Tax:</Text>
          <TextInput
            keyboardType="number-pad" 
            style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', flex: 1, color: '#fff' }} 
          />
          <Text style={styles.headerText}>oC</Text>
        </View>
        <View style={styles.optionsWrapper}>
          <Text style={styles.headerText}>FR:</Text>
          <TextInput
            keyboardType="number-pad" 
            style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', flex: 1, color: '#fff' }} 
          />
          <Text style={styles.headerText}>rpm</Text>
        </View>
        <View style={styles.optionsWrapper}>
          <Text style={styles.headerText}>FC:</Text>
          <TextInput
            keyboardType="number-pad" 
            style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', flex: 1, color: '#fff' }} 
          />
          <Text style={styles.headerText}>bpm</Text>
        </View>
      </View>

      <View style={{ width: '100%' }}>
        <TouchableOpacity style={styles.mainButtons}>
          <Text style={styles.mainButtonsText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C71B9',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 30
  },
  imgWrapper: {
    backgroundColor: '#fff',
    borderRadius: 100/2,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  imgLogo: {
    flex: .8,
    resizeMode: 'contain'
  },
  headerWrapper: {
    marginBottom: 20
  },
  headerTitle: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20
  },
  headerText: {
    color: '#fff',
    fontSize: 16
  },
  optionsWrapper: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  backdrop: {
    width: 50,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 6
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