import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// icons
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
      <ListItem button onClick={() => handleRouteChange("/doctor")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Doctor" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/cashier")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Cashier" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/receptionist")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Receptionist" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/labassistant")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Lab Assistant" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/nurse")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Nurse" />
      </ListItem>
      <ListItem button onClick={() => handleRouteChange("/pharmacist")}>
        <ListItemIcon>
          <LocalHospitalIcon />
        </ListItemIcon>
        <ListItemText primary="Pharmacist" />
      </ListItem>
    </div>
  );
}
