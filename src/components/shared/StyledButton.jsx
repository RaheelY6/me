import { Box, Typography } from '@mui/material';
import { styles } from '../../style/styles';

const StyledButton = ({ title }) => {
  const color = styles.pallette[2];
  return (
    <Box
      sx={{
        width: '300px',
        p: 2,
        border: `1px solid ${color}`,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        '& p': {
          color: color,
          fontSize: '13px',
          fontWeight: 800,
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          transition: 'color 0.3s ease-in-out',
        },
        '&:hover p': {
          color: 'white',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
          width: 0,
          height: '100%',
          backgroundColor: color,
          transition: 'width 0.2s ease-in-out',
        },
        '&:hover::before': {
          width: '100%',
        },
      }}
    >
      <Typography fontSize={styles.fontSize.md}>{title}</Typography>
    </Box>
  );
};

export default StyledButton;
