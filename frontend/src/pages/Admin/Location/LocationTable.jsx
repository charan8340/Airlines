import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';

const LocationTable = () => {
    const [locations, setLocations] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedId, setSelectedId] = useState(null);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        const fetchAllLocations = async () => {
            try {
                const res = await axios.get("http://localhost:8000/location");
                setLocations(res.data);
            } catch (err) {
                console.error("Error fetching locations:", err);
            }
        };
        fetchAllLocations();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/location/${id}`);
            setLocations(locations.filter(location => location.location_id !== id)); // Update state without reload
            setOpen(false);
        } catch (err) {
            console.error("Error deleting location:", err);
        }
    };

    const handleClickOpen = (id) => {
        setSelectedId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const rows = locations.map((location) => ({
        id: location.location_id,
        location_name: location.location_name,
        parent_location_id: location.parent_location_id || "N/A",
    }));

    const columns = [
        { field: 'id', headerName: 'Location ID', width: 200 },
        { field: 'location_name', headerName: 'Location Name', width: 400 },
        { field: 'parent_location_id', headerName: 'Parent Location ID', width: 300 },
        {
            field: 'edit',
            headerName: '',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="primary" size="small" href={`/location_update/${params.row.id}`}>
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
        <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Grid>
                    <h1>Locations
                        <Button
                            variant="contained"
                            href="/location_add"
                            style={{ float: 'right', backgroundColor: '#000000' }}
                        >
                            Add
                        </Button>
                    </h1>
                </Grid>
            </Box>

            <div className="models">
                <Box sx={{ width: '100%', marginTop: '5vh' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 8 } },
                        }}
                        pageSizeOptions={[5, 8, 10]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </div>

            {/* Delete Confirmation Dialog */}
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">
                    {"Delete location instance?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this location? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => handleDelete(selectedId)} color="error" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default LocationTable;
