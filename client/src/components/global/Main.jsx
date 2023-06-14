import React from 'react';
import { Box } from '@mui/material';

function Main({ children }) {
    return (
        <Box component='main'>
            <h1>Main</h1>

            <Box>
                { children }
            </Box>
        </Box>
    );
}

export default Main;
