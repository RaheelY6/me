import { Box } from '@mui/material';

const Section = ({ children }) => {
  return (
    <Box
      component='section'
      sx={{
        width: { lg: '1200px', md: '700px', sm: '500px', xs: '300px' },
        margin: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
