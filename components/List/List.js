import { ListItem, ListItemButton, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import { ListWrapper } from './List.styled'

const List = ({big}) => {
    return (
        <>
            <ListWrapper big={big} dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/images/pizza.jpg/`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </ListWrapper>
        </>
    );
};

export default List;