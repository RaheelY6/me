import { Box } from '@mui/material';
import Hero from './views/Hero/Hero';
import Skills from './views/Skills/Skills';
import History from './views/History/History';
import Work from './views/Work/Work';
import Message from './views/Message/Message';
import Footer from './views/Footer/Footer';
import Navbar from './views/Navbar/Navbar';
import './App.css';
import Skills2 from './views/Skills/Skills2';

const App = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <Navbar />
      <Hero />
      <Skills />
      <History />
      <Work />
      <Message />
      <Footer />
    </Box>
  );
};

export default App;
