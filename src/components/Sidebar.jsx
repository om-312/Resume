import React from 'react';
import {
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Paper,
} from '@mui/material';
import {
  MailOutline,
  Phone,
  Cake,
  LocationOn,
  LinkedIn,
  GitHub,
  Instagram,
} from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Paper sx={{
      mt: 10,
      ml: 10,
      height: '950px',
      p: 4,
      textAlign: 'center',
      backgroundColor: 'background.paper',
      borderRadius: 5,
      boxShadow: 3,
    }}>
      <Box
        sx={{
          width: 250,
          height: 250,
          m: 5,
          backgroundColor: '#545353',
          borderRadius: 5,
          mx: 'auto',
          mb: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
        }}
      >
        <Avatar
          alt="OM DOBARIYA"
          src="https://parth.samhimsinfotech.in/assets/images/my-avatar.png"
          sx={{ width: '100%', height: '100%' }}
        />
      </Box>

      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 0.5 }}>
        Om Dobariya
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Web Developer
      </Typography>

      <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.12)' }} />

      <Box sx={{ textAlign: 'left' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <MailOutline sx={{ mr: 1.5, color: '#F8D568' }} />
          <Typography variant="body2" color="text.primary" sx={{ fontSize: '20px' }}>omdobariya312@gmail.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <Phone sx={{ mr: 1.5, color: '#F8D568' }} />
          <Typography variant="body2" color="text.primary" sx={{ fontSize: '20px' }}>+91 9726393192</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <Cake sx={{ mr: 1.5, color: '#F8D568' }} />
          <Typography variant="body2" color="text.primary" sx={{ fontSize: '20px' }}>December 3, 2006</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 6 }}>
          <LocationOn sx={{ mr: 1.5, color: '#F8D568' }} />
          <Typography variant="body2" color="text.primary" sx={{ fontSize: '20px' }}>Surat, Gujarat, India</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.12)' }} />

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton
          color="#F8D568"
          aria-label="LinkedIn"
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          color="#F8D568"
          aria-label="GitHub"
          href="https://github.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          color="#F8D568"
          aria-label="Instagram"
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram fontSize="large" />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Sidebar;