// material imports
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
import { ThemeProvider } from "@mui/material/styles";
import api from "../../../api/axios";
// useState for states
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../hooks/useAuthContext";

// custom theme
import theme from "../../../assets/js/theme";
import colors from "../../../assets/js/colors";

// components
import Copyright from "../../Copyright/Copyright";

// hooks

export default function Auth({ isPatient, handleSwitch }) {
  // states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login_user } = useAuthContext();

  // hooks
  const navigate = useNavigate();

  // form submit handler
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email, password);
    const route = isPatient ? "/patient/login" : "/staff/login";
    const data = { email, password };
    try {
      const response = await api.post(route, data).then(userData => {
        console.log(userData.data);
        login_user(userData.data);
        //  loginUser(userData.data);
        //  navigate("/");
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
            {isPatient ? "Patient Login" : "Staff Login"}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
              value={email}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Log In
            </Button>
            <Grid container>
              <Grid item>
                <Link onClick={() => navigate("/register")} color="secondary.main" href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Button
              style={{ backgroundColor: colors.accentBlue, color: "black" }}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSwitch}
            >
              Switch to {isPatient ? "Staff Login" : "Patient Login"}
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} text={"Hospital Management System"} />
      </Container>
    </ThemeProvider>
  );
}
