import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Snackbar, Alert, AlertTitle } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ContactButton = styled(Button)({
  margin: '0 10px',
  textTransform: 'none',
  color: '#000',
  borderColor: '#000',
  transition: 'opacity 0.3s',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    borderColor: '#000',
  },
});

const LinkedInButton = styled(Button)({
  marginLeft: '10px',
  textTransform: 'none',
  backgroundColor: '#000',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#333',
    borderColor: '#000',
  },
  '&:focus': {
    backgroundColor: '#000',
    color: '#fff',
  },
  '&:active': {
    backgroundColor: '#000',
    color: '#fff',
  },
});

const CustomAlert = styled(Alert)({
  backgroundColor: '#000',
  color: '#fff',
  width: '100%',
  '& .MuiAlert-icon': {
    color: '#fff', // Change the color of the icon to white
  },
});

const HeaderSection = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [visibleContact, setVisibleContact] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleContactClick = (contactType) => {
    setVisibleContact(visibleContact === contactType ? '' : contactType);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage('Copied to clipboard');
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust offset for the sticky header
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            Lokesh Shankar
          </Typography>
          {showContacts ? (
            <Box display="flex" alignItems="center">
              <ContactButton onClick={() => setShowContacts(false)}>Back</ContactButton>
              <ContactButton
                variant="outlined"
                startIcon={<EmailIcon />}
                onClick={() => handleContactClick('email')}
              >
                Email
              </ContactButton>
              {visibleContact === 'email' && (
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" sx={{ margin: '0 10px' }}>shankardtu21@gmail.com</Typography>
                  <IconButton onClick={() => handleCopy('shankardtu21@gmail.com')}>
                    <ContentCopyIcon />
                  </IconButton>
                </Box>
              )}
              <ContactButton
                variant="outlined"
                startIcon={<PhoneIcon />}
                onClick={() => handleContactClick('phone')}
              >
                Call
              </ContactButton>
              {visibleContact === 'phone' && (
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" sx={{ margin: '0 10px' }}>+91 7291871525</Typography>
                  <IconButton onClick={() => handleCopy('+917291871525')}>
                    <ContentCopyIcon />
                  </IconButton>
                </Box>
              )}
              <ContactButton
                variant="outlined"
                startIcon={<LinkedInIcon />}
                onClick={() => handleContactClick('linkedin')}
              >
                LinkedIn
              </ContactButton>
              {visibleContact === 'linkedin' && (
                <LinkedInButton
                  variant="contained"
                  href="https://www.linkedin.com/in/shankardtu21"
                  target="_blank"
                >
                  Visit LinkedIn
                </LinkedInButton>
              )}
            </Box>
          ) : (
            <Box display="flex" alignItems="center">
              <Button color="inherit" onClick={() => handleNavigation('profile-summary')}>Profile</Button>
              <Button color="inherit" onClick={() => handleNavigation('experience')}>Experience</Button>
              <Button color="inherit" onClick={() => handleNavigation('education')}>Education</Button>
              <Button color="inherit" onClick={() => setShowContacts(true)}>Contacts</Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ mt: 10 }} // Adjust margin top to move the Snackbar below the header
      >
        <CustomAlert
          onClose={handleSnackbarClose}
          severity="success"
          icon={<CheckCircleIcon fontSize="inherit" />}
        >
          {snackbarMessage}
        </CustomAlert>
      </Snackbar>
    </>
  );
};

export default HeaderSection;
