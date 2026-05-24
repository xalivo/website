import {HashRouter as RouterHash, Route, Routes} from "react-router-dom";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Navbar from "./components/Navbar.tsx";
import HomePage from "./pages/HomePage.tsx";
import FlowerPage from "./pages/FlowerPage.tsx";
import Redirect from "./components/Redirect.tsx";
import {YULE_URL} from "./common/deploy-config.ts";

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
                        <Route path={"/yule"} element={<Redirect url={YULE_URL}/>}/>
                        <Route path={"/flower"} element={<FlowerPage/>}/>
                    </Routes>
                </RouterHash>
            </main>
        </ThemeProvider>
    );
}

export default App;
