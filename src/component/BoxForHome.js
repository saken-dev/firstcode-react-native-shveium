import React, {useState} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';


const BoxForHome = ({}) =>{

    return (
        <Kvadrat>
            <SexMen>Мужской</SexMen>
        </Kvadrat>
        );
    }

const Kvadrat = styled.View`
position: absolute;
width: 158px;
height: 39px;
left: 18px;
top: 183px;

background: #FFFFFF;
border-radius: 10px;
`;
const SexMen = styled.Text`
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

color:#B0B3B8;
`;

export default BoxForHome