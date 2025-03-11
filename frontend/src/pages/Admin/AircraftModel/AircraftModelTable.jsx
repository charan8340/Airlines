import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const AircraftModelTable = () => {
    const [models, setModels] = useState([]);

    useEffect(() => {
        const fetchAllModels = async () => {
            try {
                const res = await axios.get("http://localhost:8000/aircraft_model");
                setModels(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllModels();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/aircraft_model/${id}`);
            setModels(models.filter(model => model.model_id !== id));  // Update state instead of reload
        } catch (err) {
            console.error(err);
        }
    };

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // ✅ **Fixing TypeScript syntax in JavaScript**
    const rows = models.map(model => ({
        id: model.model_id,
        brand: model.brand,
        model_type: model.model,
        e_seats: model.economy_seats,
        b_seats: model.business_seats,
        p_seats: model.platinum_seats
    }));

    const columns = [
        { field: 'id', headerName: 'Model ID', width: 100 },
        { field: 'brand', headerName: 'Brand', width: 150 },
        { field: 'model_type', headerName: 'Model', width: 150 },
        { field: 'e_seats', headerName: 'Economy Seats', width: 200 },
        { field: 'b_seats', headerName: 'Business Seats', width: 200 },
        { field: 'p_seats', headerName: 'Platinum Seats', width: 200 },
        {
            field: 'edit',
            headerName: '',
            width: 100,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="primary" size="small" href={`/aircraft_model_update/${params.row.id}`}>
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
                    <Button color="error" size="small" onClick={handleClickOpen}>Delete</Button>
                    <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
                        <DialogTitle>Delete aircraft model instance?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this aircraft model? You might not be able to restore it.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => handleDelete(params.row.id)} color="error">Delete</Button>
                        </DialogActions>
                    </Dialog>
                </Stack>
            )
        }
    ];

    return (
        <>
            <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Grid>
                        <h1>Aircraft Models
                            <Button variant="contained" href="/aircraft_model_add" sx={{ float: 'right', backgroundColor: '#000' }}>
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
                            pageSizeOptions={[5]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>
                </div>
            </Box>
        </>
    );
};

export default AircraftModelTable;
