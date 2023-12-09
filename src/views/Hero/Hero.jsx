import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import profileImg from 'src/assets/profile.png';
import heroGraphic2 from 'src/assets/heroGraphic2.png';
import element2 from 'src/assets/element2.png';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      ref={ref}
      className='section'
      sx={{
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: styles.pallette[2],
      }}
    >
      <Box
        sx={{
          backgroundColor: styles.secondaryPallete[0],
          height: '100%',
          width: { lg: '25%', xs: '100%' },
          position: 'absolute',
          right: 0,
          top: 0,
        }}
      />
      <Section>
        <Stack
          sx={{
            position: 'relative',
            flexDirection: { lg: 'row', sm: 'column' },
            py: { lg: 20, xs: 10 },
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box
            className={`box ${inView ? 'animate' : ''}`}
            component={'img'}
            sx={{
              position: 'absolute',
              height: '30em',
              right: '0em',
            }}
            src={heroGraphic2}
          />
          <Box
            className={`hero-right ${inView ? 'hero-right-animate' : ''}`}
            component={'img'}
            sx={{
              position: 'absolute',
              bottom: '14em',
              height: '20em',
              transform: 'rotate(90deg)',
            }}
            src={element2}
          />
          <Box
            className={`hero-left ${inView ? 'hero-left-animate' : ''}`}
            component={'img'}
            sx={{
              position: 'absolute',
              bottom: '5em',
              height: '15em',
              transform: 'rotate(-90deg)',
            }}
            src={element2}
          />

          <Stack
            className={`box ${inView ? 'animate' : ''}`}
            width={{ lg: '50%', xs: '100%' }}
          >
            <Typography
              color={'white'}
              fontWeight={900}
              fontSize={styles.fontSize.lg}
            >
              Your Amazon Guy.
            </Typography>
            <Typography color={'white'} fontSize={{ lg: 20, xs: 10 }}>
              Elevating businesses on Amazon through smart strategies and
              efficient operations for sustained growth.
            </Typography>
          </Stack>
          <Box
            className={`box ${inView ? 'animate' : ''}`}
            sx={{
              height: { lg: '400px', xs: '200px' },
              width: { lg: '400px', xs: '200px' },
              border: '1px solid white',
              zIndex: 1,
              mt: { xs: 10 },
            }}
          >
            <Box
              component={'img'}
              height={'100%'}
              width={'100%'}
              src={profileImg}
              sx={{
                m: '-20px',
                objectFit: 'contain',
                filter: 'grayscale(1)',
              }}
            />
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Hero;
