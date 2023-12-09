import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import StyledButton from '../../components/shared/StyledButton';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Work = () => {
  const color = styles.pallette[2];
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        p: { lg: 10, xs: 0 },
        overflow: 'hidden',
      }}
    >
      <Section>
        <Stack height={'100%'} direction={{ lg: 'row', sm: 'column' }}>
          <Box
            className={`left ${inView ? 'left-animate' : ''}`}
            sx={{
              flex: 1,
              py: { lg: 20, xs: 10 },
              borderRight: { lg: `1px solid ${color}`, xs: 'none' },
            }}
          >
            <Stack
              spacing={3}
              sx={{ width: { lg: '50%', xs: '100%' }, mb: 10 }}
            >
              <Typography
                lineHeight={1}
                color={color}
                fontSize={styles.fontSize.lg}
                fontWeight={900}
              >
                I build brands on amazon
              </Typography>
              <Typography fontSize={styles.fontSize.md}>
                PPC advertising, Amazon & Tiktok Full Service Management
              </Typography>
            </Stack>
            <Link to='/me/work' style={{ textDecoration: 'none' }}>
              <StyledButton title='SEE MY WORK' />
            </Link>
          </Box>
          <Box
            className={`right ${inView ? 'right-animate' : ''}`}
            sx={{
              flex: 1,
              py: { lg: 20, xs: 10 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { lg: 'end', xs: 'start' },
            }}
          >
            <Stack
              spacing={3}
              sx={{ width: { lg: '50%', xs: '100%' }, mb: 10 }}
            >
              <Typography
                lineHeight={1}
                color={color}
                fontSize={styles.fontSize.lg}
                fontWeight={900}
              >
                I work in teams too
              </Typography>
              <Typography fontSize={styles.fontSize.md}>
                Professional experience, collaboration and Skills
              </Typography>
            </Stack>
            <Link to='/me/resume' style={{ textDecoration: 'none' }}>
              <StyledButton title='SEE MY RESUME' />
            </Link>
          </Box>
        </Stack>
      </Section>
    </Box>
  );
};

export default Work;
