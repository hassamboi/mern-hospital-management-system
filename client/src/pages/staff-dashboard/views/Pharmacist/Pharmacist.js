import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// styles
import "./Pharmacist.css";

export default function Pharmacist() {
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
        Pharmacist
      </Paper>
    </Grid>
  );
}
