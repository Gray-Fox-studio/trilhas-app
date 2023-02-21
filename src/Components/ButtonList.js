import React, { useState } from 'react';
import { View } from 'react-native';
import Button from './Button';
import QuestionModal from './QuestionModal';
import WinModal from './WinModal';

const ButtonList = () => {
    const [currentButtonIndex, setCurrentButtonIndex] = useState(0);
    const [buttons, setButtons] = useState([
        {
            id: 1,
            label: 'Pergunta 1',
            question: 'As Unidades de Conservação (UCs) são espaços naturais protegidos por lei. O principal objetivo desses espaços é a proteção dos recursos naturais necessários à subsistência de populações tradicionais, respeitando e valorizando seu conhecimento e sua cultura e promovendo-as social e economicamente. Com base nessas informações, como as Unidades de Conservação contribuem para uma cidade, como João Pessoa?',
            options: ['Abrigando espécies exóticas que são necessárias para a biodiversidade local.', 'Contribuindo com a preservação de espaços verdes, assim como a proteção da fauna e flora.', 'Servindo apenas como atração turística para a cidade.'],
            answer: 1,
            disabled: false,
        },
        {
            id: 2,
            label: 'Pergunta 2',
            question: 'As Unidades de Conservação (UCs), podem ser divididas em determinadas categorias. Das opções a seguir, marque aquela que representa a categoria da Mata do Buraquinho, Unidade  onde se encontra o Jardim Botânico de João Pessoa.',
            options: ['Estação Ecológica', 'Parque Nacional', 'Refúgio de Vida Silvestre'],
            answer: 2,
            disabled: true,
        },
        {
            id: 3,
            label: 'Pergunta 3',
            question: 'O órgão responsável por gerir a Mata do Buraquinho, onde se encontra o Jardim Botânico de João Pessoa é:',
            options: ['SEMAM', 'SUPLAN', 'SUDEMA'],
            answer: 2,
            disabled: true,
        },
        {
            id: 4,
            label: 'Pergunta 4',
            question: 'Verdadeiro ou falso: A Mata do Buraquinho, onde se localiza o Jardim Botânico, é conhecida pelo seu  pioneirismo no abastecimento de água da cidade de João Pessoa e ainda hoje, continua contribuindo com a distribuição do recurso hídrico para parte da cidade. ',
            options: ['Verdadeiro', 'Falso'],
            answer: 0,
            disabled: true,
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [isWinModalOpen, setIsWinModalOpen] = useState(false);

    //função para checkar se a resposta esta correta e dar continuidade ao Quiz se a resposta anterior for True
    const handleAnswer = (isCorrect) => {
        setIsAnswerCorrect(isCorrect);
        if (isCorrect && currentButtonIndex < buttons.length - 1) {
            const newButtons = buttons.map((button, index) => {
                if (index === currentButtonIndex) {
                    return {
                        ...button,
                        disabled: true,
                    };
                } else if (index === currentButtonIndex + 1) {
                    return {
                        ...button,
                        disabled: false,
                    };
                } else {
                    return button;
                }
            });
            setButtons(newButtons);
            setCurrentButtonIndex(currentButtonIndex + 1);
        } else if (isCorrect && currentButtonIndex === buttons.length - 1) {
            setIsWinModalOpen(true);
        }
        if (isCorrect) {
            setIsModalOpen(false);
        }
    };

    const handleButtonPress = (index) => {
        if (!buttons[index].disabled) {
            setCurrentButtonIndex(index);
            setIsModalOpen(true);
        }
    };

    const handleWinModalClose = () => {
        setIsWinModalOpen(false);
    };

    //função para resetar o Quiz setando todas os estados para zero e Resetando a Pergunta da Vez
    const handleReset = () => {
        const newButtons = buttons.map((button, index) => {
            return {
                ...button,
                disabled: index === 0 ? false : !buttons[index - 1].isAnswerCorrect,
            };
        });
        setButtons(newButtons);
        setCurrentButtonIndex(0);
        setIsModalOpen(false);
        setIsAnswerCorrect(false);
        setIsWinModalOpen(false);
    };

    return (
        <View>
            {buttons.map((button, index) => (
                <Button
                    key={button.id}
                    title={button.label}
                    disabled={button.disabled}
                    onPress={() => handleButtonPress(index)}
                />
            ))}
            <QuestionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                question={buttons[currentButtonIndex].question}
                options={buttons[currentButtonIndex].options}
                answer={buttons[currentButtonIndex].answer}
                onAnswer={handleAnswer}
            />
            <WinModal isOpen={isWinModalOpen} onClose={handleWinModalClose} onRestart={handleReset} />
        </View>
    );
};

export default ButtonList;