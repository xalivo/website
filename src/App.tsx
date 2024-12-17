import {HashRouter as RouterHash, Route, Routes} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Navbar/>
            <main>
                <RouterHash>
                    <Routes>
                        <Route path={"/"} element={<HomePage/>}/>
                    </Routes>
                </RouterHash>
            </main>
        </ThemeProvider>
    );
}

export default App;
