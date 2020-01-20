import React, {useState} from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';


const BoxWithInput5 = ({}) =>{
    const [Hip, setHip] = useState('')
    return (
        <Kvadrat>
        <Input
    
          placeholder="0"
          onChangeText={(Hip) => setHip({Hip})}
          value={Hip}
          keyboardType = 'numeric'
        />
        <Cm>см</Cm>
        </Kvadrat>
        );
    }

const Kvadrat = styled.View`
position: absolute;
width: 158px;
height: 55px;
left: 20px;
top: 547px;

background: #FFFFFF;
border-radius: 10px;
`;

const Input = styled.TextInput`

position: absolute;
width: 86px;
height: 33px;
left: 17px;
top: 12px;

background: #F2F3F5;
border-radius: 5px;
paddingLeft: 7px;
`
const Cm = styled.Text`
position: absolute;
width: 18px;
height: 16px;
left: 120px;
top: 21px;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 16px;

color: #B0B3B8;
`
export default BoxWithInput5