import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import "../Styles/sidebar.css";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: "#e63946",
    },
  },
});

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <FormControl className="locations">
          <FormLabel id="demo-radio-buttons-group-label">Locations</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="atlanta"
              control={<Radio size="small" />}
              label={
                <span
                  style={{
                    fontFamily: "Lato",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Atlanta
                </span>
              }
            />
            <FormControlLabel
              value="tokyo"
              control={<Radio size="small" />}
              label={
                <span
                  style={{
                    fontFamily: "Lato",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Tokyo
                </span>
              }
            />
            <FormControlLabel
              value="capetown"
              control={<Radio size="small" />}
              label={
                <span
                  style={{
                    fontFamily: "Lato",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  CapeTown
                </span>
              }
            />
            <FormControlLabel
              value="jakarta"
              control={<Radio size="small" />}
              label={
                <span
                  style={{
                    fontFamily: "Lato",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  Jakarta
                </span>
              }
            />
          </RadioGroup>
        </FormControl>
        <>
          <ThemeProvider theme={theme}>
            <div className="full-time">
              <FormControlLabel
                className="checkbox"
                control={
                  <Checkbox size="small" color="secondary" name="paid" />
                }
                label={
                  <span
                    style={{
                      fontFamily: "Lato",
                      fontWeight: "700",
                      fontSize: "14px",
                    }}
                  >
                    Full Time
                  </span>
                }
                value="paid"
                id="paid"
              />
            </div>
          </ThemeProvider>
        </>
      </div>
    </>
  );
};

export default Sidebar;
