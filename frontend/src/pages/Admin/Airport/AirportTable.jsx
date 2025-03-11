import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const AirportTable = () => {
    const [airports, setAirports] = useState([]);
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const fetchAllAirports = async () => {
            try {
                const res = await axios.get("http://localhost:8000/airport");
                setAirports(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllAirports();
    }, []);

    const handleClickOpen = (id) => {
        setDeleteId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/airport/${deleteId}`);
            setAirports(airports.filter(airport => airport.airport_code !== deleteId));
            setOpen(false);
        } catch (err) {
            console.error(err);
        }
    };

    const rows = airports.map(airport => ({
        id: airport.airport_code,
        name: airport.name,
        location_id: airport.location_id
    }));

    const columns = [
        { field: 'id', headerName: 'Airport Code', width: 200 },
        { field: 'name', headerName: 'Airport Name', width: 500 },
        { field: 'location_id', headerName: 'Location ID', width: 250 },
        {
            field: 'edit',
            headerName: '',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="primary" size="small" href={`/airport_update/${params.row.id}`}>
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
                    <h1>Airport
                        <Button
                            variant="contained"
                            href="/airport_add"
                            sx={{ float: 'right', backgroundColor: '#000000' }}
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
                        pagination: {
                            paginationModel: {
                                pageSize: 8
                            }
                        }
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>

            {/* Delete Confirmation Dialog */}
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">Delete airport instance?</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this airport? You might not be able to restore it.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleDelete} color="error">Delete</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AirportTable;
