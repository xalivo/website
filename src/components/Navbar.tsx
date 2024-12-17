import {AppBar, Box, Toolbar, Typography} from "@mui/material";

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, paddingY: 2 }}>
                        xalivo's page
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;