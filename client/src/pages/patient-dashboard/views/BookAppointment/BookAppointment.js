import "./BookAppointment.css";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/system";

// styles

export default function BookAppointment() {
  const [timings, setTimings] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(timings, desc);
  };

  // const handleChange = e => {
  //   setTimings(e.target.value);
  // };
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper
        className="title"
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: "auto",
        }}
      >
        <h2 className="dashboard-title">Book Appointment</h2>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="datetime-local"
            label="Next appointment"
            fullWidth
            type="datetime-local"
            defaultValue="2022-01-12T10:30"
            margin="normal"
            label="Select Timing"
            onChange={e => setTimings(e.target.value)}
            helperText="Please select suitable timings"
            // sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          >
            {" "}
          </TextField>

          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            fullWidth
            margin="normal"
            multiline
            value={desc}
            onChange={e => setDesc(e.target.value)}
            helperText="What's the appointment regarding"
            maxRows={5}
          >
            {" "}
          </TextField>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Book
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}
