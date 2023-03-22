import {  Box, Button,  Typography } from "@mui/material";
import React, { useState } from "react";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
function FormValidation() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <ValidatorForm
      component="form"
      noValidate
      autoComplete="off"
      
    >
      <Box sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
      }}
      >

      <Typography component="h1" variant="h5">
        Form Validation
      </Typography>
      <TextValidator
        value={name}
        onChange={(e) => setName(e.target.value)}
        label="Name"
        sx={{ mt: 2, width: 300 }}
        color="secondary"
      ></TextValidator>

      <TextValidator
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        sx={{ mt: 2, width: 300 }}
        color="secondary"
      ></TextValidator>

      <TextValidator
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        sx={{ mt: 2, width: 300 }}
        id="Password"
        color="secondary"
      ></TextValidator>
      <Button variant="contained" sx={{ mt: 3, backgroundColor: "blueviolet" }}
      onClick={onSubmit}
      >
        Submit
      </Button>
        </Box>
    </ValidatorForm>
  );
}

export default FormValidation;
