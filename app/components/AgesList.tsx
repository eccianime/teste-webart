import React from 'react';
import { COLORS } from '../config';
import { ScrollContainer, Scroll } from '../styles/view';
import { TextItem } from '../styles/text';
import { AgesListProps } from './types'

const AgesList = ({ list }: AgesListProps) => {
    const renderColor = (age: string) => parseInt(age) < 20 ? COLORS.lightBlue : ( parseInt(age) > 40 ? COLORS.orange : COLORS.purple )
    const renderList = () => (
        !!list.length && list.map( (age, index) => (
            <TextItem key={index} color={renderColor(age)}>{age}</TextItem>
        ))
    )
    return (
        <ScrollContainer>
            <Scroll>{renderList()}</Scroll>
        </ScrollContainer>
    )
}

export default AgesList;