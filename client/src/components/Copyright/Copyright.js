import { Typography } from "@mui/material";
import Link from "@mui/material/Link";

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="secondary.main"
        href="https://github.com/hassamboi/hospital-management-system"
        target="_blank"
      >
        {props.text}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
