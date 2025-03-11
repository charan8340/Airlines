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

const RouteTable = () => {
    const [routes, setRoutes] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedRouteId, setSelectedRouteId] = useState(null);
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const fetchAllRoutes = async () => {
            try {
                const res = await axios.get("http://localhost:8000/route");
                setRoutes(res.data);
            } catch (err) {
                console.error("Error fetching routes:", err);
            }
        };
        fetchAllRoutes();
    }, []);

    const handleDelete = async () => {
        if (!selectedRouteId) return;
        try {
            await axios.delete(`http://localhost:8000/route/${selectedRouteId}`);
            setRoutes((prevRoutes) => prevRoutes.filter(route => route.route_id !== selectedRouteId));
            handleClose();
        } catch (err) {
            console.error("Error deleting route:", err);
        }
    };

    const handleClickOpen = (id) => {
        setSelectedRouteId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedRouteId(null);
    };

    const rows = routes.map((route) => ({
        id: route.route_id,
        origin: route.origin,
        destination: route.destination,
        e_price: route.economy_price,
        b_price: route.business_price,
        p_price: route.platinum_price
    }));

    const columns = [
        { field: 'id', headerName: 'Route ID', width: 100 },
        { field: 'origin', headerName: 'Origin', width: 125 },
        { field: 'destination', headerName: 'Destination', width: 125 },
        { field: 'e_price', headerName: 'Economy Price', width: 200 },
        { field: 'b_price', headerName: 'Business Price', width: 200 },
        { field: 'p_price', headerName: 'Platinum Price', width: 200 },
        {
            field: 'edit',
            headerName: '',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="primary" size="small" href={`/route_update/${params.row.id}`}>
                        Update
                    </Button>
                </Stack>
            ),
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
                        <h1>
                            Routes
                            <Button
                                variant="contained"
                                href="/route_add"
                                style={{ float: 'right', backgroundColor: '#000000' }}
                            >
                                Add
                            </Button>
                        </h1>
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
                <DialogTitle id="responsive-dialog-title">{"Delete route instance?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this route instance? You might not be able to restore it again.
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

export default RouteTable;
