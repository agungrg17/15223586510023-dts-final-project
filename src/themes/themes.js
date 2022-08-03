import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const base = createTheme({
  palette: {
    primary: {
      main: "#f6dbf3",
    },
    secondary: {
      main: "#181518",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    button: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 16,
  },
//   props: {
//     MuiAppBar: {
//       color: "transparent",
//     },
//   },
});

const theme = responsiveFontSizes(base);

export default theme;
