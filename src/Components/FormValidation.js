import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

function FormValidation() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassowrd] = useState();
  const [errors,setErrors]=useState(false)

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("confirmPassword", confirmPassword);
  };
  return (
      <Box
      component='form'
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          mt: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <Typography component="h1" variant="h5">
          Form Validation
        </Typography>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="Name"
          sx={{ mt: 2, width: 300 }}
          color="secondary"
        ></TextField>
        
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          sx={{ mt: 2, width: 300 }}
          color="secondary"
        ></TextField>

        <TextField
        type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          sx={{ mt: 2, width: 300 }}
          id="Password"
          color="secondary"
        ></TextField>
        <TextField
        type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassowrd(e.target.value)}
          label="Confirm Password"
          sx={{ mt: 2, width: 300 }}
          color="secondary"
        ></TextField>
        <Button
          variant="contained"
          sx={{ mt: 3, backgroundColor: "blueviolet" }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Box>

  );
}

export default FormValidation;
