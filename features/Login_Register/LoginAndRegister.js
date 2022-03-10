import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Tabs } from '@mantine/core';
import LoginComponent from './login'
import RegisterComponent from './register'
// import { useRouter } from 'next/router';
// import Image from 'next/image';

export const LoginAndRegister = ({ conIndex }) => {
    const [activeTab, setActiveTab] = useState(conIndex);

    return (
        <RegisterLoginContainer>
            <LeftSide>
                {
                    // img
                }
            </LeftSide>
            <LoginAndRegisterSide>
                <CustomTab active={activeTab} position="center" onTabChange={setActiveTab}>
                    <Tabs.Tab label="Login">
                        <LoginComponent />
                    </Tabs.Tab>
                    <Tabs.Tab label="Register">
                        <RegisterComponent />
                        {/* {router.push('/login/register')} */}
                    </Tabs.Tab>
                </CustomTab>
            </LoginAndRegisterSide>
        </RegisterLoginContainer>
    )
}



const RegisterLoginContainer = styled.div`
margin-top:16px;
display:flex;
@media(max-width:47.25rem) {
    flex-direction:column;
}
`

const LeftSide = styled.aside`
width:55%;
background-color: ${({ theme }) => theme.colors.lightRed};
height:900px;
border-radius:.25rem;
@media(max-width:47.25rem) {
    width:100%;
    height:10rem;
}

`

const LoginAndRegisterSide = styled.div`
    padding:16px;
    width:45%;

    @media(max-width:47.25rem) {
    width:100%;
    height:100vh;
}
`

const CustomTab = styled(Tabs)`
margin-top:48px;

.mantine-1gjxu3z {
border-bottom: none;
}

button{
        border-bottom: 0rem ;
        font-size:30.016px;
        color:${({ theme }) => theme.colors.grayText1};


        &[aria-selected='true']{
            color:${({ theme }) => theme.colors.lightRed};
        }
    }


`