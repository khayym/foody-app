import React, { useState } from 'react';
import { useForm } from '@mantine/hooks';
import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';
import { RegisterContainer } from '../Register.Styled';
import {
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Text,
    LoadingOverlay,
} from '@mantine/core';
import { useAuth } from '../../../src/context/AuthContext';
import { useRouter } from 'next/router'

export function AuthenticationForm({ style }) {
    const { signup, loginError } = useAuth();
    const router = useRouter();
    const [formType, setFormType] = useState('register');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const form = useForm({
        initialValues: {
            fullname: '',
            username: '',
            email: '',
            password: '',
            termsOfService: true,
        },

        validationRules: {
            fullname: (value) => formType === 'login' || value.trim().length >= 4,
            email: (value) => /^\S+@\S+$/.test(value),
            password: (value) => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(value),
            confirmPassword: (val, values) => formType === 'login' || val === values.password,
        },

        errorMessages: {
            email: 'Invalid email',
            password: 'Password should contain 1 number, 1 letter and at least 6 characters',

        },
    });

    const handleSubmit = async (data) => {
        data.preventDefault
        setLoading(true);
        setError(null);
        await signup(data.email, data.password, data.fullname);
        setLoading(false);
        // router.push('/');

    };

    return (
        <RegisterContainer
            // padding={noPadding ? 0 : 'lg'}
            style={{
                margin: '5.6rem 1.8rem 0 1.8rem',
                position: 'relative',
                // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
                ...style,
            }}
        >
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <LoadingOverlay visible={loading} />

                <TextInput
                    required
                    placeholder="Your full name"
                    label="Full name"
                    size="lg"
                    {...form.getInputProps('fullname')}
                />

                <TextInput
                    mt="md"
                    size="lg"
                    required
                    placeholder="Your username"
                    label="Username"
                    {...form.getInputProps('username')}
                />


                <TextInput
                    size="lg"
                    mt="md"
                    required
                    placeholder="Your email"
                    label="Email"
                    icon={<EnvelopeClosedIcon />}
                    {...form.getInputProps('email')}
                />

                <PasswordInput
                    mt="md"
                    size="lg"
                    required
                    placeholder="Password"
                    label="Password"
                    icon={<LockClosedIcon />}
                    {...form.getInputProps('password')}
                />

                {formType === 'register' && (
                    <Checkbox
                        mt="sm"
                        label="I agree to sell my soul and privacy to this corporation"
                        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />
                )}

                {error || loginError && (
                    <Text color="red" size="sm" mt="sm">
                        {error}{loginError}
                    </Text>
                )}


                <Button type="submit" style={{ marginTop: 50 }} fullWidth size="lg">
                    {formType === 'register' ? 'Register' : 'Login'}
                </Button>
            </form>
        </RegisterContainer>
    );
}

