import React, { useState } from 'react';
import { Button } from '../styles/button';
import { Input } from '../styles/input';
import { Text } from '../styles/text';
import { Container } from '../styles/view';
import { InputAgeProps } from './types';

const InputAge = ({ handleAddAge }: InputAgeProps) => {
    const [ age, changeAge ] = useState('');
    const handleChangeAge = ( value: string ) => changeAge(value.replace(/\D/g, ''));
    const handleButtonPress = () => {
        handleAddAge(parseInt(age).toString());
        changeAge('');
    }
    return (
        <Container>
            <Input maxLength={3} keyboardType='numeric' value={age} onChangeText={handleChangeAge} />
            <Button disabled={age === ''} onPress={handleButtonPress}>
                <Text>Inserir</Text>
            </Button>
        </Container>
    )
}

export default InputAge;