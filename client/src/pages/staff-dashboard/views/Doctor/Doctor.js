import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import "./Doctor.css";

// styles

export default function Doctor() {
  const [records, setRecords] = useState([]);

  const [searchEmail, setSearchEmail] = useState("");
  const [renderForm, setRenderForm] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [doctorComments, setDoctorComments] = useState("");
  const [index, setIndex] = useState(null);

  const handlePatientSearch = e => {
    e.preventDefault();
    console.log(searchEmail);
  };

  const handlePrescriptionSubmit = e => {
    e.preventDefault();
    console.log(index, doctorComments, date);
  };

  const handleEdit = e => {
    setIndex(e.target.value);
    setDate(new Date(Date.now()));
    setDoctorComments("");
    setRenderForm(true);
  };

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
        <h2 className="dashboard-title">Doctor Portal</h2>
        <Box component="form" onSubmit={handlePatientSearch} sx={{ mt: 2, mb: 2 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="searchEmail"
            label="Patient Email Address"
            name="searchEmail"
            autoComplete="searchEmail"
            autoFocus
            onChange={e => setSearchEmail(e.target.value)}
            value={searchEmail}
          />

          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Search
          </Button>
        </Box>
        {renderForm && (
          <Box component="form" onSubmit={handlePrescriptionSubmit} sx={{ mt: 2, mb: 2 }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Doctor Comments"
              fullWidth
              multiline
              value={doctorComments}
              onChange={e => setDoctorComments(e.target.value)}
              helperText="Add additional comments for the prescription"
              maxRows={5}
              required
              sx={{ mb: 2, mt: 2 }}
            />
            <TextField
              id="datetime-local"
              label="Next appointment"
              fullWidth
              type="datetime-local"
              label="Select Timing"
              onChange={e => setDate(e.target.value)}
              helperText="Please select suitable timings"
              InputLabelProps={{
                shrink: true,
              }}
              required
              sx={{ mb: 2, mt: 2 }}
            />

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Update Prescription
            </Button>
          </Box>
        )}
        {records && (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Date</TableCell>
                  <TableCell align="center">Doctor Comments</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((record, index) => (
                  <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">{record.prescription.date}</TableCell>
                    <TableCell align="center">{record.prescription.doctor_comments}</TableCell>
                    <TableCell align="center">{record.prescription.given_by}</TableCell>
                    <TableCell align="center">
                      <Button onClick={handleEdit} name="edit" value={index}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Grid>
  );
}
