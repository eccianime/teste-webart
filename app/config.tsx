import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const COLORS = {
    darkBlue: '#2c3e50',
    green: '#1abc9c',
    darkGreen: '#353535',
    blue: '#3498db',
    white: '#FFFFFF',
    lightBlue: '#2bb1db',
    purple: '#824df2',
    orange: '#e48a1f',
    white700: '#ecf0f1',
    white900: '#f0f0f0',
    black: '#000',
}

export const pixelDimensions = (n: number) => {
    return wp(n) > hp(n) ? hp(n) : wp(n) ;
};
