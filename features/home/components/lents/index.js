import React from 'react'
import { Card, Image, Text, Group, } from '@mantine/core';
import { CustomCard, LentBox } from './Lents.Styled';


const Lents = ({ data: { consept, title, content } }) => {
    return (

        <LentBox>
            <h1>{title}</h1>
            <p>{consept}</p>
            <div className='cards-collection'>

                {
                    content.map(item => (
                        <CustomCard shadow="sm" p="lg" key={item.id}>
                            <Card.Section>
                                <Image src={item.img} height={223} alt="Norway" />
                            </Card.Section>

                            <Group position="center" style={{ marginBottom: 5 }}>
                                <Text weight={700} className='text-head'>{item.title}</Text>
                            </Group>

                            <Text style={{ lineHeight: 1.5 }} className='text-fut'>
                                {item.desc}
                            </Text>
                        </CustomCard>
                    ))
                }

            </div>
        </LentBox>
    );
}

export default Lents

