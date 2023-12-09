import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Close } from '@mui/icons-material';
import { Box } from '@mui/material';
import { styles } from '../../style/styles';

const Modal = ({ item, open, handleClose }) => {
  return (
    <Dialog
      maxWidth='100%'
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      open={open}
    >
      <IconButton
        aria-label='close'
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <Close />
      </IconButton>
      <DialogContent>
        <Box
          component={'img'}
          sx={{
            width: '100%',
            objectPosition: 'center',
          }}
          src={item.src}
        />
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
