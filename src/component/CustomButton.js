import React from 'react';
import styled from 'styled-components';
import { ShadowPropTypesIOS } from 'react-native';

const CustomButton = props => (
	<ButtonContainer
		onPress={props.onPress}
		backgroundColor={props.backgroundColor}
	>
		<ButtonText textColor={props.textColor}>{props.text}</ButtonText>
	</ButtonContainer>
);

export default CustomButton;

const ButtonContainer = styled.TouchableOpacity`
	width: 250px;
	height: 40px
	padding: 12px;
    border-radius: 10px;
    top:620px;
    left: 55px;	
	background-color: ${props => props.backgroundColor};
`;

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
`;