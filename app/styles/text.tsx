import styled from 'styled-components/native';
import { COLORS, pixelDimensions } from '../config';

export const Text = styled.Text`
    font-size: ${pixelDimensions(5)}px;
    color: ${COLORS.darkGreen};
`

export const WhiteText = styled.Text`
    font-size: ${pixelDimensions(7)}px;
    font-weight: bold;
    color: ${COLORS.white};
    margin-bottom: ${pixelDimensions(3)}px;
`

export const TextItem = styled(Text)`
    font-weight: bold;
    color: ${ (props: { color: string }) => props.color };
`

export const AverageText = styled.Text`
    color: ${COLORS.white};
    text-align: center;
    font-size: ${pixelDimensions(6)}px;
`

export const TitleText = styled(WhiteText)`
    color: ${COLORS.black};
    text-align: center;
`