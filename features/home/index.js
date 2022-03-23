import React from 'react'
import Image from 'next/image';
import { Button, Grid, SimpleGrid } from '@mantine/core';
import Lents from './components/lents';
import ScreenCards from './components/screenCards';
import { useRouter } from 'next/router'
import { useAuth } from '../../src/context/AuthContext'
import { HomeContainer } from './Home.Styled';

const lentOne = {
    title: "Features",
    consept: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    content: [
        {
            img: '/images/home/lent/one.svg',
            title: 'Discount Boucher',
            desc: 'Lorem ipsum is placeholder  commonly used in the graphic',
            id: 1
        },
        {
            img: '/images/home/lent/two.svg',
            title: 'Fresh healthy Food',
            desc: 'Lorem ipsum is placeholder  commonly used in the graphic',
            id: 2,
        },
        {
            img: '/images/home/lent/sec.svg',
            title: 'Fast Home Delivery',
            desc: 'Lorem ipsum is placeholder  commonly used in the graphic',
            id: 3,
        },
    ]
}

const screen = [
    {
        id: 1,
        title: 'Menu That Always Make You Fall In Love',
        placeholder: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        img: '/images/home/cards/kfc.svg',
        rev: 'false'
    },
    {
        id: 2,
        title: 'Yummy Always Papa John’s Pizza.Agree?',
        placeholder: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        img: '/images/home/cards/pizaa.svg',
        rev: 'true'
    },
    {
        id: 3,
        title: 'Do You Like French Fries? Mmm...',
        placeholder: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
        img: '/images/home/cards/free.svg',
        rev: 'false'
    },
]

const lentTwo = {
    title: "Our Popular Update New Foods",
    consept: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
    content: [
        {
            img: '/images/home/lent2/burger.svg',
            title: 'Dubble Chees',
            desc: 'Lorem ipsum is placeholder  commonly used in the graphic',
            id: 1
        },
        {
            img: '/images/home/lent2/pizza.svg',
            title: 'Margarita',
            desc: 'Lorem ipsum is placeholder  commonly used in the graphic',
            id: 2,
        },
        {
            img: '/images/home/lent2/kfc.svg',
            title: 'Twister Menu',
            desc: 'Lorem ipsum is placeholder  commonly used in the graphic',
            id: 3,
        },
    ]
}

const HomePage = () => {

    const { user } = useAuth();
    const { push } = useRouter();
    return (
        <HomeContainer>
            <SimpleGrid
                className='homeHeader'
                cols={2}
                spacing="lg"
                breakpoints={[
                    { maxWidth: 900, cols: 1 },
                    { maxWidth: 600, cols: 1 },
                ]}
            >
                <Grid.Col span={7} className='gird-content'>
                    <h1>Our Food site makes it easy to find local food</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <div className='button-group'>
                        {!user && <Button radius="xl" size="lg" onClick={() => push('/register')}>Register</Button>}
                        <Button radius="xl" size="lg" onClick={() => push('/restaurants')}>Order now</Button>
                    </div>
                </Grid.Col>
                <Grid.Col span={5} style={{ width: '100%', height: '500px', position: 'relative', backgroundColor: '#181617', borderRadius: '100px' }} className='imgContainer'>
                    <Image
                        alt='Mountains'
                        src='/images/burger.svg'
                        layout='fill'
                        objectFit='contain'
                        priority
                    />
                </Grid.Col>
            </SimpleGrid>
            <main>
                <Lents data={lentOne} />
                <ScreenCards data={screen} />
                <Lents data={lentTwo} />
            </main>
        </HomeContainer>
    )
}

export default HomePage

