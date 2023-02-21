import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import Button from './Button';

const WinModal = ({ isOpen, onClose, onRestart }) => {
  return (
    <Modal visible={isOpen} animationType="slide" transparent>
      <View style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Parabéns, você acertou todas as perguntas!</Text>
          <Button title="Reiniciar" onPress={onRestart} />
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default WinModal;