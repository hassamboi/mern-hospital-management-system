import colors from "./colors";

export default {
  "&.MuiButton-contained": {
    color: colors.bgWhite,
    backgroundColor: colors.primaryBlue,
  },
  "&.MuiButton-outlined": {
    color: colors.primaryBlue,
    border: `2px solid ${colors.primaryBlue}`,
  },
};
