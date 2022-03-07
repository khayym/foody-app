import { ItemWrapper, ItemBadge, ImgWrapper, ContentWrapper, Title, AboutItem, Desc, Price} from './ItemCard.styled'
import Image from 'next/image';
import { ButtonWrap } from '../../../../share/components/Button/Button.styled';


const ItemCard = ({ data }) => {
    return (
        <>
            {data && data.map((i) => (
                <ItemWrapper key={i.id}>
                    <ItemBadge>New</ItemBadge>
                    <ImgWrapper>
                        <Image width='174px' height='160px' src='/images/pizza.jpg' />
                    </ImgWrapper>
                    <ContentWrapper>
                        <Title>Burger {i.id}</Title>
                        <Desc>chinese, sea-food, thai, lebanese, caribbean</Desc>
                    </ContentWrapper>
                    <AboutItem >
                        <Price>$1 Delivery</Price>
                        <ButtonWrap>09 Min</ButtonWrap>
                    </AboutItem>
                </ItemWrapper>
            ))}
        </>
    );
};


export default ItemCard;