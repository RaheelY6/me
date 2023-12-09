import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import graphicItem2 from 'src/assets/graphic_item2.png';

const History = () => {
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
        bgcolor: styles.pallette[2],
        overflow: 'hidden',
      }}
    >
      <Section>
        <Stack
          className={`box ${inView ? 'animate' : ''}`}
          direction={{ lg: 'row', sm: 'column' }}
          sx={{
            position: 'relative',
            height: '100%',
            pt: 20,
            pb: { lg: 20, sm: 0 },
            justifyContent: 'space-between',
            gap: { xs: 10 },
          }}
        >
          <Stack width={{ lg: '30%', sm: '100%' }} color={'white'} spacing={1}>
            <Typography fontWeight={900} fontSize={styles.fontSize.lg}>
              Over the years,
            </Typography>
            <Typography fontSize={styles.fontSize.md}>
              Throughout my tenure as an Amazon Operations Consultant, I've had
              the privilege of collaborating with a diverse array of clients,
              both regionally and internationally. These experiences have not
              only honed my expertise but have also solidified my reputation for
              delivering excellence in the realm of Amazon listing optimization.
            </Typography>
            <Typography fontSize={styles.fontSize.md}>
              My global engagements have provided me with invaluable insights
              into the varied perspectives and distinct business needs of
              clients worldwide. This exposure has deepened my conviction in the
              transformative power of effective e-commerce strategies.
            </Typography>
            <Typography fontSize={styles.fontSize.md}>
              At the heart of my consultancy lies an unwavering passion for
              sculpting robust Amazon product listings. Whether it's
              orchestrating a seamless brand name change, executing a
              comprehensive listing optimization, or delving into meticulous
              competitor research, my commitment is to consistently surpass
              client expectations. I thrive on the challenge of optimizing
              performance metrics, creating intuitive interfaces, and ensuring
              that every project contributes to the success of the brands I work
              with.
            </Typography>
            <Typography fontSize={styles.fontSize.md}>
              I've undertaken projects ranging from refining marketing websites
              to developing intricate solutions and enterprise applications, all
              with a keen focus on delivering fast, elegant, and accessible user
              experiences. In the realm of Amazon services, I specialize in a
              spectrum of offerings such as Advertising Audit, Ad Cost
              Reduction, and meticulous Advertising Management.
            </Typography>
            <Typography fontSize={styles.fontSize.md}>
              From crafting compelling Enhanced Brand Content (A+) to weaving
              captivating brand stories, I approach each facet of Amazon
              operations with a commitment to excellence. Whether it's designing
              eye-catching listing images or curating a brand storefront that
              stands out, I bring a wealth of experience to ensure that every
              client's Amazon presence is not just optimized but positioned for
              success.
            </Typography>
          </Stack>
          <Box
            component={'img'}
            src={graphicItem2}
            sx={{
              objectFit: 'contain',
              height: { lg: '700px', md: '500px', sm: '300px', xs: '200px' },
              position: { lg: 'absolute', sm: 'unset' },
              bottom: 0,
              right: 0,
            }}
          />
        </Stack>
      </Section>
    </Box>
  );
};

export default History;
