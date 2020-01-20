import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components';
import BoxForHome from '../src/component/BoxForHome';
import BoxForHome2 from '../src/component/BoxForHome2';
import BoxForHome3 from '../src/component/BoxForHome3';
import BoxForHome4 from '../src/component/BoxForHome4';
import BoxWithInput from '../src/component/BoxWithInput';
import BoxWithInput2 from '../src/component/BoxWithInput2';
import BoxWithInput3 from '../src/component/BoxWithInput3';
import BoxWithInput4 from '../src/component/BoxWithInput4';
import BoxWithInput5 from '../src/component/BoxWithInput5';
import CustomButton from '../src/component/CustomButton';

const HomeScreen = () =>{

  return (
        <View style = {{paddingBottom: 1000, backgroundColor: '#F3F2F8'}}>
            <TitleForHome>Генерация</TitleForHome>
            <ChooseSex>Ваш пол:</ChooseSex>
            <BoxForHome></BoxForHome>  
            <BoxForHome2></BoxForHome2>
            <ChooseSize>Размер:</ChooseSize>
            <BoxForHome3></BoxForHome3>
            <BoxForHome4></BoxForHome4>
            <WrHeight>Рост:</WrHeight>
            <Grud>Обхват груди:</Grud>
            <BoxWithInput></BoxWithInput>
            <BoxWithInput2></BoxWithInput2>
            <Weist>Обхват талии:</Weist>
            <BoxWithInput3></BoxWithInput3>
            <Hip>Обхват бедра:</Hip>
            <BoxWithInput4></BoxWithInput4>
            <Neck>Обхват шеи:</Neck>
            <BoxWithInput5></BoxWithInput5>
            <CustomButton text="Создать" textColor="white" backgroundColor="blue" />
        </View>
        );
}
const TitleForHome = styled.Text`
position: absolute;
width: 149px;
height: 35px;
left: 20px;
top: 91px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 30px;
line-height: 35px;
text-align: center;
`
const ChooseSex = styled.Text`
position: absolute;
width: 85px;
height: 23px;
left: 22px;
top: 148px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;
`
const ChooseSize = styled.Text`

position: absolute;
width: 77px;
height: 23px;
left: 22px;
top: 234px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
`
const WrHeight = styled.Text`
position: absolute;
width: 51px;
height: 23px;
left: 20px;
top: 320px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
`
const Grud = styled.Text`
position: absolute;
width: 131px;
height: 23px;
left: 197px;
top: 320px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
`

const Weist = styled.Text`
position: absolute;
width: 133px;
height: 23px;
left: 20px;
top: 418px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;


`
const Hip = styled.Text`
position: absolute;
width: 135px;
height: 23px;
left: 197px;
top: 418px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
`
const Neck = styled.Text`

position: absolute;
width: 117px;
height: 23px;
left: 20px;
top: 516px;

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 23px;

color: #000000;
`
const ButtonContainer = styled.TouchableOpacity`
	width: 100px;
	height: 40px
	padding: 12px;
	border-radius: 10px;	
	background-color: ${props => props.backgroundColor};
`;

export default HomeScreen