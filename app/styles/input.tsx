import styled from 'styled-components/native';
import { COLORS, pixelDimensions } from '../config';

export const Input = styled.TextInput`
    padding-top: ${pixelDimensions(2)}px;
    padding-bottom: ${pixelDimensions(2)}px;
    padding-left: ${pixelDimensions(5)}px;
    padding-right: ${pixelDimensions(5)}px;
    flex: 1;
    background-color: ${COLORS.white900};
    font-size: ${pixelDimensions(5)}px;
`

