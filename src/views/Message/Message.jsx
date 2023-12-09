import { Box, Input, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import StyledButton from '../../components/shared/StyledButton';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Message = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once when the element enters the viewport
    threshold: 0.3,
    // Adjust as needed
  });

  return (
    <Box
      ref={ref}
      sx={{
        width: '100%',
        py: 10,
        overflow: 'hidden',
      }}
    >
      <Section>
        <Stack className={`box ${inView ? 'animate' : ''}`} spacing={10}>
          <Stack
            m={'auto'}
            textAlign={'center'}
            spacing={2}
            color={styles.pallette[2]}
          >
            <Typography fontWeight={800} fontSize={40}>
              Send me a message!
            </Typography>
            <Typography fontSize={20}>
              Got a question or proposal, or just want to say hello? Go ahead.
            </Typography>
          </Stack>
          <Stack
            direction={{ lg: 'row', xs: 'column' }}
            justifyItems={'center'}
            spacing={15}
          >
            <Box flex={1}>
              <Typography mb={3} fontSize={styles.fontSize.md}>
                Your Name
              </Typography>
              <Input
                fullWidth
                placeholder='Enter your name'
                sx={{
                  pb: 1,
                  fontSize: styles.fontSize.md,
                  '&:after': {
                    borderBottom: `2px solid ${styles.pallette[2]}`,
                  },
                }}
              />
            </Box>
            <Box flex={1}>
              <Typography mb={3} fontSize={styles.fontSize.md}>
                Email Address
              </Typography>
              <Input
                fullWidth
                placeholder='Enter your email address'
                sx={{
                  pb: 1,
                  fontSize: styles.fontSize.md,
                  '&:after': {
                    borderBottom: `2px solid ${styles.pallette[2]}`,
                  },
                }}
              />
            </Box>
          </Stack>
          <Box>
            <Typography mb={3} fontSize={styles.fontSize.md}>
              Your Message
            </Typography>
            <Input
              fullWidth
              multiline
              placeholder='Hi, I think we need a sales strategy for our products at Company X. How soon can you hop on to discuss this?'
              sx={{
                pb: 1,
                fontSize: styles.fontSize.md,
                '&:after': {
                  borderBottom: `2px solid ${styles.pallette[2]}`,
                },
              }}
            />
          </Box>
          <Stack alignItems={'center'}>
            <Link
              style={{
                textDecoration: 'none',
              }}
              target='_blank'
              to={'https://www.upwork.com/freelancers/~012adad40a2fc50c11'}
            >
              <StyledButton title='SHOOT' />
            </Link>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

export default Message;
