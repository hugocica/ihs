import React from 'react';
import { Modal, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';

const RatingModal = ({ isOpen, changeVisibility }) => {
  return (
    <Modal visible={isOpen} style={styles.modalWrapper}>
      <View style={styles.container}>
        <Text style={styles.modalTitle}>Avalie o Atendimento</Text>

        <Text style={styles.modalText}>O profissional realizou todos os procedimentos corretamente?</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity>
            <Text style={styles.questionButton}>SIM</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.questionButton}>NÃO</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.modalText}>Avalie o Atendimento:</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={3.5}
          fullStarColor="#F7AD0E"
          starSize={35}
        />

        <TextInput
          multiline={true}
          numberOfLines={4}
          style={styles.modalTextField} 
          placeholder="Deixe aqui o seu comentario (opcional)" 
        />

        <TouchableOpacity style={styles.modalButton} onPress={() => changeVisibility(!isOpen)}>
          <Text style={styles.modalButtonText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15
  },
  modalClosed: {
    display: 'none'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#237AE3'
  },
  modalTitle: {
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 8,
    fontSize: 20,
    marginBottom: 15,
    color: '#fff'
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
    color: '#fff'
  },
  modalTextField: {
    borderWidth: 2,
    borderColor: '#fff',
    marginVertical: 15,
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '100%',
    color: '#fff'
  },
  modalButton: {
    backgroundColor: '#fff',
    borderRadius: 6,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 15
  },
  modalButtonText: {
    
  },
  buttonWrapper: {
    flexDirection: 'row'
  },
  questionButton: {
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: '#fff',
    color: '#fff'
  }
});

export default RatingModal;