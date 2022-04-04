import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { CustomRadio, FormControled, FormInput, SubmitButton } from './form.styled';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAuth } from '../../../../../src/context/AuthContext'
import { db } from '../../../../../src/config/firebase';
import { addDoc, collection } from '@firebase/firestore';
import Image from 'next/image';

const Form = () => {
    const [value, setValue] = React.useState('');
    const { user } = useAuth();
    const ordersRef = collection(db, "orders");
    const [submitIcon, setSubmitIcon] = useState(false);

    let productsData = JSON.parse(localStorage.getItem("basket")) || []

    const StyledFormControlLabel = styled((props) => <FormControlLabel {...props} />)(
        ({ checked }) => ({
            '.MuiFormControlLabel-label': checked ? { color: '#6FCF97' } : { color: '#828282' }
        }),
    );

    function MyFormControlLabel(props) {
        const radioGroup = useRadioGroup();

        let checked = false;

        if (radioGroup) {
            checked = radioGroup.value === props.value;
        }

        return <StyledFormControlLabel checked={checked} {...props} />;
    }


    const form = useForm({
        initialValues: {
            address: '',
            number: '',
            key: Date.now(),
            date: `${new Date().getDate()} Apr ${new Date().getFullYear()}`,
        },

        validate: {
            number: (value) => (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value) ? null : 'Invalid phone number'),
        },
    });

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };


    const submitBastek = async (data) => {
        await addDoc(ordersRef, data)
        setSubmitIcon(true)
    }

    return (
        <section className="form-sec">
            {
                !submitIcon && <>
                    <h2>Checkout</h2>
                    <form onSubmit={form.onSubmit((values) => submitBastek({ ...values, productsData, ...user, payment: value }))}>
                        <div className="content">
                            <FormInput label="Delivery address" placeholder='Ataturk 45 Ganclik Baku' custimize={{ ...form.getInputProps('address') }} vercion='user' required />
                            <FormInput label="Contact Number" placeholder='+994' custimize={{ ...form.getInputProps('number') }} vercion='user' required />
                        </div>
                        <FormControled>
                            <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <MyFormControlLabel value="cash" control={<CustomRadio />} onChange={handleRadioChange} label="pay at the door" />
                                <MyFormControlLabel value="credit card" control={<CustomRadio />} onChange={handleRadioChange} label="pay at the door by credit card" />

                            </RadioGroup>

                        </FormControled>

                        <SubmitButton fullWidth type="submit">
                            Checkout
                        </SubmitButton>
                    </form>
                </>
            }

            {
                submitIcon && <div style={{ margin: '0 auto' }}>
                    <Image src='/images/order.svg' alt='Order' width='200' height='200' />
                </div>
            }



        </section>
    )
}

export default Form