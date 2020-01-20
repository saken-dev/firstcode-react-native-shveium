import React, {useState} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import BoxForHome from './BoxForHome';


const BoxForHome2 = ({}) =>{

    return (
        <Kvadrat>
            <SexWomen>Женский</SexWomen>
        </Kvadrat>
        );
    }

const Kvadrat = styled.View`
position: absolute;
width: 158px;
height: 39px;
left: 197px;
top: 183px;

background: #FFFFFF;
border-radius: 10px;
`;
const SexWomen = styled.Text`
position: absolute;
width: 61px;
height: 16px;
left: 17px;
top: 12px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #B0B3B8;
`;

export default BoxForHome2