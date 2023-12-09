import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { resumeData } from './resumeData';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          my: '5em',
        }}
      >
        <Section>
          <Grid
            sx={{
              backgroundColor: styles.secondaryPallete[1],
              px: 5,
              py: 10,
            }}
            container
          >
            <Grid
              sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 5 }}
              item
              md={3}
              xs={12}
            >
              <Stack sx={{ wordBreak: 'break-word' }}>
                <Typography fontSize={styles.fontSize.md}>
                  Lahore, Pakistan
                </Typography>
                <Typography
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  raheel.queries@outlook.com
                </Typography>
                <Typography
                  sx={{
                    textDecoration: 'none',
                  }}
                  component={'a'}
                  target='_blank'
                  href='https://linkedin.com/in/raheelekv'
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  linkedin
                </Typography>
                <Typography
                  sx={{
                    textDecoration: 'none',
                  }}
                  component={'a'}
                  target='_blank'
                  href='https://www.instagram.com/raheel_.7'
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  instagram
                </Typography>

                <Typography
                  sx={{
                    textDecoration: 'none',
                  }}
                  component={'a'}
                  target='_blank'
                  href='https://www.facebook.com/HmdOxO/'
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  facebook
                </Typography>

                <Typography
                  sx={{
                    textDecoration: 'none',
                  }}
                  component={'a'}
                  target='_blank'
                  href='https://twitter.com/raheely6'
                  fontWeight={700}
                  color={styles.pallette[2]}
                  fontSize={styles.fontSize.md}
                >
                  twitter
                </Typography>
              </Stack>
              {resumeData.skills.map((skill) => (
                <Stack
                  key={skill}
                  component={'ul'}
                  fontSize={styles.fontSize.md}
                >
                  <Typography
                    fontWeight={700}
                    color={styles.pallette[2]}
                    fontSize={styles.fontSize.md}
                  >
                    {skill.label}:
                  </Typography>
                  {skill.points.map((point) => (
                    <Typography
                      component={'li'}
                      key={point}
                      color={styles.secondaryPallete[2]}
                      fontSize={styles.fontSize.md}
                    >
                      {point}
                    </Typography>
                  ))}
                </Stack>
              ))}
            </Grid>
            <Grid item md={9} xs={12}>
              <Stack>
                <Typography
                  color={styles.pallette[2]}
                  fontWeight={700}
                  fontSize={styles.fontSize.xlg}
                >
                  Raheel Yasir
                </Typography>
                <Typography fontSize={styles.fontSize.md}>
                  Amazon Operations Specialist
                </Typography>
                <Typography mt={3} fontSize={styles.fontSize.md}>
                  I specialize in harnessing the potential of Amazon and TikTok
                  platforms to drive brand visibility, elevate sales, and
                  establish a compelling market presence. With a proven track
                  record in optimizing Amazon accounts and curating engaging
                  TikTok Shop experiences, I am adept at crafting innovative
                  strategies that propel brands to new heights in the
                  ever-evolving landscape of e-commerce. My dedication to
                  leveraging these platforms as dynamic tools for brand growth
                  defines my commitment to delivering impactful results.
                </Typography>
                <Divider sx={{ my: 3 }} />
              </Stack>
              <Stack spacing={3}>
                <Stack spacing={1}>
                  <Typography
                    color={styles.pallette[2]}
                    fontSize={styles.fontSize.md}
                    fontWeight={700}
                  >
                    Experience
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  {resumeData.experience.map((exp) => (
                    <Experience key={exp.id} exp={exp} />
                  ))}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Section>
      </Box>
    </>
  );
};

const Experience = ({ exp }) => {
  const { company, title, duration, desc, tasks } = exp;
  return (
    <Stack spacing={2}>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={2}>
          <Typography
            fontSize={styles.fontSize.md}
            fontWeight={600}
            color={styles.pallette[2]}
          >
            {company}
          </Typography>
          <Typography
            color={styles.secondaryPallete[2]}
            fontSize={styles.fontSize.md}
          >
            {title}
          </Typography>
        </Stack>
        <Typography
          color={styles.secondaryPallete[2]}
          fontSize={styles.fontSize.md}
        >
          {duration}
        </Typography>
      </Stack>
      <Typography
        fontSize={styles.fontSize.md}
        color={styles.secondaryPallete[2]}
      >
        {desc}
      </Typography>
      <Stack component={'ul'} spacing={1}>
        {tasks.map((task) => (
          <Typography
            component={'li'}
            key={task.id}
            color={styles.secondaryPallete[2]}
            fontSize={styles.fontSize.md}
          >
            {task.desc}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Resume;
