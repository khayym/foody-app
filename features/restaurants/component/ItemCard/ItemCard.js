import { ItemWrapper, ItemBadge, ImgWrapper, ContentWrapper, Title, AboutItem, Desc, Price } from './ItemCard.styled'
import Image from 'next/image';
import { ButtonWrap } from '../../../../components/Button/Button.styled';

const ItemCard = () => {
    return (
        <>
            <ItemWrapper>
                <ItemBadge>New</ItemBadge>
                <ImgWrapper>
                    <Image width='174px' height='161px' src='/images/pizza.jpg' />
                </ImgWrapper>
                <ContentWrapper>
                    <Title>Coffee Mania</Title>
                    <Desc>chinese, sea-food, thai, lebanese, caribbean</Desc>
                </ContentWrapper>
                <AboutItem >
                    <Price>$1 Delivery</Price>
                    <ButtonWrap>09 Min</ButtonWrap>
                </AboutItem>
            </ItemWrapper>
        </>
    );
};

export default ItemCard;