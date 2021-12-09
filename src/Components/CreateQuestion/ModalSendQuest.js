import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function ModalSendQuest({children1,children2,children3,children4, ...props}) {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.open}>
                    <Box sx={style}  >
                        {children4}
                        <Typography sx={{textAlign:"center"}} style={children3}    id="transition-modal-title" variant="h6" component="h2">
                            {children1}
                        </Typography>
                        <Typography  id="transition-modal-description" style={children3} sx={{ mt: 2, textAlign:"center" }}>
                            {children2}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};
