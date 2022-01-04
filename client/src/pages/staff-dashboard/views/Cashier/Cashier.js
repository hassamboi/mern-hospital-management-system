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

// axios
import api from "../../../../api/axios";

// hooks
import { useAuthContext } from "./../../../../hooks/useAuthContext";

export default function Doctor() {
  const { user } = useAuthContext();
  const [records, setRecords] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [renderForm, setRenderForm] = useState(false);
  const [billItems, setBillItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [dueDate, setDueDate] = useState(new Date(Date.now()));
  const [taxRate, setTaxRate] = useState(0);
  const [index, setIndex] = useState(null);

  const handlePatientSearch = async e => {
    e.preventDefault();
    try {
      const response = await api.get(`/staff/history/${encodeURIComponent(searchEmail)}`).then(userData => {
        setRecords(userData.data.medical_records);
      });
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

  const handlePaymentDetailsSubmit = async e => {
    e.preventDefault();
    const billItemsArray = billItems.split(",");
    const splitBillItems = billItemsArray.map(function (billItem) {
      const box = billItem.split("-");
      return { name: box[0], price: box[1] };
    });

    try {
      const data = {
        index,
        email: searchEmail,
        bill_items: splitBillItems,
        total,
        issue_date: new Date(Date.now()),
        due_date: dueDate,
        tax_rate: taxRate,
        generated_by: user.name,
      };
      const response = await api.post("/staff/cashier", data).then(userData => {
        setRenderForm(false);
        setBillItems([]);
        setDueDate(new Date(Date.now()));
        setTaxRate(0);
        setTotal(0);
      });
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  };

  const handleEdit = e => {
    setIndex(e.target.value);
    setBillItems([]);
    setTotal(0);
    setDueDate(new Date(Date.now()));
    setTaxRate(0);
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
        <h2 className="dashboard-title">Cashier Portal</h2>
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
          <Box component="form" onSubmit={handlePaymentDetailsSubmit} sx={{ mt: 2, mb: 2 }}>
            <TextField
              id="outlined-multiline-flexible"
              label="Total"
              type="number"
              fullWidth
              multiline
              value={total}
              onChange={e => setTotal(e.target.value)}
              helperText="Set total bill amount"
              required
              sx={{ mb: 2, mt: 2 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="Tax Rate"
              type="number"
              fullWidth
              multiline
              value={taxRate}
              onChange={e => setTaxRate(e.target.value)}
              helperText="Set tax rate to apply on bill"
              required
              sx={{ mb: 2, mt: 2 }}
            />
            <TextField
              id="date"
              label="Due Date"
              fullWidth
              type="date"
              onChange={e => setDueDate(e.target.value)}
              helperText="Please select the bill payment due date"
              required
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ mb: 2, mt: 2 }}
            />
            <TextField
              id="outlined-multiline-flexible"
              label="[ItemName1-Price1,ItemName2-Price2,...]"
              fullWidth
              multiline
              value={billItems}
              onChange={e => setBillItems(e.target.value)}
              helperText="Add names of bill items followed by their cost in Rupees (seperated by commas)"
              maxRows={5}
              required
              sx={{ mb: 2, mt: 2 }}
            />

            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Update Invoice Bill
            </Button>
          </Box>
        )}
        {records && (
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Record Id</TableCell>
                  <TableCell align="center">Issue Date</TableCell>
                  <TableCell align="center">Due Date</TableCell>
                  <TableCell align="center">Tax Rate</TableCell>
                  <TableCell align="center">Bill Items</TableCell>
                  <TableCell align="center">Generated By</TableCell>
                  <TableCell align="center">Total</TableCell>
                  <TableCell align="center">Edit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {records.map((record, index) => (
                  <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell align="center">{record._id}</TableCell>
                    <TableCell align="center">
                      {record.payment_details.issue_date
                        ? new Date(record.payment_details.issue_date).toDateString()
                        : new Date(Date.now()).toDateString()}
                    </TableCell>
                    <TableCell align="center">
                      {record.payment_details.due_date
                        ? new Date(record.payment_details.due_date).toDateString()
                        : new Date(Date.now()).toDateString()}
                    </TableCell>
                    <TableCell align="center">{record.payment_details.tax_rate}</TableCell>
                    <TableCell align="center">
                      {record.payment_details.bill_items.map(bill_item => bill_item.name + ", ")}
                    </TableCell>
                    <TableCell align="center">{record.payment_details.generated_by}</TableCell>
                    <TableCell align="center">{record.payment_details.total}</TableCell>
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
