import React from 'react'
import { TextInputOwn } from '../../../share/components/Inputs/text';
import { CustomButton, Div, ProfileComponent, UserProfileContainer } from './profil.styled';
// import { useAuth } from '../../../src/context/AuthContext'


const Profil = () => {
    // const { user } = useAuth();
    // console.log(user);
    return (
        <ProfileComponent>
            <h1>Profile</h1>
            <Div>

                <UserProfileContainer>
                    <TextInputOwn label='Full Name' placeholder='Khayyam Karimov'></TextInputOwn>
                    <TextInputOwn label='Username' placeholder='Khayym'></TextInputOwn>
                    <TextInputOwn label='Contact Number' placeholder='+994 55 000 00 00'></TextInputOwn>
                </UserProfileContainer>
                <UserProfileContainer>
                    <TextInputOwn label='Email' placeholder='expamle@gmail.com'></TextInputOwn>
                    <TextInputOwn label='Address' placeholder='Baku,Azerbijan'></TextInputOwn>
                    <CustomButton>Save</CustomButton>
                </UserProfileContainer>

            </Div>
        </ProfileComponent>
    )
}

export default Profil
