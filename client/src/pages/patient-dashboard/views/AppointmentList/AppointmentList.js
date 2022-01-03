import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// styles
import "./AppointmentList.css";

export default function AppointmentList() {
  function createData(number, date, presc) {
    return { number, date, presc };
  }

  const rows = [createData("1", 159, "Insan da bacha ban"), createData("2", 237, "Insan da bacha ban"), createData("3", 262, "Insan da bacha ban")];
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
        <h2 className="dashboard-title">View Appointment</h2>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Clinic Number</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Prescription</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.number} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{row.number}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.presc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  );
}
