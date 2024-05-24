import React, { useState } from 'react';
import { Paper, Typography, Box, Button, IconButton, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SectionTitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '10px',
  textAlign: 'center',
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    width: '50px',
    height: '3px',
    backgroundColor: '#000',
    bottom: '-5px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
});

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

const Contact = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [visibleContact, setVisibleContact] = useState('');

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

  return (
    <Paper id="contacts" style={{ padding: 20, backgroundColor: '#ffffff', color: '#000000', marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <SectionTitle variant="h6">Contacts</SectionTitle>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box display="flex" alignItems="center">
          <ContactButton
            variant="outlined"
            startIcon={<EmailIcon />}
            onClick={() => handleContactClick('email')}
          >
            Email
          </ContactButton>
          {visibleContact === 'email' && (
            <Box display="flex" alignItems="center" sx={{ marginLeft: '10px' }}>
              <Typography variant="body1" sx={{ marginRight: '10px' }}>shankardtu21@gmail.com</Typography>
              <IconButton onClick={() => handleCopy('shankardtu21@gmail.com')}>
                <ContentCopyIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <Box display="flex" alignItems="center" sx={{ marginLeft: '20px' }}>
          <ContactButton
            variant="outlined"
            startIcon={<PhoneIcon />}
            onClick={() => handleContactClick('phone')}
          >
            Call
          </ContactButton>
          {visibleContact === 'phone' && (
            <Box display="flex" alignItems="center" sx={{ marginLeft: '10px' }}>
              <Typography variant="body1" sx={{ marginRight: '10px' }}>+91 7291871525</Typography>
              <IconButton onClick={() => handleCopy('+917291871525')}>
                <ContentCopyIcon />
              </IconButton>
            </Box>
          )}
        </Box>
        <Box display="flex" alignItems="center" sx={{ marginLeft: '20px' }}>
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
              sx={{ marginLeft: '10px' }}
            >
              Visit LinkedIn
            </LinkedInButton>
          )}
        </Box>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <CustomAlert
          onClose={handleSnackbarClose}
          severity="success"
          icon={<CheckCircleIcon fontSize="inherit" />}
        >
          {snackbarMessage}
        </CustomAlert>
      </Snackbar>
    </Paper>
  );
};

export default Contact;
