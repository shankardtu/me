import React from 'react';
import { Paper, Typography, Box, Divider, Card, CardContent, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import BusinessIcon from '@mui/icons-material/Business';

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

const EducationCard = styled(Card)({
  marginBottom: '20px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
});

const DegreeBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

function Education() {
  return (
    <Paper id="education" style={{ padding: 20, backgroundColor: '#ffffff', color: '#000000', marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <SectionTitle variant="h6">Education</SectionTitle>
      <Divider style={{ marginBottom: '20px' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <EducationCard>
            <CardContent>
              <DegreeBox>
                <Typography variant="h6">
                  <SchoolIcon sx={{ marginRight: '5px' }} /> Bachelor of Technology, Information Technology
                </Typography>
                <Box display="flex" alignItems="center">
                  <CalendarTodayIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body1">2016 - 2020</Typography>
                </Box>
              </DegreeBox>
              <DegreeBox>
                <Box display="flex" alignItems="center">
                  <BusinessIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body1">Delhi Technological University (Formerly Delhi College of Engineering)</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body1">New Delhi, India</Typography>
                </Box>
              </DegreeBox>
            </CardContent>
          </EducationCard>
        </Grid>
        <Grid item xs={12}>
          <EducationCard>
            <CardContent>
              <DegreeBox>
                <Typography variant="h6">
                  <SchoolIcon sx={{ marginRight: '5px' }} /> High School
                </Typography>
                <Box display="flex" alignItems="center">
                  <CalendarTodayIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body1">2014 - 2016</Typography>
                </Box>
              </DegreeBox>
              <DegreeBox>
                <Box display="flex" alignItems="center">
                  <BusinessIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body1">Jawahar Navodaya Vidyalaya</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon sx={{ marginRight: '5px' }} />
                  <Typography variant="body1">Gopalganj, Bihar, India</Typography>
                </Box>
              </DegreeBox>
            </CardContent>
          </EducationCard>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Education;
