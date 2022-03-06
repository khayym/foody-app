import Pagination from '@mui/material/Pagination';
import { CustomStack, PaginationCustom } from './Paginations.styled'

export const Paginations = () => {
    return (
        <>
            <CustomStack>
                <PaginationCustom
                    count={10}
                />
            </CustomStack>
        </>
    );
};

