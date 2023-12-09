import { useState } from 'react';
import './menu.css';
import { Box, Stack, Typography } from '@mui/material';
import { styles } from '../../style/styles';
import { Link } from 'react-router-dom';
import linkedinLogo from 'src/assets/logos/linkedin.png';
import upworkLogo from 'src/assets/logos/upwork.png';
import facebook from 'src/assets/logos/facebook.png';
import instagram from 'src/assets/logos/instagram.png';
import twitter from 'src/assets/logos/twitter.png';

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const imgStyle = {
    height: { lg: '30px', sm: '30px', xs: '20px' },
    backgroundColor: styles.pallette[2],
    borderRadius: '100%',
  };

  return (
    <div className='menu-wrapper'>
      <div
        style={{
          backgroundColor: isMenuOpen ? 'transparent' : '',
        }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='menu-button'
      >
        <div className={!isMenuOpen ? 'line' : 'line line-1-animate'} />
        <div className={!isMenuOpen ? 'line' : 'line line-2-animate'} />
      </div>
      <div
        style={{
          overflow: 'hidden',
        }}
        className={`menu ${isMenuOpen ? 'menu-active' : ''}`}
      >
        <Stack
          sx={{
            px: { lg: 10, sm: 10, xs: 4 },
            py: { lg: 12, sm: 12, xs: 6 },
            color: styles.pallette[2],
            height: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Stack spacing={2}>
            <Link
              to='/me/work'
              style={{ textDecoration: 'none', color: styles.pallette[2] }}
            >
              <Typography fontSize={styles.fontSize.md}>My Work</Typography>
            </Link>
            <Link
              to='/me/resume'
              style={{ textDecoration: 'none', color: styles.pallette[2] }}
            >
              <Typography fontSize={styles.fontSize.md}>My Resume</Typography>
            </Link>
          </Stack>
          <Stack spacing={2}>
            <Typography fontSize={styles.fontSize.md}>SAY HELLO</Typography>
            <Typography fontSize={styles.fontSize.md}>
              raheel.queries@outlook.com
            </Typography>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Link target='_blank' to={'https://linkedin.com/in/raheelekv'}>
              <Box component='img' sx={imgStyle} src={linkedinLogo} />
            </Link>
            <Link target='_blank' to={'https://www.facebook.com/HmdOxO/'}>
              <Box component='img' sx={imgStyle} src={facebook} />
            </Link>
            <Link target='_blank' to={'https://www.instagram.com/raheel_.7'}>
              <Box component='img' sx={imgStyle} src={instagram} />
            </Link>
            <Link target='_blank' to={'https://twitter.com/raheely6'}>
              <Box component='img' sx={imgStyle} src={twitter} />
            </Link>
            <Link
              target='_blank'
              to={'https://www.upwork.com/freelancers/~012adad40a2fc50c11'}
            >
              <Box component='img' sx={imgStyle} src={upworkLogo} />
            </Link>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};

export default Menu;
