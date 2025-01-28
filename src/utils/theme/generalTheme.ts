import { amber, deepOrange, grey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";
import Colors from "../../constant/colors";

const getTheme = (mode: PaletteMode) => ({
  breakpoints: {
    values: {
      min: 0,
      xs: 250,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobileS: 350,
      mobileSM: 400,
      mobileM: 450,
      mobileL: 550,
      mobileXL: 650,
      tablet: 720,
      laptop: 1080,
      desktop: 1440,
      max: 2880,
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
    h1: {
      fontFamily: "Open Sans",
      fontWeight: 900,
      lineHeight: 1.2,
      fontSize: "6.4rem",
      color: Colors.gray.decorative[800],
    },
    h2: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      lineHeight: 1.4,
      fontSize: "4rem",
      color: Colors.gray.decorative[800],
    },
    h3: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      lineHeight: 1.6,
      fontSize: "3rem",
      color: Colors.gray.decorative[800],
    },
    h4: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      lineHeight: "36px",
      fontSize: "24px",
      color: Colors.gray.decorative[800],
    },
    h5: {
      fontFamily: "Open Sans",
      fontWeight: 700,
      lineHeight: "32px",
      fontSize: "21px",
      color: Colors.gray.decorative[800],
    },
    body1: {
      fontFamily: "Open Sans",
      fontWeight: 500,
      color: Colors.gray.decorative[800],
      fontSize: "14px",
    },
    body2: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      color: Colors.gray.decorative[800],
    },
    subtitle1: {
      fontFamily: "Open Sans",
      fontWeight: 300,
      color: Colors.gray.decorative[800],
      fontSize: "0.875rem",
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontWeight: 300,
      color: Colors.gray.decorative[800],
    },
    custom: {
      fontFamily: "Open Sans",
      fontWeight: 300,
      color: Colors.gray.decorative[800],
    },
  },
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#fff",
            secondary: grey[500],
          }),
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          ":after": {
            borderBottom: `2px solid ${Colors.teal.default}`,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: Colors.teal.default,
          },
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: Colors.teal.default,
        },
      },
    },
  },
});

export default getTheme;
