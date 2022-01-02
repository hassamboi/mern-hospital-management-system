import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

export default function MenuItems({ handleRouteChange }) {
  return (
    <div>
      <ListItem button onClick={() => handleRouteChange("")}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/book-appointment")}>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Book Appointment" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/view-appointment")}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary="View Appointments" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/medical-record")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Medical Record" />
      </ListItem>
    </div>
  );
}
