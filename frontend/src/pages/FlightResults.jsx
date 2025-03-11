import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Button, Stack, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from './Navbar';

const FlightResultsTable = () => {
    const [results, setResults] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();

    const originAirport = decodeURIComponent(location.pathname.split("/")[3]);
    const targetAirport = decodeURIComponent(location.pathname.split("/")[4]);
    const departureTime = location.pathname.split("/")[5];
    const arrivalTime = location.pathname.split("/")[6];

    console.log("Origin Airport:", originAirport);
    console.log("Destination Airport:", targetAirport);
    console.log("Departure Time:", departureTime);
    console.log("Arrival Time:", arrivalTime);

    useEffect(() => {
        const fetchFlightResults = async () => {
            try {
                await axios.post("http://localhost:8000/boarding");
                await axios.post("http://localhost:8000/in_air");
                await axios.put("http://localhost:8000/in_air");

                const res = await axios.get(
                    `http://localhost:8000/route/available_flights/${originAirport}/${targetAirport}/${departureTime}/${arrivalTime}`
                );
                setResults(res.data);
            } catch (error) {
                console.error("Error fetching flight results:", error);
            }
        };
        fetchFlightResults();
    }, [originAirport, targetAirport, departureTime, arrivalTime]);

    const formatDateTime = (dateString) => {
        if (!dateString) return "N/A";
        const [date, time] = dateString.split(/T|Z/);
        const [hour, minute] = time.split(":");
        return `${date} | ${hour}:${minute}`;
    };

    const rows = results.map((result) => ({
        id: result.flight_id,
        aircraftName: result.call_sign,
        originAirport,
        targetAirport,
        departureTime: formatDateTime(result.departure_time),
        arrivalTime: formatDateTime(result.arrival_time),
        flightStatus: result.status,
    }));

    const columns = [
        { field: 'aircraftName', headerName: 'Aircraft Name', flex: 1 },
        { field: 'originAirport', headerName: 'Origin Airport', flex: 1.5 },
        { field: 'targetAirport', headerName: 'Destination Airport', flex: 1.5 },
        { field: 'departureTime', headerName: 'Departure Time', flex: 2 },
        { field: 'arrivalTime', headerName: 'Arrival Time', flex: 2 },
        { field: 'flightStatus', headerName: 'Flight Status', flex: 1 },
        {
            field: 'id',
            headerName: '',
            flex: 2,
            renderCell: (params) => (
                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => {
                            const token = localStorage.getItem("token");
                            const path = token
                                ? `/user_booking_type/${params.value}`
                                : `/login_for_booking/${params.value}`;
                            navigate(path);
                        }}
                    >
                        Book Now
                    </Button>
                </Stack>
            ),
        },
    ];

    return (
        <>
            <NavBar />
            <Container sx={{ paddingTop: 25 }}>
                <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
                    <Box component="main" sx={{ flexGrow: 1 }}>
                        <Grid>
                            <h1>Available Flights</h1>
                        </Grid>
                    </Box>
                    <div className="models">
                        <Box sx={{ width: '100%', marginTop: '5vh' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                getRowId={(row) => row.id}
                                initialState={{
                                    pagination: { paginationModel: { pageSize: 8 } },
                                }}
                                pageSizeOptions={[5]}
                            />
                        </Box>
                    </div>
                </Box>
            </Container>
        </>
    );
};

export default FlightResultsTable;
