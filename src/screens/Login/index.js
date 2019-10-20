import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function App({ navigation }) {
  const goToNextPage = () => {
    return navigation.navigate('PacienteView')
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.imgWrapper}>
        <Image style={styles.imgLogo} source={require('../../../assets/img/ihs-logo-vazado.png')} />
      </View>
      <TextInput style={styles.textInput} keyboardType="numeric" placeholder="CPF" />
      <TextInput style={styles.textInput} secureTextEntry placeholder="Senha" />
      <TouchableOpacity style={styles.forgotTextWrapper}>
        <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonEntrar} onPress={() => goToNextPage()}>
        <Text style={styles.buttonEntrarText}>Entrar</Text>
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
    paddingHorizontal: 12
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
    color: '#237AE3',
    fontSize: 16
  }
});
