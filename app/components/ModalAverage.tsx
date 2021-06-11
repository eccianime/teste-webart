import React from 'react';
import { Modal } from 'react-native';
import { ModalView, ModalContent } from '../styles/view';
import { ButtonBottom } from '../styles/button';
import { TitleText, AverageText } from '../styles/text';
import { ModalProps } from './types';

const ModalAverage = ({ data, toggleModal, handleCleanAll }: ModalProps) => (
    <Modal
        animationType='fade'
        transparent={true}
        visible={data.visible}
    >
        <ModalView>
            <ModalContent>
                <TitleText>{`A média é ${data.average}`}</TitleText>
                <ButtonBottom withMargin onPress={() => toggleModal({ ...data, visible: false })}><AverageText>Fechar</AverageText></ButtonBottom>
                <ButtonBottom onPress={handleCleanAll}><AverageText>Fechar e Limpar</AverageText></ButtonBottom>
            </ModalContent>
        </ModalView>
    </Modal>
)

export default ModalAverage;