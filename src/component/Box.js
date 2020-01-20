import React, {useState} from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';


const Box = ({regmail}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <Kvadrat>
        <Input
          placeholder="E-mail"
          onChangeText={(email) => setEmail({email})}
          value={email}
        />
        <InputPas
          placeholder="Password"
          onChangeText={(password) => setPassword({password})}
          value={password}
          secureTextEntry={true}
        />
        </Kvadrat>
        );
    }

const Kvadrat = styled.View`
position: absolute;
width: 322px;
height: 233px;
left: 20px;
top: 280px;

background: white;
box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.05);
border-radius: 15px;
`;

const Input = styled.TextInput`
position: absolute;
width: 295px;
height: 43px;
left: 13px;
top: 20px;
padding-left: 15px;
background: #F2F3F5;
border-radius: 5px;
`

const InputPas = styled.TextInput`
position: absolute;
width: 295px;
height: 43px;
left: 13px;
top: 80px;
padding-left: 15px;
background: #F2F3F5;
border-radius: 5px;
`
export default Box