import React from 'react'
import { useForm } from '@mantine/form';
import { CustomRadio, FormControled, FormInput, SubmitButton } from './form.styled';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';

const Form = () => {
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
        },

        validate: {
            number: (value) => (/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value) ? null : 'Invalid phone number'),
        },
    });


    return (
        <section>
            <h2>Checkout</h2>

            <form onSubmit={form.onSubmit((values) => console.log(values))}>
                <div className="content">
                    <FormInput label="Delivery address" placeholder='Ataturk 45 Ganclik Baku' custimize={{ ...form.getInputProps('address') }} vercion='user' />
                    <FormInput label="Contact Number" placeholder='+994' custimize={{ ...form.getInputProps('number') }} vercion='user' />
                </div>
                <FormControled>
                    <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <MyFormControlLabel value="female" control={<CustomRadio />} checked label="pay at the door" />
                        <MyFormControlLabel value="male" control={<CustomRadio />} label="pay at the door by credit card" />

                    </RadioGroup>
                </FormControled>

                <SubmitButton fullWidth>
                    Checkout
                </SubmitButton>
            </form>

        </section>
    )
}

export default Form