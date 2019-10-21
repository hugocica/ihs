import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Modal, ScrollView, TextInput } from 'react-native'
import ScheduleList from '../../components/ScheduleList'
import { CheckBox } from 'react-native-elements'

const MedicSchedule = ({ navigation }) => {
  const [medical, setMedical] = useState(true)
  const dataExtendida = 'Hoje, 24 de Setembro de 2019'

  const visits = [
      {
        id: '1',
        startDate: '08:00',
        patient: {
          name: 'Queenie Lusher'
        },
        checked: true
      },
      {
        id: '2',
        startDate: '09:00',
        patient: {
          name: 'Zonia Wickline'
        },
        checked: true
      },
      {
        id: '3',
        startDate: '10:00',
        patient: {
          name: 'Anneliese Schulenberg'
        }
      },
      {
        id: '4',
        startDate: '11:00',
        patient: {
          name: 'Karl Dube'
        }
      },
      {
        id: '5',
        startDate: '12:00',
        patient: {
          name: 'Frank Marley'
        }
      },
      {
        id: '6',
        startDate: '14:00',
        patient: {
          name: 'Renea Sobolik'
        }
      },
      {
        id: '7',
        startDate: '15:00',
        patient: {
          name: 'Mao Dardar'
        }
      },
      {
        id: '8',
        startDate: '16:00',
        patient: {
          name: 'Mao Dardar'
        }
      },
      {
        id: '9',
        startDate: '17:00',
        patient: {
          name: 'Mao Dardar'
        }
      }
  ];

  const MedicalQuestions = () => {
    return (
      <Modal style={styles.modalWrapper}>
        <View style={styles.container}>
          <View style={styles.backdrop}></View>
        <ScrollView style={styles.containerScroll}>
          <View>
            <Text style={styles.headerText}>Tipo de moradia:</Text>
            <View style={styles.optionsWrapper}>
              <CheckBox
                title='Casa'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Apartamento'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
            </View>
          </View>

          <View>
            <Text style={styles.headerText}>Limpeza:</Text>
            <View style={styles.optionsWrapper}>
              <CheckBox
                title='Boa'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Regular'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Ruim'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
            </View>
          </View>

          <View>
            <Text style={styles.headerText}>Possui saneamento básico:</Text>
            <View style={styles.optionsWrapper}>
              <CheckBox
                title='Sim'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Não'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
            </View>
          </View>

          <View>
            <Text style={styles.headerText}>Possui animal de estimação:</Text>
            <View style={styles.optionsWrapper}>
              <CheckBox
                title='Sim'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Não'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
            </View>
          </View>

          <View>
            <Text style={styles.headerText}>Cuidados com higiene corporal:</Text>
            <View style={styles.optionsWrapper}>
              <CheckBox
                title='Boa'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Regular'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Ruim'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
            </View>
          </View>

          <View>
            <Text style={styles.headerText}>Cuidados com higiene intíma:</Text>
            <View style={styles.optionsWrapper}>
              <CheckBox
                title='Boa'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Regular'
                checked={true}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
              <CheckBox
                title='Ruim'
                checked={false}
                containerStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0)'
                }}
                textStyle={{
                  color: '#fff'
                }}
                checkedColor="#fff"
                uncheckedColor="#fff"
              />
            </View>
          </View>
        </ScrollView>
        </View>
      </Modal>
    )
  }

  const BeginQuestions = () => {
    return (
      <Modal style={styles.modalWrapper}>
        <View style={[styles.container, { alignItems: 'flex-start', paddingHorizontal: 60 }]}>
          <Text style={[styles.headerText, { fontSize: 22, marginBottom: 20 }]}>Sinais Vitais</Text>

          <View style={styles.optionsWrapper}>
            <Text style={styles.headerText}>PAS:</Text>
            <TextInput style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', width: 50, color: '#fff' }} />
            <Text style={styles.headerText}>mmHg</Text>
          </View>
          <View style={styles.optionsWrapper}>
            <Text style={styles.headerText}>PAD:</Text>
            <TextInput style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', width: 50, color: '#fff' }} />
            <Text style={styles.headerText}>mmHg</Text>
          </View>
          <View style={styles.optionsWrapper}>
            <Text style={styles.headerText}>Tax:</Text>
            <TextInput style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', width: 50, color: '#fff' }} />
            <Text style={styles.headerText}>oC</Text>
          </View>
          <View style={styles.optionsWrapper}>
            <Text style={styles.headerText}>FR:</Text>
            <TextInput style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', width: 50, color: '#fff' }} />
            <Text style={styles.headerText}>rpm</Text>
          </View>
          <View style={styles.optionsWrapper}>
            <Text style={styles.headerText}>FC:</Text>
            <TextInput style={{ marginHorizontal: 5, height: 16, borderBottomWidth: 1, borderBottomColor: '#fff', width: 50, color: '#fff' }} />
            <Text style={styles.headerText}>bpm</Text>
          </View>
        </View>
      </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgWrapper}>
        <Image style={styles.imgLogo} source={require('../../../assets/img/ihs-logo-vazado.png')} />
      </View>

      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>{dataExtendida}</Text>
      </View>

      <ScheduleList schedule={visits} />
      {!medical ? (
        <MedicalQuestions />
      ) : (
        <BeginQuestions />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#237Aff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  containerScroll: {
    flex: 1,
    paddingTop: 40,
    height: 200
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
    flexDirection: 'row'
  },
  backdrop: {
    width: 50,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 6
  }
});

export default MedicSchedule;