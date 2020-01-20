import React from 'react';
import styled from 'styled-components';

const ButForSignUp = props => ( 
    
	<ButtonContainer
        onPress = {props.onPress}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
);
export default ButForSignUp;

const ButtonContainer = styled.TouchableOpacity`
	width: 250px;
	height: 40px
	padding: 12px;
    border-radius: 10px;
    top:420px;
    left: 55px;	
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`

    color: ${props => props.textColor};
	position: absolute;
    width: 139px;
    height: 16px;
    left: 54px;
    top: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;

`;