import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ActivityIndicator
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import queryString from 'query-string'
import apiURL from '../../api/config'
import API from '../../api'

export default function App({ navigation }) {
  const [isLoading, setIsLoading] = useState(false)
  const [cpf, setCPF] = useState('')
  const [password, setPassword] = useState('')

  const loginAction = () => {
    setIsLoading(true)
    
    axios
      .post(`${apiURL.API_URL}/authentications`, {
        authentication: {
          // cpf: "54579827008",
          // password: "ec949xgo"
          cpf,
          password
        }
      })
      .then(res => {
        API.interceptors.request.use(
          config => {
            const newConfig = {
              ...config,
              headers: {
                access_token: res.data.authentication.access_token,
                'Content-Type': 'application/json'
              }
            }

            return newConfig
          },
          error => Promise.reject(error)
        );

        if (res.data.authentication.type === 'Patient') {
          navigation.navigate('PacienteView')
        } else {
          navigation.navigate('PacienteView')
        }
      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
      })
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.imgWrapper}>
        <Image style={styles.imgLogo} source={require('../../../assets/img/ihs-logo-vazado.png')} />
      </View>
      <TextInput
        style={styles.textInput}
        keyboardType="numeric"
        placeholder="CPF"
        onChangeText={text => setCPF(text)}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={styles.forgotTextWrapper}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEntrar} onPress={() => loginAction()} disabled={isLoading}>
        {!isLoading ? (
          <Text style={styles.buttonEntrarText}>Entrar</Text>
        ) : (
          <ActivityIndicator animating size="large" color="#1C71B9" />
        )}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
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
    borderRadius: 150/2,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60
  },
  imgLogo: {
    flex: .8,
    resizeMode: 'contain'
  },
  textInput: {
    borderColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    width: '100%',
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#fff'
  },
  forgotTextWrapper: {

  },
  forgotText: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    color: '#fff'
  },
  buttonEntrar: {
    backgroundColor: 'rgba(255, 255, 255, .7)',
    width: '100%',
    borderRadius: 20,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20
  },
  buttonEntrarText: {
    fontWeight: 'bold',
    color: '#1C71B9',
    fontSize: 16
  }
});
