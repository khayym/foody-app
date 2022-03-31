import { ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { CustomListItem, CustomListItemText, ListWrapper } from './List.styled'
import useSWR from 'swr';
import { useCollection } from 'swr-firestore-v9'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categorySetter } from '../../store/slices/category/categorySlice';


const List = ({ big }) => {
    const [hoverIndex, setHoverIndex] = useState("false");
    const dispatch = useDispatch()
    const [selectedIndex, setSelectedIndex] = useState(1);


    const finder = (name, uniqueId, event, index) => {
        // selected={selectedIndex === 1}
        // onClick={(event) => handleListItemClick(event, 1)}
        setSelectedIndex(index);
        setHoverIndex("true")
        dispatch(categorySetter(name))
    }

    const { data } = useCollection('category', {
        orderBy: ['uniqueId', 'asc'],
        listen: true,
    })

    return (
        <>
            <ListWrapper big={big} dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data && data.map(({ imgUrl, name, uniqueId, slug }, i) => {
                    const labelId = `checkbox-list-secondary-label-${uniqueId}`;
                    return (
                        <CustomListItem
                            key={uniqueId}
                            disablePadding
                        >
                            <ListItemButton onClick={(event) => finder(name, uniqueId, event, i)}
                                selected={selectedIndex === i}

                            >
                                <ListItemAvatar>
                                    <Avatar
                                        alt={slug}
                                        src={imgUrl}
                                    />
                                </ListItemAvatar>
                                <CustomListItemText id={labelId} primary={name} />
                            </ListItemButton>
                        </CustomListItem>
                    );
                })}
            </ListWrapper>
        </>
    );
};

export default List;