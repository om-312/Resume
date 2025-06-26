import React from 'react';
import {
  Box,
  Typography,
  Divider,
  Paper,
  LinearProgress,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material';
import { School, EmojiEvents } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const skills = [
  { name: 'Flutter', value: 95 },
  { name: 'Dart', value: 96 },
  { name: 'Firebase', value: 90 },
  { name: 'BT-Service', value: 85 },
  { name: 'Android - IOS', value: 92 },
  { name: 'C | C++ | Java', value: 90 },
  { name: 'PHP | HTML', value: 60 },
];

const Resume = () => {
  const navigate = useNavigate();

  return (
    <Paper sx={{
      p: { xs: 2, sm: 3, md: 4 },
      backgroundColor: 'background.paper',
      borderRadius: 3,
      boxShadow: 3,
      mr: 10,
      mt: 8,
    }}>

      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: '#1E1E1E',
          borderRadius: '20px 20px 0 0',
          borderBottom: '1px solid #333',
          mb: 3,
        }}
      >
        <Toolbar sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 2,
          p: 1,
        }}>
          <Button
            onClick={() => navigate('/')}
            sx={{
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '20px 20px 0 0',
              textTransform: 'none',
              px: 3,
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            About
          </Button>

          <Button
            sx={{
              color: '#F8D568',
              fontWeight: 'bold',
              borderRadius: '20px 20px 0 0',
              textTransform: 'none',
              px: 3,
              backgroundColor: '#2A2A2A',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Resume
          </Button>

          <Button
            sx={{
              color: 'white',
              fontWeight: 'bold',
              borderRadius: '20px 20px 0 0',
              textTransform: 'none',
              px: 3,
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
            onClick={() => navigate('/portfolio')}
          >
            Portfolio
          </Button>
        </Toolbar>
      </AppBar>

      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
        Resume
      </Typography>
      <Divider sx={{ backgroundColor: '#ffb74d', width: '50px', my: 1, height: '5px', borderRadius: 1 }} />


      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 4 }}>
        Education
      </Typography>
      <Divider sx={{ backgroundColor: '#ffb74d', width: '50px', my: 1 }} />
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          Bachelor Of Computer Application
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
          <School fontSize="small" sx={{ mr: 1 }} />
          Veer Narmad South Gujarat University
        </Typography>
        <Typography sx={{ color: '#ffb74d' }}>2024</Typography>
        <Typography sx={{ mt: 1 }}>
          Due to the nature of computation, errors may occur, but all technology must be embraced fully.
        </Typography>

        <Box mt={3}>
          <Typography sx={{ fontWeight: 'bold' }}>Higher - Secondary</Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
            <School fontSize="small" sx={{ mr: 1, color: 'red' }} />
            Shree Ramkrishna Harikrishna Academy
          </Typography>
          <Typography sx={{ color: '#ffb74d' }}>2021 — 2024</Typography>
          <Typography sx={{ mt: 1 }}>
            Due to the nature of learning, mistakes may happen, but all knowledge must be pursued fully.
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 5 }}>
        Experience
      </Typography>
      <Divider sx={{ backgroundColor: '#ffb74d', width: '50px', my: 1 }} />
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontWeight: 'bold' }}>Web Developer (TL)</Typography>
        <Typography sx={{ color: '#ffb74d' }}>2024 — Present</Typography>
        <Typography sx={{ mt: 1 }}>
          I am a qualified web Developer with 6 month of experience in making websites at Quad Softtech.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 5 }}>
        Achievements
      </Typography>
      <Divider sx={{ backgroundColor: '#ffb74d', width: '50px', my: 1 }} />
      <Box sx={{ ml: 2 }}>
        <Typography sx={{ fontWeight: 'bold' }}>
          <EmojiEvents sx={{ color: '#ffb74d', mr: 1 }} />
          Magic Mobile
        </Typography>
        <Typography sx={{ mb: 2 }}>
          Got first rank in inter-college Magic Mobile (Website) competition at CB Patel.
        </Typography>

        <Typography sx={{ fontWeight: 'bold' }}>
          <EmojiEvents sx={{ color: '#ffb74d', mr: 1 }} />
          IT Mania
        </Typography>
        <Typography>
          State level college IT event IT Mania held at UTU where achieved second rank.
        </Typography>
      </Box>

      <Typography variant="h5" sx={{ fontWeight: 'bold', mt: 5 }}>
        My Skills
      </Typography>
      <Divider sx={{ backgroundColor: '#ffb74d', width: '50px', my: 1 }} />

      <Paper
        sx={{
          p: 3,
          mt: 2,
          background: 'linear-gradient(to right, #161616, #1e1e1e)',
          borderRadius: '20px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          border: '1px solid #2c2c2c',
        }}
      >
        {skills.map((skill) => (
          <Box key={skill.name} sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 'bold', color: 'white' }}>
              {skill.name} {skill.value}%
            </Typography>
            <LinearProgress
              variant="determinate"
              value={skill.value}
              sx={{
                height: 8,
                borderRadius: 5,
                backgroundColor: '#2f2f2f',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#ffb74d',
                },
              }}
            />
          </Box>
        ))}
      </Paper>

    </Paper>
  );
};

export default Resume;






// https://parth.samhimsinfotech.in/assets/images/project-1.jpg
// https://parth.samhimsinfotech.in/assets/images/project-2.png
// https://parth.samhimsinfotech.in/assets/images/project-3.jpg
// https://parth.samhimsinfotech.in/assets/images/project-4.png
// https://parth.samhimsinfotech.in/assets/images/project-5.png
// https://parth.samhimsinfotech.in/assets/images/project-6.png
// https://parth.samhimsinfotech.in/assets/images/project-7.png
// https://parth.samhimsinfotech.in/assets/images/project-8.jpg
// https://parth.samhimsinfotech.in/assets/images/project-9.png