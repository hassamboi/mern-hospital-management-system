// material ui
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/material/styles";
import api from "../../../api/axios";
// react
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// custom theme
import theme from "../../../assets/js/theme";

// components
import Copyright from "../../Copyright/Copyright";

// hooks

export default function Signup() {
  // states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDOB] = useState("");
  const [gender, setGender] = useState("Male");

  // sign up hook

  // navigate
  const navigate = useNavigate();

  // form submit handler
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(name, email, password, age, dob, gender, address, phone);

    const data = { name, email, password, age, dob, gender, address, phone };
    try {
      const response = await api.post("/patient/register", data).then(userData => {
        console.log(userData.data);
        //  loginUser(userData.data);
        navigate("/login");
      });
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Full Name"
                  name="name"
                  autoComplete="name"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="text"
                  id="address"
                  label="Address"
                  name="address"
                  autoComplete="address"
                  onChange={e => setAddress(e.target.value)}
                  value={address}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="text"
                  id="phone"
                  autoComplete="phone"
                  onChange={e => setPhone(e.target.value)}
                  value={phone}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="date"
                  onChange={e => setDOB(e.target.value)}
                  value={dob}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  required
                />
              </Grid>
              <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  id="age"
                  label="Age"
                  name="age"
                  onChange={e => setAge(e.target.value)}
                  value={age}
                />
                <Select
                  sx={{ ml: 1 }}
                  required
                  fullWidth
                  id="gender"
                  name="Gender"
                  value={gender}
                  onChange={e => setGender(e.target.value)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => navigate("/login")} color="secondary.main" href="#" variant="body2">
                  Already have an account? Log In
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} text={"Hospital Management System"} />
      </Container>
    </ThemeProvider>
  );
}
