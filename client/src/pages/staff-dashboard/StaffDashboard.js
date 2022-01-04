import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Copyright from "../../components/Copyright/Copyright";
import { useNavigate } from "react-router-dom";

// routes
import StaffRoutes from "./routes/StaffRoutes";

// views
import Cashier from "./views/Cashier/Cashier";
import Doctor from "./views/Doctor/Doctor";
import LabAssistant from "./views/LabAssistant/LabAssistant";
import Nurse from "./views/Nurse/Nurse";
import Profile from "./views/Profile/Profile";
import Receptionist from "./views/Receptionist/Receptionist";
import Pharmacist from "./views/Pharmacist/Pharmacist";
import { useAuthContext } from "./../../hooks/useAuthContext";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent(props) {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { user } = useAuthContext();

  const navigate = useNavigate();

  // set views and change routes
  const [option, setOption] = React.useState(props.option);

  const handleRouteChange = view => {
    setOption(view);
    navigate("/staff/dashboard" + view);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <StaffRoutes handleRouteChange={handleRouteChange} />
        </Drawer>

        <Box
          style={{ height: "calc(100vh - 6rem)" }}
          component="main"
          sx={{
            backgroundColor: theme =>
              theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
            flexGrow: 1,
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {option === "" && <Profile />}
              {user.jobTitle === "doctor" && option === "/doctor" && <Doctor />}
              {user.jobTitle === "cashier" && option === "/cashier" && <Cashier />}
              {user.jobTitle === "receptionist" && option === "/receptionist" && <Receptionist />}
              {user.jobTitle === "labassistant" && option === "/labassistant" && <LabAssistant />}
              {user.jobTitle === "nurse" && option === "/nurse" && <Nurse />}
              {user.jobTitle === "pharmacist" && option === "/pharmacist" && <Pharmacist />}
            </Grid>
            <Copyright sx={{ pt: 4 }} text={"Hospital Management System"} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function StaffDashboard(props) {
  return <DashboardContent option={props.option} />;
}
