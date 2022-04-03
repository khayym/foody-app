import { ItemWrapper, ImgWrapper, ContentWrapper, Title, AboutItem, Desc, Price, SpanWrap } from './ItemCard.styled'
import Image from 'next/image';
import { ButtonWrap } from '../../../../share/components/Button/Button.styled';
import { useRouter } from 'next/router';
// import { LoadingOverlay } from '@mantine/core';

const ItemCard = ({ data }) => {
    const { push } = useRouter()
    return (
        <>
            {/* <LoadingOverlay visible={true} style={{ height: 'auto' }} /> */}
            {data && data.map(({ uniqueId, cuisine, deliverMin, name, deliverPrice, imgUrl, id }) => (
                <ItemWrapper key={uniqueId} onClick={() => push(`/restaurants/restaurant?&name=${name}&id=${id}`)} >
                    <ImgWrapper>
                        {
                            Array.isArray(imgUrl) ? <Image width='174px' height='160px' alt='img' src={imgUrl[0]} /> : <Image width='174px' height='160px' src={imgUrl} alt='Pizza' />
                        }
                    </ImgWrapper>
                    <ContentWrapper>
                        <Title>{name}</Title>
                        <Desc className='desc'>{cuisine.map((x, i) => <SpanWrap key={i}>{x}</SpanWrap>)} </Desc>
                    </ContentWrapper>
                    <AboutItem >
                        <Price>${deliverPrice} Delivery</Price>
                        <ButtonWrap>{deliverMin} Min</ButtonWrap>
                    </AboutItem>
                </ItemWrapper>
            ))}
        </>
    );
};


export default ItemCard;