import { Box } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { styles } from '../../style/styles';
import Upwork from './Upwork';
import { useEffect } from 'react';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: styles.secondaryPallete[1],
      }}
    >
      <Navbar />
      <Upwork />
      <Footer />
    </Box>
  );
};

export default Portfolio;
