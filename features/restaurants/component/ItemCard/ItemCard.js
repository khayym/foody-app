import { ItemWrapper, ItemBadge, ImgWrapper, ContentWrapper, Title, AboutItem, Desc, Price } from './ItemCard.styled'
import Image from 'next/image';
import { ButtonWrap } from '../../../../share/components/Button/Button.styled';


const ItemCard = ({ data }) => {
    return (
        <>
            {data && data.map(({ uniqueId, cuisine, deliverMin, name, price, imgUrl }) => (
                <ItemWrapper key={uniqueId}>
                    <ItemBadge>New</ItemBadge>
                    <ImgWrapper>
                        {
                            imgUrl ? <Image width='174px' height='160px' alt='img' src={imgUrl} /> : <Image width='174px' height='160px' src='/images/pizza.jpg' alt='Pizza' />
                        }

                    </ImgWrapper>
                    <ContentWrapper>
                        <Title>{name}</Title>
                        <Desc>{cuisine[0]}</Desc>
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