import React, { useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuestionModal = ({ isOpen, onClose, question, options, answer, onAnswer }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const handleAnswer = () => {
        // Verifica se a resposta selecionada é igual à resposta correta
        if (selectedAnswer === answer) {
            onAnswer(true);
            setSelectedAnswer(null);
            setShowErrorMessage(false);
            onClose();
            // Define a flag para mostrar a mensagem de resposta incorreta
        } else {
            setShowErrorMessage(true);
            onAnswer(false);
        }
    };
    // Limpa a flag para mostrar a mensagem de resposta incorreta sempre que uma nova pergunta é exibida
    const handleOptionPress = (index) => {
        if (showErrorMessage) {
            setShowErrorMessage(false);
        }
        setSelectedAnswer(index);
    };

    return (
        <Modal visible={isOpen} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.questionText}>{question}</Text>
                    {options.map((option, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[
                                styles.optionButton,
                                selectedAnswer === index && styles.selectedOptionButton,
                            ]}
                            onPress={() => handleOptionPress(index)}
                        >
                            <Text style={styles.optionText}>{option}</Text>
                        </TouchableOpacity>
                    ))}
                    {showErrorMessage && (
                        <View style={styles.errorContainer}>
                            <Text style={styles.errorText}>Resposta incorreta</Text>
                        </View>
                    )}
                    <TouchableOpacity style={styles.answerButton} onPress={handleAnswer}>
                        <Text style={styles.answerText}>Responder</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
export default QuestionModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    optionButton: {
        backgroundColor: '#f2f2f2',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
    },
    selectedOptionButton: {
        backgroundColor: '#d9d9d9',
    },
    optionText: {
        fontSize: 16,
    },
    answerButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginTop: 20,
        borderRadius: 5,
    },
    answerText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    incorrectMessage: {
        color: '#333'
    }
});
