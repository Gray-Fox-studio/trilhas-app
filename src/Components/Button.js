import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ onPress, disabled, title }) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Button;