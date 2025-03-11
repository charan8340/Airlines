import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Container, Box, Button, Stack, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const BoardingTable = () => {
    const [boarding, setBoarding] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState(null);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Fetch data
    const fetchAllFlights = useCallback(async () => {
        try {
            await axios.post("http://localhost:8000/boarding");  // Ensure backend requires this
            
            const res = await axios.get("http://localhost:8000/boarding");
            setBoarding(res.data);
        } catch (err) {
            console.error(err);
        }
    }, []);

    useEffect(() => {
        fetchAllFlights();
    }, [fetchAllFlights]);

    // Delete function
    const handleDelete = async () => {
        if (!selectedFlight) return;
        try {
            await axios.delete(`http://localhost:8000/aircraft/${selectedFlight}`);
            setOpen(false);
            fetchAllFlights(); // Refresh data
        } catch (err) {
            console.error(err);
        }
    };

    // Open delete dialog
    const handleClickOpen = (id) => {
        setSelectedFlight(id);
        setOpen(true);
    };

    // Close delete dialog
    const handleClose = () => {
        setOpen(false);
        setSelectedFlight(null);
    };

    // Format date (remove T and Z)
    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        const [date, time] = dateString.split(/T|Z/);
        const [h, m] = time.split(":");
        return `${date} | ${h}:${m}`;
    };

    // Rows for DataGrid
    const rows = boarding.map(flight => ({
        id: flight.flight_id,
        route_id: flight.route_id,
        aircraft_id: flight.aircraft_id,
        departure_time: formatDate(flight.departure_time),
        arrival_time: formatDate(flight.arrival_time),
        status: flight.status,
        delay: flight.delay?.data ?? false // Prevents crash
    }));

    // Columns for DataGrid
    const columns = [
        { field: 'id', headerName: 'Flight ID', width: 100 },
        { field: 'route_id', headerName: 'Route ID', width: 100 },
        { field: 'aircraft_id', headerName: 'Aircraft ID', width: 100 },
        { field: 'departure_time', headerName: 'Departure Time', width: 200 },
        { field: 'arrival_time', headerName: 'Arrival Time', width: 200 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'delay',
            headerName: 'Delay',
            width: 130,
            valueFormatter: (params) => (params.value ? 'DELAY' : 'NO DELAY')
        },
        {
            field: 'edit',
            headerName: '',
            width: 100,
            sortable: false,
            renderCell: (params) => (
                <Button color="primary" size="small" href={`/flight_update/${params.row.id}`}>
                    Update
                </Button>
            )
        },
        {
            field: 'delete',
            headerName: '',
            width: 100,
            sortable: false,
            renderCell: (params) => (
                <Button color="error" size="small" onClick={() => handleClickOpen(params.row.id)}>
                    Delete
                </Button>
            )
        }
    ];

    return (
        <Container>
            <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
                <Grid>
                    <h2>Currently Boarding</h2>
                </Grid>

                <Box sx={{ width: '100%', marginTop: '5vh' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel: { pageSize: 8 } } }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>

                {/* Delete Confirmation Dialog */}
                <Dialog
                    fullScreen={fullScreen}
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                    <DialogTitle id="responsive-dialog-title">
                        {"Delete flight instance?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete this flight instance? This action cannot be undone.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleDelete} color="error" autoFocus>
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Container>
    );
};

export default BoardingTable;
