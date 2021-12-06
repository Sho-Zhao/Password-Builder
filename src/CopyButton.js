import * as React from 'react';
import {Box, Typography, Modal, Button} from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
  
export default function CopyButton({msg}){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-6" id="copyButton">
            <CopyToClipboard text={msg}>
                <Button variant="contained" size="large" onClick={handleOpen}>Copy</Button>
            </CopyToClipboard>
            </div>
            <div className="col-sm-3">
            <Modal
    open={open}
     onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
            >
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Passwordはコピーされました！
     </Typography>
     <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          出来たPasswordをお使いください。
        </Typography>
    </Box>
    </Modal></div>            
        </div>
    );
}