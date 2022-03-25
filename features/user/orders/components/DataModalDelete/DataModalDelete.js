import React from 'react';
import Modal from '@mui/material/Modal';
import * as Styled from './DataModalDelete.styled';

export const DataModalDelete = ({ handler, ModalTitle, ModalDesc }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>

            <Styled.DeleteWord onClick={handleOpen}>
                delete
            </Styled.DeleteWord>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Styled.BoxCustom>
                    <Styled.ContentWrap>
                        <Styled.ModalTitle>
                            Are you sure it’s deleted ?
                        </Styled.ModalTitle>
                        <Styled.ModalDesc>
                            Attention! If you delete this order, it will not come back...
                        </Styled.ModalDesc>
                    </Styled.ContentWrap>
                    <Styled.ButtonWrapper>
                        <Styled.ButtonCancel onClick={handleClose}>cancel</Styled.ButtonCancel>
                        <Styled.ButtonDelete onClick={handler}>delete</Styled.ButtonDelete>
                    </Styled.ButtonWrapper>
                </Styled.BoxCustom>
            </Modal>
        </div>
    );
};