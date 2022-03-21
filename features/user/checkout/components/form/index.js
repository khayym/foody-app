import React from 'react'
import { useForm } from '@mantine/form';
import { Button } from '@mantine/core';
import { FormInput } from './form.styled';
// import { RadioGroup } from '@mantine/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const Form = () => {

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
                    <FormInput label="Delivery address" placeholder='Ataturk 45 Ganclik Baku' custimize={{ ...form.getInputProps('address') }} />
                    <FormInput label="Contact Number" placeholder='+994' custimize={{ ...form.getInputProps('number') }} />
                </div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="pay at the door" />
                        <FormControlLabel value="male" control={<Radio />} label="pay at the door by credit card" />

                    </RadioGroup>
                </FormControl>

                {/* <Button type="submit">Submit</Button> */}
            </form>

        </section>
    )
}

export default Form