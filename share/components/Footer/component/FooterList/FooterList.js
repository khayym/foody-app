import Link from 'next/link';
import { List, Item, TitleItem } from './FooterList.styled'
const FooterList = () => {
    return (
        <>
            <List>
                <TitleItem>Popular</TitleItem>
                <Link href='/'>
                    <a>
                        <Item>Programming</Item>
                    </a>
                </Link>
                <Link href='/how-it-work'>
                    <a>
                        <Item>Books for children</Item>
                    </a>
                </Link>
                <Link href='/restaurants'>
                    <a>
                        <Item>Psychology</Item>
                    </a>
                </Link>
                <Link href='/about-us'>
                    <a>
                        <Item>Business</Item>
                    </a>
                </Link>
            </List>
        </>
    );
};

export default FooterList;