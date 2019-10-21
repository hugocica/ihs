import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './src/screens/Login';
import ProfessionalScreen from './src/screens/ProfessionalView';
import PacienteScreen from './src/screens/PacientView';
import PacienteAgendaScreen from './src/screens/PacientView/Agenda'
import PacientePrescricaoScreen from './src/screens/PacientView/Prescricao'
import PacienteMedidasScreen from './src/screens/PacientView/Medidas'
import PacienteSintomaScreen from './src/screens/PacientView/Sintoma'
import PacienteContatoScreen from './src/screens/PacientView/Contato'

const headerStyle = {
  headerStyle: {
    backgroundColor: '#1C71B9',
    elevation: 0
  },
  headerTintColor: '#fff',
}

const PacienteStack = createStackNavigator({
  Home: {
    screen: PacienteScreen,
    navigationOptions: ({ navigation }) => ({
        header: null
      }
    )
  },
  Agenda: {
    screen: PacienteAgendaScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Agenda',
    })
  },
  Prescricao: {
    screen: PacientePrescricaoScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Prescrição',
    })
  },
  Medidas: {
    screen: PacienteMedidasScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Nova medida',
    })
  },
  Sintoma: {
    screen: PacienteSintomaScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Anotar Sintoma',
    })
  },
  Contato: {
    screen: PacienteContatoScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Contato',
    })
  }
}, {
  defaultNavigationOptions: () => ({
    ...headerStyle
  })
})

// const ProfessionalStack = createStackNavigator({
//   Home: {
//     screen: ProfessionalScreen,
//     navigationOptions: ({ navigation }) => ({
//         title: 'Agenda',
//       }
//     )
//   },
//   Agenda: {
//     screen: AgendaScreen,
//     navigationOptions: ({ navigation }) => ({
//         title: 'Agenda',
//       }
//     )
//   },
//   Prescricao: {
//     screen: ProfessionalScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Prescrição',
//     })
//   },
//   Medidas: {
//     screen: ProfessionalScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Nova medida',
//     })
//   },
//   Sintoma: {
//     screen: ProfessionalScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Anotar Sintoma',
//     })
//   },
//   Contato: {
//     screen: ProfessionalScreen,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Contato',
//     })
//   }
// })

const Routes = createSwitchNavigator({
  Login: { screen: LoginPage },
  PacienteView: { screen: PacienteStack },
  // ProfessionalView: { screen: ProfessionalStack },
}, {
  initialRouteName: 'Login',
});

export default createAppContainer(Routes);
