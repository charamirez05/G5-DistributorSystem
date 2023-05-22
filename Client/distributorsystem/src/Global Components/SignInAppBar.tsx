/**
 * Installed MUI
 * npm install @mui/material @emotion/react @emotion/styled
 * 
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material

 */
import * as React from 'react';
import { AppBar, Typography, Box, Toolbar, Button, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function SignInNavBar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1, bgcolor: "#156D94" }}>
                <AppBar position="static" sx={{bgcolor: "#156D94"}}>
                    <Toolbar>
                        
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'left', fontWeight: "bold" }}>
                            Distributor System
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}