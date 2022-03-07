import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonWrap = styled(Button).attrs(() => ({
    variant: "contained",
}))`

padding: 6px 16px;
border-radius: 30px;
background-color: ${({ theme }) => theme.colors.mainRed} !important;
`