import styled from 'styled-components/native';
import { COLORS, pixelDimensions } from '../config';

export const Button = styled.TouchableOpacity`
    background-color: ${COLORS.green};
    padding-top: ${pixelDimensions(3)}px;
    padding-bottom: ${pixelDimensions(3)}px;
    padding-left: ${pixelDimensions(8)}px;
    padding-right: ${pixelDimensions(8)}px;
    margin-left: ${pixelDimensions(3)}px;
`

export const ButtonBottom = styled.TouchableOpacity`
    padding: ${pixelDimensions(2)}px;
    background-color: ${COLORS.blue};
    margin-bottom: ${(props: { withMargin?: boolean }) => props.withMargin ? pixelDimensions(5) : '0'}px;
`