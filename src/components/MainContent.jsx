import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    Divider,
    Paper,
    Button,
    AppBar,
    Toolbar,
} from '@mui/material';
import {
    PhoneAndroid,
    DesignServices,
    Terminal,
    SportsEsports,
} from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';


const MainContent = () => {
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
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        gap: 2,
                        p: 1,
                    }}
                >
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
                        About
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
                        onClick={() => navigate('/resume')}
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

            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
                About Me
            </Typography>
            <Divider sx={{ backgroundColor: '#ffb74d', width: '50px', my: 1, height: '5px', borderRadius: 1 }} />

            <Typography variant="body1" paragraph color="text.secondary">
                I am a qualified flutter developer. Strong creative and analytical skills. Team player with an eye for details. I have some experience with flutter development. I have developed applications like Stock Management, Crypto-Currency, Drink Management, Truck System Management, Attendance Management Reports App, 360 View Recording App, Gurukul Family, and Stock Inventory.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
                I'm a highly skilled mobile application developer with many years of experience. Personally, I like to work more with native technologies in iOS and Android. I have worked on many projects. I have worked with different domains like e-commerce, finance, entertainment, social, health, events, etc.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
                I am a strong person with excellent motivation skills and a record of delivering projects that are on schedule and within scope requirements. There is one thing that I will never tell you out loud, because I think it just goes without saying your satisfaction is guaranteed.
            </Typography>
            <Typography variant="body1" paragraph color="text.secondary">
                Also, I am completely open to learning new technologies whenever and wherever needed to develop great applications. I am always looking forward to making long-term relationships with my client, and for that, I always do all required communication from time to time and share genuine details only. If I am not confident in any project or any task in the project or require any research, then I always prefer to inform the client prior to starting that work. I believe that long-term relationships are only built on trust, and for that, I should each detail 100% genuinely.
            </Typography>

            <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.12)' }} />

            <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}>
                What I'm Doing
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ backgroundColor: 'background.default', borderRadius: 2, boxShadow: 2 }}>
                        <CardContent>
                            <PhoneAndroid sx={{ fontSize: 48, mb: 1, color: '#F8D568' }} />
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                                Websites design
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Professional development of applications for iOS and Android.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ backgroundColor: 'background.default', borderRadius: 2, boxShadow: 2 }}>
                        <CardContent>
                            <DesignServices sx={{ fontSize: 48, mb: 1, color: '#F8D568' }} />
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                                UI/UX
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                High-quality development of user for web and mobile applications.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ backgroundColor: 'background.default', borderRadius: 2, boxShadow: 2 }}>
                        <CardContent>
                            <Terminal sx={{ fontSize: 48, mb: 1, color: '#F8D568' }} />
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                                Shopify Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The most modern and high-quality design made at a professional level.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card sx={{ backgroundColor: 'background.default', borderRadius: 2, boxShadow: 2 }}>
                        <CardContent>
                            <SportsEsports sx={{ fontSize: 48, mb: 1, color: '#F8D568' }} />
                            <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold', mb: 1, color: 'text.primary' }}>
                                Game Development
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Professional development of games for iOS and Android.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>
        </Paper>
    );
};

export default MainContent;