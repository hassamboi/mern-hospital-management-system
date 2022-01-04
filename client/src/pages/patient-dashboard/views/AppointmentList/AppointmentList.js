import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import api from "../../../../api/axios";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../../../hooks/useAuthContext";

export default function AppointmentList() {
  const { user } = useAuthContext();
  const [records, setRecords] = useState([]);
  const id = user.id;
  useEffect(async () => {
    const response = await api.get(`/patient/history/${encodeURIComponent(id)}`).then(userData => {
      setRecords(userData.data.medical_records);
    });
  }, []);

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
        <h2 className="dashboard-title">View record</h2>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Record Id</TableCell>
                <TableCell align="center">Clinic Number</TableCell>
                <TableCell align="center">Date & Time</TableCell>
                <TableCell align="center">Description</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records &&
                records.map((record, index) => (
                  <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">{record._id}</TableCell>
                    <TableCell align="center">{record.appointment_details.clinicNumber}</TableCell>
                    <TableCell align="center">{new Date(record.appointment_details.date).toUTCString()}</TableCell>
                    <TableCell align="center">{record.appointment_details.description}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
}
