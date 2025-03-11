import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Stack, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const DelayTable = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const fetchAllFlights = async () => {
            try {
                const res = await axios.get('http://localhost:8000/delay');
                setFlights(res.data);
            } catch (err) {
                console.error('Error fetching flights:', err);
            }
        };
        fetchAllFlights();
    }, []);

    const removeTAndZ = (dateString) => {
        if (!dateString) return 'N/A';
        const [date, time] = dateString.split(/T|Z/);
        const [t] = time.split('.');
        const [h, m] = t.split(':');
        return `${date} | ${h} : ${m}`;
    };

    const rows = flights.map((flight) => ({
        id: flight.flight_id,
        route_id: flight.route_id,
        aircraft_id: flight.aircraft_id,
        departure_time: removeTAndZ(flight.departure_time),
        arrival_time: removeTAndZ(flight.arrival_time),
        status: flight.status,
        delay: flight.delay?.data ?? false, // Handles potential undefined values
    }));

    const columns = [
        { field: 'id', headerName: 'Flight ID', width: 100 },
        { field: 'route_id', headerName: 'Route ID', width: 100 },
        { field: 'aircraft_id', headerName: 'Aircraft ID', width: 100 },
        { field: 'status', headerName: 'Status', width: 130 },
        {
            field: 'delay',
            headerName: 'Delay',
            width: 130,
            valueFormatter: (params) => (params.value ? 'DELAYED' : 'NOT DELAYED'),
        },
        { field: 'departure_time', headerName: 'Departure Time', width: 150 },
        {
            field: 'departure_delay',
            headerName: '',
            width: 150,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="error" size="small" href={`/delay_departure/${params.row.id}`}>
                        Delay Departure
                    </Button>
                </Stack>
            ),
        },
        { field: 'arrival_time', headerName: 'Arrival Time', width: 150 },
        {
            field: 'arrival_delay',
            headerName: '',
            width: 150,
            sortable: false,
            disableClickEventBubbling: true,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button color="error" size="small" href={`/delay_arrival/${params.row.id}`}>
                        Delay Arrival
                    </Button>
                </Stack>
            ),
        },
    ];

    return (
        <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <Grid>
                    <h1>Flight Delay</h1>
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
        </Box>
    );
};

export default DelayTable;
