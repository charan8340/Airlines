import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const FlightTable = () => {
    const [flights, setFlights] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const fetchAllFlights = async () => {
            try {
                const res = await axios.get("http://localhost:8000/flight");
                setFlights(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllFlights();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/flight/${id}`);
            setFlights(flights.filter(flight => flight.flight_id !== id)); // Update state instead of reloading
            setOpen(false);
        } catch (err) {
            console.error(err);
        }
    };

    const handleClickOpen = (id) => {
        setDeleteId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const removeTAndZ = (dateString) => {
        const [date, time] = dateString.split(/T|Z/);
        const [t] = time.split(".");
        const [h, m] = t.split(":");
        return `${date} | ${h} : ${m}`;
    };

    const rows = flights.map(flight => ({
        id: flight.flight_id,
        route_id: flight.route_id,
        aircraft_id: flight.aircraft_id,
        departure_time: removeTAndZ(flight.departure_time),
        arrival_time: removeTAndZ(flight.arrival_time),
        status: flight.status,
        delay: flight.delay ? flight.delay.data : 0
    }));

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
            valueFormatter: (params) => params.value === 1 ? "DELAYED" : "NOT DELAYED"
        },
        {
            field: 'edit',
            headerName: '',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="primary" size="small" href={`/flight_update/${params.row.id}`}>
                        Update
                    </Button>
                </Stack>
            )
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
            )
        }
    ];

    return (
        <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Grid>
                    <h1>Flight
                        <Box sx={{ float: 'right', display: 'flex', gap: '10px' }}>
                            <Button variant="contained" href="/flight_add" sx={{ backgroundColor: '#000' }}>Add</Button>
                            <Button variant="contained" href="/delay" sx={{ backgroundColor: '#000' }}>Delay</Button>
                        </Box>
                    </h1>
                </Grid>
            </Box>

            <Box sx={{ width: '100%', marginTop: '5vh' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { pageSize: 8 }
                        }
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">Delete flight instance?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this flight? You might not be able to restore it again.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleDelete(deleteId)} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default FlightTable;
