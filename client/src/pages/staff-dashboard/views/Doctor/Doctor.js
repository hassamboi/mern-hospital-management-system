import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";
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
  const [data, setData] = useState("");
  const [renderForm, setrenderForm] = useState(false);

  function createData(number, date, presc) {
    return { number, date, presc };
  }

  const rows = [createData("1", 159, "Insan da bacha ban"), createData("2", 237, "Insan da bacha ban"), createData("3", 262, "Insan da bacha ban")];

  const handleSubmit = e => {
    e.preventDefault();
    setrenderForm(true);
    console.log(renderForm);
    console.log(data);
  };

  const handleEdit = e => {
    setrenderForm(false);
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
        <h2 className="dashboard-title">Doctor</h2>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Email"
            fullWidth
            multiline
            value={data}
            onChange={e => setData(e.target.value)}
            helperText="Enter the patient's email to get relevant data"
            maxRows={5}
          >
            {" "}
          </TextField>
          <Button type="submit" onClick={handleSubmit} variant="contained" sx={{ mt: 3, mb: 2 }}>
            Search
          </Button>
          {renderForm && (
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Clinic Number</TableCell>
                    <TableCell align="right">Date</TableCell>
                    <TableCell align="right">Prescription</TableCell>
                    <TableCell align="right">Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.number} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell>{row.number}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                      <TableCell align="right">{row.presc}</TableCell>
                      <TableCell align="right">
                        <Button onClick={handleEdit} name="edit" value={row.number}>
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      </Paper>
    </Grid>
  );
}
