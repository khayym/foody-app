import React from 'react'
import { useState } from 'react';
import { Tabs } from '@mantine/core';
import LoginComponent from './login'
import RegisterComponent from './register'
// import Image from 'next/image';
import { CustomTab, LeftSide, LoginAndRegisterSide, RegisterLoginContainer } from './Register.Styled';
import { Image } from '@mantine/core';

export const LoginAndRegister = ({ conIndex }) => {
    const [activeTab, setActiveTab] = useState(conIndex);

    return (
        <RegisterLoginContainer>
            <LeftSide>

                {!activeTab ? <Image
                    width={567} height={728}
                    fit="contain"
                    alt='register-img'
                    src='/images/login/login.svg'
                /> : <Image src='/images/login/register.svg' width='567' height='728' alt='Login' className='side-img' />}
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

