import React from 'react';
import { Paper, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const SummaryItem = styled(Box)({
  marginBottom: '10px',
});

const BoldText = styled('span')({
  fontWeight: 'bold',
});

const ProfileSummary = () => (
  <Paper id="profile-summary" style={{ padding: 20, backgroundColor: '#ffffff', color: '#000000', marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
    <SectionTitle variant="h6">Profile Summary</SectionTitle>
    <Divider style={{ marginBottom: '20px' }} />
    <ul>
      <SummaryItem component="li">
        <Typography>
          <BoldText>Data Lifecycle & Problem-Solving Expertise:</BoldText> Over three years of progressive experience in software engineering using Python, ReactJS, and Flask, with a strong emphasis on API development and system enhancements that significantly improve operational efficiency and user experience.
        </Typography>
      </SummaryItem>
      <SummaryItem component="li">
        <Typography>
          <BoldText>Cloud & Database Proficiency:</BoldText> Expert in integrating and optimizing AWS cloud services and database management, adept at constructing scalable and robust architectures for high-frequency, data-intensive applications like stock exchanges and real-time telemetry dashboards.
        </Typography>
      </SummaryItem>
      <SummaryItem component="li">
        <Typography>
          <BoldText>Innovative Software Solution Architect:</BoldText> Renowned for designing and implementing advanced software solutions that streamline processes and boost productivity, leveraging deep technical expertise in full-stack development and backend systems to deliver reliable and user-centric platforms.
        </Typography>
      </SummaryItem>
    </ul>
  </Paper>
);

export default ProfileSummary;
