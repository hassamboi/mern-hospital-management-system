import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// styles
import "./BookAppointment.css";

export default function BookAppointment() {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        Book Appointment
      </Paper>
    </Grid>
  );
}
