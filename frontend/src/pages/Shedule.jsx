import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Navbar";
import { Container, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Background from "../components/Background";

const Schedule = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchAllModels = async () => {
      try {
        await axios.post("http://localhost:8000/boarding");
        await axios.post("http://localhost:8000/in_air");
        await axios.put("http://localhost:8000/in_air");

        const res = await axios.get("http://localhost:8000/shedule");
        setModels(res.data);
        console.log("Fetched schedules:", res.data);
      } catch (err) {
        console.error("Error fetching schedules:", err);
      }
    };
    fetchAllModels();
  }, []);

  const formatDateTime = (dateString) => {
    if (!dateString) return "N/A";
    const [date, time] = dateString.split(/T|Z/);
    const [hour, minute] = time.split(":");
    return `${date} | ${hour}:${minute}`;
  };

  const rows = models.map((model) => ({
    id: model.call_sign,
    origin: model.origin,
    destination: model.destination,
    departure: formatDateTime(model.departure_time),
    arrival: formatDateTime(model.arrival_time),
    status: model.status,
    delay: model.delay?.data ? "DELAYED" : "NOT DELAYED",
  }));

  const columns = [
    { field: "id", headerName: "Aircraft", flex: 0.75 },
    { field: "origin", headerName: "Origin", flex: 0.75 },
    { field: "destination", headerName: "Destination", flex: 0.75 },
    { field: "departure", headerName: "Departure Time", flex: 1.5 },
    { field: "arrival", headerName: "Arrival Time", flex: 1.5 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "delay", headerName: "Delay", flex: 1 },
  ];

  return (
    <>
      <NavBar />
      <Background />
      <Container className="ContainerSchedule">
        <div className="glassBox">
          <h1>Flight Schedule</h1>
          <div className="models">
            <Box sx={{ width: "100%" }}>
              <DataGrid
                className="table"
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: { paginationModel: { pageSize: 6 } },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Schedule;
