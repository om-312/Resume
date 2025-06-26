import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card, 
  CardMedia,
  CardContent,
  AppBar,
  Toolbar,
  Paper,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const tabs = ['All', 'Web design', 'Applications', 'Web development'];

const projects = [
  {
    title: 'Finance',
    category: 'Web development',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-1.jpg',
  },
  {
    title: 'Orizon',
    category: 'Web development',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-2.png',
  },
  {
    title: 'Fundo',
    category: 'Web design',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-3.jpg',
  },
  {
    title: 'Brawlhalla',
    category: 'Applications',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-4.png',
  },
  {
    title: 'DSM',
    category: 'Web design',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-5.png',
  },
  {
    title: 'MetaSpark',
    category: 'Web design',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-6.png',
  },
  {
    title: 'Summary',
    category: 'Web development',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-7.png',
  },
  {
    title: 'Task Manager',
    category: 'Applications',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-8.jpg',
  },
  {
    title: 'Arrival',
    category: 'Web development',
    image: 'https://parth.samhimsinfotech.in/assets/images/project-9.png',
  },
];

const PortfolioPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const filteredProjects =
    tabs[selectedTab] === 'All'
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() ===
            tabs[selectedTab].toLowerCase()
        );

  return (
      <Container>
        <Paper
          sx={{
            borderRadius: 3,
            backgroundColor: '#1E1E1E',
            boxShadow: 3,
            p: { xs: 2, sm: 3, md: 4 },
            ml: -2,
                        mr: 2,
            mt: 8,
          }}
        >
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
            <Toolbar
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                gap: 2,
                p: 1    ,
              }}
            >
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
                onClick={() => navigate('/resume')}
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
                Resume
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
                Portfolio
              </Button>
            </Toolbar>
          </AppBar>

          <Box mt={3} mb={2}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
              Portfolio
            </Typography>
            <Box
              sx={{
                width: '32px',
                height: '4px',
                backgroundColor: '#facc15',
                borderRadius: 2,
                mt: 1,
              }}
            />
          </Box>

          <Box sx={{ display: 'flex', gap: 3, mb: 4 }}>
            {tabs.map((tab, index) => (
              <Button
                key={index}
                onClick={() => setSelectedTab(index)}
                sx={{
                  color: selectedTab === index ? '#facc15' : 'white',
                  fontWeight: '500',
                  textTransform: 'none',
                  px: 0,
                  minWidth: 'auto',
                }}
              >
                {tab}
              </Button>
            ))}
          </Box>

          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ backgroundColor: '#1E1E1E', borderRadius: 4, overflow: 'hidden' }}>
  <Box
    sx={{
      position: 'relative',
      '&:hover .overlay': {
        opacity: 1,
      },
    }}
  >
    <CardMedia
      component="img"
      height="250"
      image={project.image}
      alt={project.title}
      sx={{ borderRadius: '16px' }}
    />
    <Box
      className="overlay"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'rgba(0,0,0,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0,
        transition: 'opacity 0.3s ease-in-out',
        borderRadius: '16px',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#2A2A2A',
          padding: 2,
          borderRadius: '50%',
        }}
      >
        <Typography variant="h5" color="#facc15">
          👁
        </Typography>
      </Box>
    </Box>
  </Box>

  <CardContent>
    <Typography variant="h6" color="white">
      {project.title}
    </Typography>
    <Typography variant="body2" color="gray">
      {project.category}
    </Typography>
  </CardContent>
</Card>

              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
  );
};

export default PortfolioPage;
