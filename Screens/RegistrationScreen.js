import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Box from '../src/component/Box';
import ButForSignUp from '../src/component/ButForSignUp';

const RegistrationScreen = ({navigation}) =>{
  const goToHome = () =>{
    navigation.navigate("Home")
  }
  
  return (
    <View style = {{backgroundColor: '#F3F2F8', paddingBottom: 2000}}>
      <Name>Switcher</Name>
      <TextRegistration>Регистрация</TextRegistration>
      <Box></Box>
      <ButForSignUp text="Зарегистрироваться" textColor="white" backgroundColor="blue" onPress = {goToHome} />
      <ForgetPassword>Уже зарегистрированы? Войти</ForgetPassword>
    </View>
        );
}


const Name = styled.Text`
position: absolute;
width: 111px;
height: 33px;
left: 128px;
top: 181px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 33px;
  `;

const TextRegistration = styled.Text`
position: absolute;
width: 121px;
height: 20px;
left: 21px;
top: 246px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 19px;
line-height: 23px;
`;

const ForgetPassword = styled.Text`
position: absolute;
width: 142px;
height: 32px;
left: 110px;
top: 472px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 16px;
text-align: center;

color: #000000;
`;


export default RegistrationScreen