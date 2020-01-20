import React, {useState} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';


const BoxForHome3 = ({}) =>{

    return (
        <Kvadrat>
            <Adult>Взрослый</Adult>
        </Kvadrat>
        );
    }

const Kvadrat = styled.View`
position: absolute;
width: 158px;
height: 39px;
left: 20px;
top: 269px;

background: #FFFFFF;
border-radius: 10px;
`;
const Adult = styled.Text`
position: absolute;
width: 67px;
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

export default BoxForHome3