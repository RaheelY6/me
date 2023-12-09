import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import advertising from 'src/assets/advertising.png';
import listing from 'src/assets/listing.png';
import trademark from 'src/assets/trademark.png';
import design from 'src/assets/design.png';

const Skills = () => {
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
        overflow: 'hidden',
      }}
    >
      <Section>
        <Stack
          className={`box ${inView ? 'animate' : ''}`}
          sx={{ py: 20, height: '100%' }}
          spacing={5}
          justifyContent={'center'}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <Box>
              <Box>
                <Stack
                  mb={2}
                  direction={'row'}
                  spacing={2}
                  alignItems={'center'}
                >
                  <Box
                    component={'img'}
                    src={listing}
                    sx={{
                      objectFit: 'contain',
                      height: '60px',
                    }}
                  />
                  <Typography
                    color={styles.pallette[2]}
                    fontWeight={900}
                    fontSize={styles.fontSize.lg}
                    gutterBottom
                  >
                    Listing Optimization
                  </Typography>
                </Stack>

                <Stack spacing={2}>
                  <Typography fontSize={styles.fontSize.md}>
                    Amazon Listing Optimization
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Amazon Brand Name Change
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Full Listing Optimization
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Competitor Research
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Search Terms Optimization
                  </Typography>
                </Stack>
              </Box>
              <Box mt={4}>
                <Stack
                  mb={2}
                  direction={'row'}
                  spacing={2}
                  alignItems={'center'}
                >
                  <Box
                    component={'img'}
                    src={advertising}
                    sx={{
                      objectFit: 'contain',
                      height: '60px',
                    }}
                  />
                  <Typography
                    color={styles.pallette[2]}
                    fontWeight={900}
                    fontSize={styles.fontSize.lg}
                    gutterBottom
                  >
                    Advertising
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  <Typography fontSize={styles.fontSize.md}>
                    Advertising Audit
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Ad Cost Reduction
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Advertising Management
                  </Typography>
                </Stack>
              </Box>
            </Box>
            <Box
              sx={{
                display: { lg: 'unset', xs: 'none' },
              }}
              flex={1.5}
            >
              <Stack
                margin={'auto'}
                width={'fit-content'}
                direction={'row'}
                spacing={0.5}
              >
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </Stack>
            </Box>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <Box
              sx={{
                display: { lg: 'unset', xs: 'none' },
              }}
              flex={1.5}
            >
              <Stack
                margin={'auto'}
                width={'fit-content'}
                direction={'row'}
                spacing={0.5}
              >
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </Stack>
            </Box>
            <Box>
              <Box>
                <Stack
                  mb={2}
                  direction={'row'}
                  spacing={2}
                  alignItems={'center'}
                >
                  <Box
                    component={'img'}
                    src={trademark}
                    sx={{
                      objectFit: 'contain',
                      height: '60px',
                    }}
                  />
                  <Typography
                    color={styles.pallette[2]}
                    fontWeight={900}
                    fontSize={styles.fontSize.lg}
                    gutterBottom
                  >
                    Trademark Registration
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  <Typography fontSize={styles.fontSize.md}>USA TM</Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    International TM
                  </Typography>
                </Stack>
              </Box>
              <Box mt={4}>
                <Stack
                  mb={2}
                  direction={'row'}
                  spacing={2}
                  alignItems={'center'}
                >
                  <Box
                    component={'img'}
                    src={design}
                    sx={{
                      objectFit: 'contain',
                      height: '100px',
                    }}
                  />
                  <Typography
                    color={styles.pallette[2]}
                    fontWeight={900}
                    fontSize={styles.fontSize.lg}
                    gutterBottom
                  >
                    Design
                  </Typography>
                </Stack>
                <Stack spacing={2}>
                  <Typography fontSize={styles.fontSize.md}>
                    Enhanced Brand Content A+
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Brand Story
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Brand Storefront
                  </Typography>
                  <Typography fontSize={styles.fontSize.md}>
                    Listing Images Design
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Stack>
      </Section>
    </Box>
  );
};

const Dot = () => {
  return (
    <Box
      sx={{
        height: '10px',
        width: '10px',
        opacity: 0.5,
        border: `1px solid ${styles.pallette[2]}`,
        borderRadius: '100%',
      }}
    />
  );
};

export default Skills;
