import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// styles
import "./Cashier.css";

export default function Cashier() {
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
        <h2 className="dashboard-title">Cashier</h2>
      </Paper>
    </Grid>
  );
}
