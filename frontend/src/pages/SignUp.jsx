import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import NavBar from "./Navbar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MuiTelInput } from "mui-tel-input";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Background from "../components/Background";

export default function SignUp() {
  const [name, setName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone_number, setPhoneNumber] = React.useState("");
  const [nic, setNic] = React.useState("");
  const [passport_id, setPassportId] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm_password, setConfirmPassword] = React.useState("");

  // Instead of simply adding the value, we need to create a custom function
  // to concatenate the previous value with the incoming value.
  const setChangedPhoneNumber = (value) => {
    setPhoneNumber((prev) => ({
      ...prev,
      phone_number: prev.country_code + value,
    }));
  };
  // TODO: THE ABOVE DOESN'T WORK. Phone number functionality is broken.

  console.log(phone_number);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/auth/register", {
        Name: name,
        Dob: dob,
        Address: address,
        Phone_Number: phone_number,
        Nic: nic,
        Passport_Id: passport_id,
        Username: username,
        Password: password,
        Confirm_Password: confirm_password,
      });

      console.log(response);
      //navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <Background />
      <div className="signinContainer">
        <div className="glassBox">
          <Box
            className="signin"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <h1>Sign up</h1>
            <div className="allBoxes">
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}>
                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />

                <Box sx={{ marginTop: 2, marginBottom: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoItem>
                      <DatePicker
                        sx={{ fontFamily: "Ubuntu" }}
                        label="Date of Birth"
                        format="DD/MM/YYYY"
                        name="dob"
                        id="dob"
                        onChange={(val) => {
                          setDob(val);
                        }}
                      />
                    </DemoItem>
                  </LocalizationProvider>
                </Box>

                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  autoComplete="address"
                />

                <MuiTelInput
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="phone-number"
                  name="phone_number"
                  autoComplete=""
                  label="Phone Number"
                  onChange={setChangedPhoneNumber}
                />

                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="nic"
                  label="NIC"
                  name="nic"
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                  autoComplete="nic"
                />

                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="passport-id"
                  label="Passport ID"
                  name="passport_id"
                  onChange={(e) => {
                    setPassportId(e.target.value);
                  }}
                  autoComplete="passportid"
                />

                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  autoComplete="username"
                />

                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="current-password"
                />

                <TextField
                  InputLabelProps={{
                    sx: {
                      fontFamily: "Ubuntu",
                    },
                  }}
                  margin="normal"
                  required
                  fullWidth
                  name="confirm_password"
                  label="Confirm Password"
                  type="password"
                  id="confirm-password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  autoComplete="current-password"
                />

                <button
                  className="bttn bttnsignin"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 6, mb: 2, backgroundColor: "black" }}>
                  Sign Up
                </button>
              </Box>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
