import React from 'react'
import './Footer.scss'
import { Facebook, Instagram, WhatsApp } from '@mui/icons-material'
import { ButtonGroup, IconButton, Typography } from '@mui/material'
import logo from '../Images/Logo.jpeg';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './colorTheme.js'

export const Footer = () => {
  return (
    <footer className='footer'>
        <img className='logo' src={logo} alt="Pulltech" />
        <ButtonGroup variant="string" aria-label="outlined primary button group" sx={{gap: 10}}>
            <ThemeProvider theme={theme}>
                <IconButton color='white'>
                    <Facebook />
                </IconButton>
                <IconButton color='white'>
                    <Instagram />
                </IconButton>
                <IconButton color='white'>
                    <WhatsApp />
                </IconButton>
            </ThemeProvider>
        </ButtonGroup>
        <Typography variant="p" color="#fff" sx={{fontSize: 12}}>
            Copyright © 2023 Carlos Javier. All rights reserved. PULLTECH.
        </Typography>
    </footer>
  )
}
