import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import ScheduleList from '../../components/ScheduleList'
import RatingModal from '../../components/RatingModal'

const MedicSchedule = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.imgLogo} source={require('../../../assets/img/ihs-logo-vazado.png')} />
      </View>

      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Consultas</Text>
        <Text style={styles.headerText}>{dataExtendida}</Text>
      </View>

      <ScheduleList schedule={visits} />
      
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
  }
});

export default MedicSchedule;