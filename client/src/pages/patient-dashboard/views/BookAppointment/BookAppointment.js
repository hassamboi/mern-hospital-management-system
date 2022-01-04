import "./BookAppointment.css";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/system";
import api from "../../../../api/axios";
import { useAuthContext } from "../../../../hooks/useAuthContext";
// styles

export default function BookAppointment() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(date, description);

    const data = { date, description, id: user.id };
    try {
      const response = await api.post("/patient/appointment", data).then(userData => {
        console.log(userData.data);
      });
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
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
            sx={{ mb: 4 }}
            id="datetime-local"
            label="Next appointment"
            fullWidth
            type="datetime-local"
            label="Select Timing"
            value={date}
            onChange={e => setDate(e.target.value)}
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
            multiline
            value={description}
            onChange={e => setDescription(e.target.value)}
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
