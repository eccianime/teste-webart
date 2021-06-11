import React from 'react';
import { ButtonBottom } from '../styles/button';
import { AverageText } from '../styles/text';
import { ButtonCalcProps } from './types';

const ButtonCalc = ({ makeAverage, disabled }: ButtonCalcProps) => (
    <ButtonBottom disabled={disabled} onPress={makeAverage}>
        <AverageText>Calcular Média</AverageText>
    </ButtonBottom>
)

export default ButtonCalc;