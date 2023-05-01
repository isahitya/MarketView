import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
  useThemeProps,
} from "@mui/material";

const interests = [
  "Tech",
  "Healthcare",
  "Fashion",
  "Finance",
  "Energy",
  "Automotive",
  "Entertainment",
  "Real Estate",
  "Retail",
  "Transportation",
];

const SignUp = (props) => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    preferredCurrency: "",
    interests: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleInterestChange = (event) => {
    const { name, checked } = event.target;
    setFormValues((prev) => ({
      ...prev,
      interests: { ...prev.interests, [name]: checked },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log("Form values:", formValues);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button>Go to login page</Button>
        <div
          style={{
            border: "1px solid rgba(100,100,100,0.25)",
            width: "30em",
            margin: "1em",
          }}
        ></div>
        <Typography component="h1" variant="h5">
          Sign up to start using MarketView
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                value={formValues.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Country"
                name="country"
                value={formValues.country}
                onChange={handleChange}
              >
                {/* Add MenuItem components for each country */}
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="India">India</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Preferred Currency"
                name="preferredCurrency"
                value={formValues.preferredCurrency}
                onChange={handleChange}
              >
                {/* Add MenuItem components for each currency */}
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="GBP">GBP</MenuItem>

                <MenuItem value="INR">INR</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Interests</FormLabel>
                <FormGroup>
                  {interests.map((interest) => (
                    <FormControlLabel
                      key={interest}
                      control={
                        <Checkbox
                          checked={formValues.interests[interest] || false}
                          onChange={handleInterestChange}
                          name={interest}
                        />
                      }
                      label={interest}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>Select your interests</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={props.onSignupButtonClick}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
