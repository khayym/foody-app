import React from 'react'
import { OrderContainer } from './index.styled';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tables from './components/Tables/index'
import { useCollection } from 'swr-firestore-v9';
import { useAuth } from '../../../src/context/AuthContext';


const UserOrder = () => {
    const { user } = useAuth();
    const { data } = useCollection('orders', {
        listen: true,
        where: ['uid', '==', `${user.uid}`],
    })

    return (
        <OrderContainer>
            <h1>Your Orders</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Time</TableCell>
                            <TableCell align="right">Delivery Address</TableCell>
                            <TableCell align="right">Amount</TableCell>
                            <TableCell align="right">Payment Method</TableCell>
                            <TableCell align="right">Contact</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <TableRow
                                key={row.key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.displayName}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">22</TableCell>
                                <TableCell align="right">{row.payment}</TableCell>
                                <TableCell align="right">
                                    {row.number}
                                </TableCell>
                                <TableCell align="right">
                                    <Tables products={row.productsData} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </OrderContainer>
    )
}

export default UserOrder