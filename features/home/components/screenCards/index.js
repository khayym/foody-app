import React from 'react'
import { Card, Image, Text } from '@mantine/core';
import { ScreenCardsContainer } from './Screen.Styled';


const ScreenCards = ({ data }) => {
    return (
        <div>

            {
                data.map(items => (
                    <ScreenCardsContainer key={items.id} rev={items.rev}>
                        <Card className='card-text-con'>
                            <Text className='text-head'>
                                {items.title}
                            </Text>

                            <Text className='card-text'>
                                {items.placeholder}
                            </Text>
                        </Card>

                        <Card className='card-img'>
                            <Card.Section className='rot'>
                                <Image src={items.img} height={500} width={500} alt="Norway" />
                            </Card.Section>
                        </Card>
                    </ScreenCardsContainer>
                ))
            }

        </div>
    );
}

export default ScreenCards
