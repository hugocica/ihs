import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import ScheduleList from '../../components/ScheduleList'
import RatingModal from '../../components/RatingModal'
import API from '../../api'

const MedicSchedule = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [visits, setVisits] = useState([])
  const todayDate = new Date()
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]
  const dataExtendida = `Hoje, ${todayDate.getDate()} de ${months[todayDate.getMonth()]} de ${todayDate.getFullYear()}`
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // const cpf = '54579827008'
    const cpf = '12345678900'
    setIsLoading(true)

    API
      .get(`/visits/${cpf}`)
      .then(({ data }) => {
        setVisits(data.visits)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])
  // const getVisitsByCPF = (cpf = '54579827008') => {
  //   API
  //     .get(`/visits/${cpf}`)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(() => {

  //     })
  // }

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.imgLogo} source={require('../../../assets/img/ihs-logo-vazado.png')} />
      </View>

      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>Consultas</Text>
        <Text style={styles.headerText}>{dataExtendida}</Text>
      </View>

      <ScheduleList schedule={visits.filter(item => {
        const todayDate = new Date()
        const startDate = new Date(item.visit.startDate)
        const sameDay = todayDate.getDate() === startDate.getDate() && todayDate.getMonth() === startDate.getMonth() && todayDate.getFullYear() === startDate.getFullYear()

        return sameDay
      })} isLoading={isLoading} modalOpen={isOpen} setModalOpen={setIsOpen} />
      <RatingModal isOpen={isOpen} changeVisibility={setIsOpen} />
      
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