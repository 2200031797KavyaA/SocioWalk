// PasswordResetRequest.jsx
import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/system";
import { useHistory } from "react-router-dom";

const PasswordResetRequest = () => {
  const { palette } = useTheme();
  const history = useHistory();

  const handleEmailSubmit = (email) => {
    // Implement logic to send a verification email
    // You may want to add an API call or dispatch an action here

    // After sending the email, you can redirect to a confirmation page
    history.push("/password-reset-confirmation");
  };

  return (
    <div>
      <Typography variant="h5">Enter your email for password reset:</Typography>
      <TextField label="Email" fullWidth />
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleEmailSubmit("user@example.com")}
        sx={{ marginTop: 2 }}
      >
        Submit
      </Button>
    </div>
  );
};

export default PasswordResetRequest;
