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
  const [date, setDate] = useState(new Date(Date.now()));
  const [description, setDescription] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(date, description);

    const data = { date, description, id: user.id };
    try {
      const response = await api.post("/patient/appointment", data).then(userData => {
        setDate(new Date(Date.now()));
        setDescription("");
        console.log(userData);
      });
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

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
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            sx={{ mb: 4 }}
            id="datetime-local"
            label="Next appointment"
            fullWidth
            type="datetime-local"
            label="Select Timing"
            onChange={e => setDate(e.target.value)}
            helperText="Please select suitable timings"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            fullWidth
            multiline
            value={description}
            onChange={e => setDescription(e.target.value)}
            helperText="What's the appointment regarding"
            maxRows={5}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Book
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
}
