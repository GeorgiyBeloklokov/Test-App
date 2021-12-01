import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

export default function ModalSendQuest(data) {

    return (
        <div>
            {/*<Button onClick={data.handleOpen}>Open modal</Button>*/}
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={data.open}
                onClose={data.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={data.open}>
                    <Box sx={style}  >
                        <Typography sx={{textAlign:"center"}} id="transition-modal-title" variant="h6" component="h2">
                            Our question saved !
                        </Typography>
                        <Typography  id="transition-modal-description" sx={{ mt: 2, textAlign:"center" }}>
                            Let's go to the Questions List page...
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
