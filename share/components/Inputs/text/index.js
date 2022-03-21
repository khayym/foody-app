import React from 'react';
import { TextInputCustom } from './TextInput.Styled';


export const TextInputOwn = ({ custimize, placeholder, label, vercion }) => {
    return (
        <TextInputCustom
            size="lg"
            mt="md"
            // className={style.ownInput}
            // required
            placeholder={placeholder}
            label={label}
            vercion={vercion}
            {...custimize}
        />
    );
};