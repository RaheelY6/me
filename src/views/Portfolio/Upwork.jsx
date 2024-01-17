import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import sale_1 from 'src/assets/work/sale_1.jpeg';
import sale_3 from 'src/assets/work/sale_3.jpeg';
import sale_4 from 'src/assets/work/sale_4.jpeg';
import sale_5 from 'src/assets/work/sale_5.jpeg';
import sale_6 from 'src/assets/work/sale_6.jpeg';
import tiktok from 'src/assets/work/tiktok.jpeg';
import Modal from './Modal';
import { useState } from 'react';

const list = [
  {
    id: 0,
    src: sale_1,
  },
  {
    id: 1,
    src: sale_3,
  },
  {
    id: 2,
    src: sale_4,
  },
  {
    id: 3,
    src: sale_5,
  },
  {
    id: 4,
    src: sale_6,
  },
  {
    id: 5,
    src: tiktok,
  },
];

const Upwork = () => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState(0);

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
        height: '100%',
        overflow: 'hidden',
        py: { lg: 15, xs: 5 },
      }}
    >
      <Section>
        <Box className={`box ${inView ? 'animate' : ''}`}>
          <Typography my={5} fontSize={styles.fontSize.md}>
            Through meticulous PPC (Pay-Per-Click) campaigns, I've orchestrated
            a sales surge like never before. By targeting precise keywords,
            optimizing ad placements, and refining targeting parameters, I've
            maximized visibility and conversion rates. This deliberate approach
            has led to exceptional results, driving sales skyward while ensuring
            a prominent position in the competitive Amazon marketplace. Curious
            about the secret behind this success? Let's chat and unlock the
            power of PPC for your Amazon journey!
          </Typography>
          <Stack
            mt={5}
            sx={{
              gap: 5,
              placeContent: 'center',
              flexFlow: 'wrap',
            }}
          >
            {list.map((item) => (
              <Card
                key={item.id}
                src={item.src}
                title={item.title}
                onClick={() => {
                  setSelectedItem(item.id);
                  handleClickOpen();
                }}
              />
            ))}
          </Stack>
        </Box>
      </Section>
      <Modal
        item={list[selectedItem]}
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
      />
    </Box>
  );
};

const Card = ({ onClick, src, title }) => {
  return (
    <Box
      sx={{
        overflow: 'hidden',
        boxShadow: '0px 10px 43px -40px',
        height: '300px',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <Box
        component={'img'}
        sx={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'top',
        }}
        src={src}
      />
    </Box>
  );
};

export default Upwork;
