import { Box, Stack, Typography } from '@mui/material';
import Section from '../../components/shared/Section';
import { styles } from '../../style/styles';
import { useInView } from 'react-intersection-observer';
import amazon1 from 'src/assets/work/amazon/amazon1.jpeg';
import amazon2 from 'src/assets/work/amazon/amazon2.jpeg';
import amazon3 from 'src/assets/work/amazon/amazon3.jpeg';
import amazon4 from 'src/assets/work/amazon/amazon4.jpeg';
import tiktok1 from 'src/assets/work/tiktok/tiktok1.jpeg';
import tiktok2 from 'src/assets/work/tiktok/tiktok2.png';
import tiktok3 from 'src/assets/work/tiktok/tiktok3.png';
import tiktok4 from 'src/assets/work/tiktok/tiktok4.png';
import tiktok5 from 'src/assets/work/tiktok/tiktok5.png';
import tiktok6 from 'src/assets/work/tiktok/tiktok6.jpeg';
import walmart1 from 'src/assets/work/walmart/walmart1.jpeg';
import Modal from './Modal';
import { useState } from 'react';

const list = [
  {
    id: 0,
    src: amazon1,
    type: 'amazon',
  },
  {
    id: 1,
    src: amazon2,
    type: 'amazon',
  },
  {
    id: 2,
    src: amazon3,
    type: 'amazon',
  },
  {
    id: 3,
    src: amazon4,
    type: 'amazon',
  },
  {
    id: 4,
    src: tiktok1,
    type: 'tiktok',
  },
  {
    id: 5,
    src: tiktok2,
    type: 'tiktok',
  },
  {
    id: 6,
    src: tiktok3,
    type: 'tiktok',
  },
  {
    id: 7,
    src: tiktok4,
    type: 'tiktok',
  },
  {
    id: 8,
    src: tiktok5,
    type: 'tiktok',
  },
  {
    id: 9,
    src: tiktok6,
    type: 'tiktok',
  },
  {
    id: 10,
    src: walmart1,
    type: 'walmart',
  },
];

const Upwork = () => {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState('all');
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
          <Stack
            sx={{
              gap: 2,
              width: '100%',
              m: 'auto',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {['all', 'amazon', 'tiktok', 'walmart'].map((filterType) => (
              <Box
                key={filterType}
                sx={{
                  py: 1,
                  px: 4,
                  textAlign: 'center',
                  borderRadius: 20,
                  border: '1px solid grey',
                  cursor: 'pointer',
                  backgroundColor:
                    type === filterType ? 'black' : 'transparent',
                  color: type === filterType ? 'white' : 'black',
                  transition: 'background-color 0.3s ease-in-out',
                }}
                onClick={() => setType(filterType)}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </Box>
            ))}
          </Stack>
          <Stack
            mt={5}
            sx={{
              gap: 5,
              placeContent: 'center',
              flexFlow: 'wrap',
            }}
          >
            {list.map((item) => {
              if (type !== 'all' && type !== item.type) return null; // Fixed condition

              return (
                <Card
                  key={item.id}
                  src={item.src}
                  title={item.title}
                  onClick={() => {
                    setSelectedItem(item.id);
                    handleClickOpen();
                  }}
                />
              );
            })}
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
