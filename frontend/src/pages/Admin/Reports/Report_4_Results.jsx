import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Button, Stack, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';

const Report_5_Results = () => {
    const [flights, setFlights] = useState([]);
    const [isButtonHidden, setIsButtonHidden] = useState(false);
    
    const location = useLocation();
    const origin = location.pathname.split("/")[2];
    const destination = location.pathname.split("/")[3];

    useEffect(() => {
        const fetchAllModels = async () => {
            try {
                await axios.post("http://localhost:8000/boarding");
                await axios.post("http://localhost:8000/in_air");
            } catch (err) {
                console.error("Error posting data:", err);
            }
            try {
                const res = await axios.get(`http://localhost:8000/report_4/${origin}/${destination}`);
                setFlights(res.data);
            } catch (err) {
                console.error("Error fetching flights:", err);
            }
        };
        fetchAllModels();
    }, [origin, destination]);

    const removeTAndZ = (dateString) => {
        if (!dateString) return "N/A"; // Handle undefined/null cases
        const [date, time] = dateString.split(/T|Z/);
        if (!time) return date; // If there's no time part
        const [t] = time.split(".");
        const [h, m] = t.split(":");
        return `${date} | ${h} : ${m}`;
    };

    const rows = flights.map((flight) => ({
        id: flight.flight_id,
        aircraft: flight.call_sign,
        departure_time: removeTAndZ(flight.departure_time),
        arrival_time: removeTAndZ(flight.arrival_time),
        delay: flight.delay?.data || 0, // Handle possible undefined values
        passenger_count: flight.total_booking_amount || 0, // Default to 0 if undefined
    }));

    const columns = [
        { field: 'id', headerName: 'Flight ID', flex: 1 },
        { field: 'aircraft', headerName: 'Aircraft', flex: 1 },
        { field: 'departure_time', headerName: 'Departure Time', flex: 1 },
        { field: 'arrival_time', headerName: 'Arrival Time', flex: 1 },
        { 
            field: 'delay', 
            headerName: 'Status', 
            flex: 1,
            valueFormatter: (params) => (params.value === 1 ? "DELAYED" : "NOT DELAYED"),
        },
        { field: 'passenger_count', headerName: 'Passenger Count', flex: 1 },
    ];

    const printPage = () => {
        window.print();
    };

    const combineEvent = () => {
        setIsButtonHidden(true);
        setTimeout(printPage, 50);
        setTimeout(() => setIsButtonHidden(false), 1000);
    };

    return (
        <Container>
            <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Grid>
                        <h1>
                            Past Flights From {origin} to {destination}
                            {!isButtonHidden && (
                                <Button
                                    variant="contained"
                                    onClick={combineEvent}
                                    style={{ float: 'right', backgroundColor: '#000000' }}
                                >
                                    Print Report
                                </Button>
                            )}
                        </h1>
                    </Grid>
                </Box>

                <div className="models">
                    <Box sx={{ width: '100%', marginTop: '5vh' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{
                                pagination: { paginationModel: { pageSize: 100 } },
                            }}
                            pageSizeOptions={[5, 10, 20, 100]}
                            checkboxSelection
                            disableRowSelectionOnClick
                        />
                    </Box>
                </div>
            </Box>
        </Container>
    );
};

export default Report_5_Results;
