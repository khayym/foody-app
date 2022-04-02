import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Image from 'next/image';
import { RootWrapper } from '../../../features/restaurants/component/RestaurantListMobile/RestaurantListMobile.styled';
import { useDispatch, useSelector } from 'react-redux';
import { bottomDrawer } from '../../store/slices/drawer/drawerSlices';
import UserBasket from '../../../features/user/basket';
// import List from '../../../../share/components/List';
// import { RootWrapper, BtnText } from './RestaurantListMobile.styled';

const drawerBleeding = 56;


const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));


const ProductListMobile = (props) => {
    const { window } = props;
    const dispatch = useDispatch()
    const { bottomStatus } = useSelector(state => state.drawer)


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <RootWrapper>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(70% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={bottomStatus}
                onClose={() => dispatch(bottomDrawer())}
                onOpen={() => dispatch(bottomDrawer())}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: false,
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }} onClick={() => dispatch(bottomDrawer())} >X</Typography>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                    <UserBasket />
                </StyledBox>
            </SwipeableDrawer>
        </RootWrapper>
    );
};
export default ProductListMobile;

ProductListMobile.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


