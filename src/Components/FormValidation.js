import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
const data = [
  {
    id: 1,
    name: "Haris",
  },
  {
    id: 2,
    name: "Adeel",
  },
  {
    id: 3,
    name: "Irfan",
  },
  {
    id: 4,
    name: "Farhan",
  },
  {
    id: 5,
    name: "Zeeshan",
  },
  {
    id: 6,
    name: "Arslan",
  },
  {
    id: 7,
    name: "Faizan",
  },
  {
    id: 8,
    name: "Ehtasham",
  },
  {
    id: 9,
    name: "Samar",
  },
];
function FormValidation() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [newData,setNewData]=useState(1);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleNewData=(e)=>{
    setNewData(e.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // setName("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
    console.log("name", name);
    console.log("email", email);
    console.log("password", password);
    console.log("Confirm password", confirmPassword);
    console.log(`So the data is of id ${newData}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: 5,
      }}
    >
      <Typography component="h1" variant="h5">
        Form Validation
      </Typography>
      <ValidatorForm autoComplete="off" onSubmit={(e) => onSubmit(e)}>
        <TextValidator
          type="text"
          label="Name"
          sx={{ mt: 2, width: 300 }}
          color="secondary"
          validators={["required"]}
          errorMessages={["This Field is Required"]}
          value={name || ""}
          onChange={(e) => handleName(e)}
        ></TextValidator>

        <TextValidator
          type="Email"
          value={email || ""}
          onChange={(e) => handleEmail(e)}
          label="Email"
          sx={{ mt: 2, width: 300 }}
          color="secondary"
          validators={["required", "isEmail"]}
          errorMessages={["This Field is Required", "Email is not Valid"]}
        ></TextValidator>

        <TextValidator
          type="password"
          value={password || ""}
          onChange={(e) => handlePassword(e)}
          label="Password"
          sx={{ mt: 2, width: 300 }}
          id="Password"
          color="secondary"
          validators={["required"]}
          errorMessages={["This Field is Required"]}
        ></TextValidator>
        <TextValidator
          type="password"
          value={confirmPassword || ""}
          onChange={(e) => handleConfirmPassword(e)}
          label="Confirm Password"
          sx={{ mt: 2, width: 300 }}
          id="confirmPassword"
          color="secondary"
          validators={["required"]}
          errorMessages={["This Field is Required", "Password Does Not Match"]}
        ></TextValidator>
        <TextValidator
          select
          label="Select Your Name"
          defaultValue="Haris"
          sx={{ mt: 3, width: 300 }}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your Name"
          variant="standard"
          onChange={(e)=>handleNewData(e)}
        >
          {data.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </TextValidator>
        <Button
          variant="contained"
          type="submit"
          sx={{ mt: 3, backgroundColor: "blueviolet" }}
        >
          Submit
        </Button>
      </ValidatorForm>
    </Box>
  );
}

export default FormValidation;
