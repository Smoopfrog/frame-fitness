import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Profile from '../pages/Profile'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog({ title, user, setUser, workout, setWorkout, progress, setProgress, percentProgress, setPercentProgress }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <a onClick={handleClickOpen} >
        {title}
      </a>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor: '#FF9700' }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Profile 
          workout={workout}
          setWorkout={setWorkout}
          user={user}
          percentProgress={percentProgress}
          setPercentProgress={setPercentProgress}
          progress={progress}
          setProgress={setProgress} 
        />
      </Dialog>
    </div>
  );
}
