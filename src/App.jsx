import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;


// import React from 'react';
// import { ThemeProvider, createTheme, CssBaseline, Container, Box } from '@mui/material';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';
// import Resume from './components/Resume';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//     background: {
//       default: '#121212', // dark background
//       paper: '#1E1E1E',   // card and paper background
//     },
//   },
//   typography: {
//     fontFamily: 'Roboto, sans-serif',
//   },
// });

// const App = () => {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <CssBaseline /> {/* Resets styles and applies dark background */}
//       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'row',
//             gap: 3,
//             alignItems: 'flex-start',
//           }}
//         >
//           <Box sx={{ flex: '0 0 300px' }}>
//             <Sidebar />
//           </Box>
//           <Box sx={{ flex: 1 }}>
//             <MainContent />
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// };

// export default App;

