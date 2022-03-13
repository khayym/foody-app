import styled from "styled-components";

export const Wrap = styled.div`
padding: 70px 120px;

.mantine-Accordion-item{
    box-shadow: 0px 3px 8px -2px #00000033 !important;
    margin: 10px 0px;
}

.mantine-Accordion-itemOpened line{
    &:nth-child(even){
        display: none !important;
    }
}

@media (max-width:575.9px) {
    padding: 50px 12px !important;
    }
`
