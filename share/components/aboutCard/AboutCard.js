import Image from "next/image";
import Rating from '@mui/material/Rating';
import {
    CardWrapper,
    CardImage,
    Text,
    Title,
    Price,
    Wrapper,
} from './AboutCard.styled'

const AboutCard = ({ top, left}) => {
    return (
        <>
            <Wrapper top={top} left={left} >
                <CardWrapper>
                    <CardImage>
                        <Image alt="" src="/images/howitwork1.svg" width='50px' height='50px' />
                    </CardImage>
                    <Text>
                        <Title>Hamburger</Title>
                        <Rating size="small" name="read-only" value={5} readOnly />
                        <Price>$ 5.90</Price>
                    </Text>
                </CardWrapper>
            </Wrapper>
        </>
    );
};

export default AboutCard;