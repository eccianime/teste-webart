import styled from 'styled-components/native';
import { COLORS, pixelDimensions } from '../config';

export const Container = styled.View`
    flex-direction: row;
`

export const ScrollContainer = styled.View`
    flex: 1;
    margin-top: ${pixelDimensions(4)}px;
    margin-bottom: ${pixelDimensions(4)}px;
`

export const Scroll = styled.ScrollView`
    background-color: ${COLORS.white700};
    padding: ${pixelDimensions(3)}px;
`

export const ModalView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.5);
`

export const ModalContent = styled.View`
    padding: ${pixelDimensions(5)}px;
    background-color: ${COLORS.white};
    height: ${pixelDimensions(50)}px;
    width: ${pixelDimensions(80)}px;
`

export const BaseView = styled.View`
  padding: ${pixelDimensions(5)}px;
  background-color: ${COLORS.darkBlue};
  flex: 1;
`