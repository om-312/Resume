// src/theme/darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Enable dark mode
    background: {
      default: '#1a1a1a', // Overall page background
      paper: '#2a2a2a', // Background for cards, paper components
    },
    text: {
      primary: '#e0e0e0', // Main text color
      secondary: '#b0b0b0', // Secondary text color (e.g., descriptions)
    },
    primary: {
      main: '#bb86fc', // A common primary color for dark themes
    },
    secondary: {
      main: '#03dac6', // A common secondary color for dark themes
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // MUI's default, or choose your own
    h1: { fontSize: '2.5rem' },
    h2: { fontSize: '2rem' },
    h3: { fontSize: '1.75rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.25rem' },
    h6: { fontSize: '1rem' },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent', // Transparent app bar
          boxShadow: 'none', // No shadow for the app bar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // Prevent uppercase text for buttons
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                borderRadius: '12px', // Slightly rounded corners for Paper components
                padding: '24px', // Default padding for Paper
            }
        }
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '12px', // Slightly rounded corners for Cards
            }
        }
    },
  },
});

export default darkTheme;