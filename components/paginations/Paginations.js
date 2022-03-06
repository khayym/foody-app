import { CustomStack, PaginationCustom } from './Paginations.styled'

export const Paginations = ({ postsPerPage, page, handleChange }) => {


    return (
        <>
            <CustomStack>
                <PaginationCustom
                    count={postsPerPage}
                    page={page}
                    onChange={handleChange}
                    variant="outlined"
                    defaultPage={2}
                    siblingCount={0}
                />
            </CustomStack>
        </>
    );
};

