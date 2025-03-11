import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Box, Button, Stack, Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation } from 'react-router-dom';

const Report_1_Results = () => {
    const [cus, setCus] = useState([]);
    const [isButtonHidden, setIsButtonHidden] = useState(false);

    const location = useLocation();
    const flight_id = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchAllPassengers = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/report_1/${flight_id}`);
                setCus(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchAllPassengers();
    }, [flight_id]); // Added dependency array for safety

    const rows = cus.map(c => ({
        id: c.customer_id,
        name: c.name,
        address: c.address,
        nic: c.nic,
        p_id: c.passport_id,
        type: c.user_type,
        a_c: c.age_category
    }));

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'address', headerName: 'Address', width: 250 },
        { field: 'nic', headerName: 'NIC', flex: 1 },
        { field: 'p_id', headerName: 'Passport ID', flex: 1 },
        { field: 'type', headerName: 'User Type', flex: 1 },
        { field: 'a_c', headerName: 'Age Category', flex: 1 }
    ];

    const printPage = () => {
        window.print();
    };

    const handlePrint = () => {
        setIsButtonHidden(true);
        setTimeout(printPage, 50); // Wait 50ms to remove button before printing
        setTimeout(() => setIsButtonHidden(false), 300); // Restore after printing
    };

    return (
        <Container>
            <Box component="main" sx={{ flexGrow: 1, paddingTop: 4.5 }}>
                <Box component="main" sx={{ flexGrow: 1 }}>
                    <Grid>
                        <h1>
                            Passengers in Flight {flight_id}
                            {!isButtonHidden && (
                                <Button
                                    variant="contained"
                                    onClick={handlePrint}
                                    sx={{ float: 'right', backgroundColor: '#000000' }}
                                >
                                    Print Report
                                </Button>
                            )}
                        </h1>
                    </Grid>
                </Box>

                <Box sx={{ width: '100%', marginTop: '5vh' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: { paginationModel: { pageSize: 100 } }
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Report_1_Results;
