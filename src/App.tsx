import { useMemo, useState } from "react";
import "./App.css";
import { ColorContext } from "./utils/theme/colorContext";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import getTheme from "./utils/theme/generalTheme";
import Loader from "./components/atoms/Loader";
import AppRouting from "./container/app/AppRouting";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const [isLoading, setIsLoading] = useState(false);

  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        setIsLoading(false);
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Loader isLoading={isLoading} />
        <BrowserRouter>
          <AppRouting />
        </BrowserRouter>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default App;
