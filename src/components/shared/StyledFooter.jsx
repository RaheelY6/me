import { Box } from '@mui/material';

const StyledFooter = ({ children }) => {
  return (
    <Box
      component='footer'
      sx={{
        width: { lg: '1200px', md: '700px', sm: '500px', xs: '300px' },
        margin: 'auto',
      }}
    >
      {children}
    </Box>
  );
};

export default StyledFooter;
