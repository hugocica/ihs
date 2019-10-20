import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import ScheduleList from '../../components/ScheduleList'
import RatingModal from '../../components/RatingModal'

const MedicSchedule = ({ navigation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dataExtendida = 'Hoje, 24 de Setembro de 2019'

  const visits = [
      {
        id: '1',
        startDate: '08:00',
        professional: {
          name: 'Dr. Queenie Lusher'
        }
      },
      {
        id: '2',
        startDate: '15:00',
        professional: {
          name: 'Dr. Queenie Lusher'
        }
      },
      {
        id: '3',
        startDate: '18:00',
        professional: {
          name: 'Dr. Queenie Lusher'
        }
      }
  ];

  const navigateTo = path => {
    navigation.navigate(path)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.imgLogo} source={require('../../../assets/img/ihs-logo-vazado.png')} />
      </View>

      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Bem vindo, Paciente!</Text>
        <TouchableOpacity onPress={() => navigateTo('Agenda')} style={styles.menuButtons}>
          <Text style={styles.menuButtonsText}>Agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Prescricao')} style={styles.menuButtons}>
          <Text style={styles.menuButtonsText}>Prescrição</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Medidas')} style={styles.menuButtons}>
          <Text style={styles.menuButtonsText}>Nova Medida</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Sintoma')} style={styles.menuButtons}>
          <Text style={styles.menuButtonsText}>Anotar Sintomas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateTo('Contato')} style={styles.menuButtons}>
          <Text style={styles.menuButtonsText}>Contato</Text>
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
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  imgWrapper: {
    backgroundColor: '#fff',
    borderRadius: 100/2,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 60
  },
  imgLogo: {
    flex: .8,
    resizeMode: 'contain'
  },
  headerWrapper: {
    marginBottom: 20,
    flex: 1,
    width: '100%'
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
  menuButtons: {
    backgroundColor: 'rgba(255, 255, 255, .7)',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10
  },
  menuButtonsText: {
    fontWeight: 'bold',
    color: '#1C71B9',
    fontSize: 16
  }
});

export default MedicSchedule;