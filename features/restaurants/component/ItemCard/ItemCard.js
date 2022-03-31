import { ItemWrapper, ImgWrapper, ContentWrapper, Title, AboutItem, Desc, Price } from './ItemCard.styled'
import Image from 'next/image';
import { ButtonWrap } from '../../../../share/components/Button/Button.styled';
import { useRouter } from 'next/router';

const ItemCard = ({ data }) => {
    const { push } = useRouter()
    return (
        <>
            {data && data.map(({ uniqueId, cuisine, deliverMin, name, price, imgUrl, slug }) => (
                <ItemWrapper key={uniqueId} onClick={() => push(`/restaurants/restaurant?&name=${name}`)} >
                    <ImgWrapper>
                        {
                            imgUrl ? <Image width='174px' height='160px' alt='img' src={imgUrl} /> : <Image width='174px' height='160px' src='/images/pizza.jpg' alt='Pizza' />
                        }
                    </ImgWrapper>
                    <ContentWrapper>
                        <Title>{name}</Title>
                        <Desc className='desc'>{cuisine.map((x, i) => <p key={i}>{x}</p>)} </Desc>
                    </ContentWrapper>
                    <AboutItem >
                        <Price>${price} Delivery</Price>
                        <ButtonWrap>{deliverMin} Min</ButtonWrap>
                    </AboutItem>
                </ItemWrapper>
            ))}
        </>
    );
};


export default ItemCard;