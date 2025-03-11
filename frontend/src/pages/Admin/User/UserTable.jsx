import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Button, Stack, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get("http://localhost:8000/user_list");
                setUsers(res.data);
            } catch (err) {
                console.error("Error fetching users:", err);
            }
        };
        fetchAllUsers();
    }, []);

    const handleDelete = async () => {
        if (!selectedUserId) return;
        try {
            await axios.delete(`http://localhost:8000/user_list/${selectedUserId}`);
            setUsers((prevUsers) => prevUsers.filter(user => user.user_id !== selectedUserId));
            handleClose();
        } catch (err) {
            console.error("Error deleting user:", err);
        }
    };

    const handleClickOpen = (id) => {
        setSelectedUserId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedUserId(null);
    };

    const rows = users.map(user => ({
        id: user.user_id,
        username: user.username,
        membership: user.membership,
        customer_id: user.customer_id,
        login_status: user.login_status.data,
        booking_count: user.num_bookings
    }));

    const columns = [
        { field: 'id', headerName: 'User ID', width: 100 },
        { field: 'username', headerName: 'Username', width: 250 },
        { 
            field: 'membership', 
            headerName: 'Membership', 
            width: 200, 
            valueFormatter: (params) => {
                if (params.value === 'R') return 'REGULAR';
                if (params.value === 'F') return 'FREQUENT';
                return 'GOLD';
            } 
        },
        { field: 'customer_id', headerName: 'Customer ID', width: 200 },
        { field: 'booking_count', headerName: 'Booking Count', width: 200 },
        { 
            field: 'login_status', 
            headerName: 'Status', 
            width: 100, 
            valueFormatter: (params) => (params.value === 0 ? 'OFFLINE' : 'ONLINE') 
        },
        {
            field: 'delete',
            headerName: '',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="error" size="small" onClick={() => handleClickOpen(params.row.id)}>
                        Delete
                    </Button>
                </Stack>
            ),
        },
    ];

    return (
        <Container>
            <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Grid>
                        <h1>Users</h1>
                    </Grid>
                </Box>

                <Box sx={{ width: '100%', marginTop: '5vh' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 8 } },
                        }}
                        pageSizeOptions={[5, 10, 20]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">{"Delete user?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this user? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} color="error" autoFocus>Delete</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default UserTable;
