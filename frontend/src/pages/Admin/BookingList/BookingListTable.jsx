import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const BookingListTable = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const res = await axios.get('http://localhost:8000/booking_list');
                setBookings(res.data);
            } catch (err) {
                console.error('Error fetching bookings:', err);
            }
        };
        fetchBookings();
    }, []);

    const handleInvalidate = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/booking_list/${id}`);
            setBookings(bookings.filter((booking) => booking.booking_id !== id)); // Remove the deleted booking from state
        } catch (err) {
            console.error('Error invalidating booking:', err);
        }
    };

    const handleValidate = async (id) => {
        try {
            await axios.put(`http://localhost:8000/booking_list/${id}`);
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking.booking_id === id ? { ...booking, payment_status: { data: true } } : booking
                )
            );
        } catch (err) {
            console.error('Error validating booking:', err);
        }
    };

    const rows = bookings.map((booking) => ({
        id: booking.booking_id,
        customer_id: booking.customer_id,
        flight_id: booking.flight_id,
        seat_id: booking.seat_id,
        status: booking.payment_status?.data ?? false, // Ensures no crashes
        price: booking.total_cost,
        payment_proceed: booking.payment_status?.data ?? false,
    }));

    const columns = [
        { field: 'id', headerName: 'Booking ID', width: 100 },
        { field: 'customer_id', headerName: 'Customer ID', width: 100 },
        { field: 'flight_id', headerName: 'Flight ID', width: 100 },
        {
            field: 'status',
            headerName: 'Payment Status',
            width: 200,
            valueFormatter: (params) => (params.value ? 'VALIDATED' : 'PROCEEDING'),
        },
        { field: 'seat_id', headerName: 'Seat ID', width: 200 },
        { field: 'price', headerName: 'Price', width: 200 },
        {
            field: 'payment_proceed',
            headerName: '',
            width: 120,
            sortable: false,
            renderCell: (params) => (
                <Button
                    color={params.value ? 'error' : 'success'}
                    size="small"
                    onClick={() =>
                        params.value ? handleInvalidate(params.row.id) : handleValidate(params.row.id)
                    }
                >
                    {params.value ? 'Invalidate' : 'Validate'}
                </Button>
            ),
        },
    ];

    return (
        <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Grid>
                    <h1>Bookings</h1>
                </Grid>
            </Box>

            <div className="models">
                <Box sx={{ width: '100%', marginTop: '5vh' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 8 },
                            },
                        }}
                        pageSizeOptions={[5, 8, 10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>
        </Box>
    );
};

export default BookingListTable;
