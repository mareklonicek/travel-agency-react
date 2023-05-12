import { useState } from 'react';import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal=()=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = useState('');

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div>
      <Button onClick={handleOpen}>BOOK NOW</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{backgroundColor:"#ddd"}}>
          <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={3}>
            Choose a date of this tour
          </Typography>
          <div>
     
      <input
        type="date"
        id="date-input"
        value={date}
        onChange={handleDateChange}
      />
    </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal