import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
function FormValidation() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
  };
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
      }}
      noValidate
      autoComplete="off"
      onClick={onSubmit}
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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        sx={{ mt: 2, width: 300 }}
        id="Password"
        color="secondary"
      ></TextField>
      <Button variant="contained" sx={{ mt: 3, backgroundColor: "blueviolet" }}>
        Submit
      </Button>
    </Box>
  );
}

export default FormValidation;
