import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// styles
import "./Profile.css";
import { useAuthContext } from "./../../../../hooks/useAuthContext";
import Avatar from "@mui/material/Avatar";

export default function Profile() {
  const { user } = useAuthContext();

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
        <h2 className="dashboard-title">Profile</h2>
        <div className="profile-content">
          <Avatar alt={`${user.name}`} />
          <label>
            Name: <span>{user.name}</span>
          </label>
          <label>
            Email: <span>{user.email}</span>
          </label>
        </div>
      </Paper>
    </Grid>
  );
}
