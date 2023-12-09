import { Box, Stack, Typography } from '@mui/material';
import StyledFooter from '../../components/shared/StyledFooter';
import { styles } from '../../style/styles';
import { Link } from 'react-router-dom';
import linkedinLogo from 'src/assets/logos/linkedin.png';
import upworkLogo from 'src/assets/logos/upwork.png';
import facebook from 'src/assets/logos/facebook.png';
import instagram from 'src/assets/logos/instagram.png';
import twitter from 'src/assets/logos/twitter.png';

const Footer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        py: { lg: 10, xs: 4 },
        backgroundColor: styles.pallette[2],
      }}
    >
      <StyledFooter>
        <Stack
          mb={{ lg: 15, xs: 5 }}
          direction={{ lg: 'row', xs: 'column' }}
          spacing={{ lg: 50, xs: 5 }}
        >
          <Stack fontSize={styles.fontSize.md} color={'white'} spacing={4}>
            <Typography fontSize={styles.fontSize.md}>SAY HELLO</Typography>
            <Typography fontSize={styles.fontSize.md}>
              raheel.queries@outlook.com
            </Typography>
          </Stack>
          <Stack color={'white'} spacing={4} fontSize={styles.fontSize.md}>
            <Link
              to='/me/work'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div className='hover-wrapper'>
                <Typography
                  className='hover-style'
                  fontSize={styles.fontSize.md}
                >
                  My Work
                </Typography>
              </div>
            </Link>

            <Link
              to='/me/resume'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <div className='hover-wrapper'>
                <Typography
                  className='hover-style'
                  fontSize={styles.fontSize.md}
                >
                  My Resume
                </Typography>
              </div>
            </Link>
          </Stack>
        </Stack>

        <Stack
          color={'white'}
          borderTop={'1px solid white'}
          py={5}
          spacing={5}
          direction={{ lg: 'row', xs: 'column-reverse' }}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography>© Raheel Yasir 2023</Typography>
          <Stack direction={'row'} spacing={5} alignItems={'center'}>
            <Link target='_blank' to={'https://linkedin.com/in/raheelekv'}>
              <img
                style={{
                  height: '35px',
                }}
                src={linkedinLogo}
              />
            </Link>
            <Link target='_blank' to={'https://www.facebook.com/HmdOxO/'}>
              <img
                style={{
                  height: '35px',
                }}
                src={facebook}
              />
            </Link>
            <Link target='_blank' to={'https://www.instagram.com/raheel_.7'}>
              <img
                style={{
                  height: '35px',
                }}
                src={instagram}
              />
            </Link>
            <Link target='_blank' to={'https://twitter.com/raheely6'}>
              <img
                style={{
                  height: '35px',
                }}
                src={twitter}
              />
            </Link>
            <Link
              target='_blank'
              to={'https://www.upwork.com/freelancers/~012adad40a2fc50c11'}
            >
              <img
                style={{
                  height: '35px',
                }}
                src={upworkLogo}
              />
            </Link>
          </Stack>
        </Stack>
      </StyledFooter>
    </Box>
  );
};

export default Footer;
