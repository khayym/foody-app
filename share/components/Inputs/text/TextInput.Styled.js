import styled from 'styled-components'
import { TextInput } from '@mantine/core';
import { css } from 'styled-components';


export const TextInputCustom = styled(TextInput)`
color:${({ vercion }) => {
        switch (vercion) {
            case "user":
                return css`       
                    label{
                    font-size: 18px !important;
                    color:red !important;
                    font-weight:600 !important;
                    }

                    input{
                    border:0px solid;
                    background-color: #fff !important;
                    height: 53px !important;
                    border-radius: 4px !important;
                    color: #828282 !important;
                    font-size: 20px !important;
                    width: 100% !important;

                    &::placeholder {
                    color: #828282 !important;
                    font-size: 20px !important;
                    }

                }
        `;
            case 'login':
                return css`

                label{
                    font-size: 17px !important;
                    color: #2E3A59 !important;
                    font-weight:600 !important;

                }
                    input{
                    background-color: #f7f9fc !important;
                    height: 48px !important;
                    border-radius: 4px !important;
                    color: #2e3a59 !important;
                    font-size: 19px !important;
                    width: 100% !important;
                    
                    &::placeholder {
                        color: #8f9bd3 !important;
                        font-size: 19px !important;
                    }

                }
        `;
        }
    }};
/* width:100%; */

`

