import { Box, Stack, Typography } from '@mui/material';
import { styles } from '../../style/styles';
import Menu from './Menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        zIndex: 2,
        top: 0,
      }}
    >
      <Stack
        component={'nav'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        sx={{
          width: { lg: '1200px', md: '700px', sm: '500px', xs: '300px' },
          margin: 'auto',
          height: { sm: '100px', xs: '60px' },
        }}
      >
        <Link to='/me' style={{ textDecoration: 'none' }}>
          <div className='hover-wrapper'>
            <Typography
              className='hover-style'
              sx={{
                '&:hover': {
                  color: 'white',
                },
              }}
              fontWeight={900}
              fontSize={styles.fontSize.md}
              color={styles.pallette[2]}
            >
              raheel yasir
            </Typography>
          </div>
        </Link>
        <Menu />
      </Stack>
    </Box>
  );
};

export default Navbar;
