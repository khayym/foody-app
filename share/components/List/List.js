import { ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { ListWrapper } from './List.styled'
import useSWR from 'swr';

const List = ({ big }) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
    return (
        <>
            <ListWrapper big={big} dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {data && data.map((value, i) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={i}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/images/pizza.jpg/`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Line item ${value.id}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </ListWrapper>
        </>
    );
};

export default List;