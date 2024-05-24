import React from 'react';
import { Paper, Typography, Box, Divider, Grid } from '@mui/material';
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

const SkillLabel = styled(Typography)({
  fontWeight: 'bold',
  textAlign: 'right',
  paddingRight: '10px'
});

const SkillValue = styled(Typography)({
  textAlign: 'left',
});

function Skills() {
  return (
    <Paper id="skills" style={{ padding: 20, backgroundColor: '#ffffff', color: '#000000', marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <SectionTitle variant="h6">Skills</SectionTitle>
      <Divider style={{ marginBottom: '20px' }} />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SkillLabel>Languages:</SkillLabel>
        </Grid>
        <Grid item xs={8}>
          <SkillValue>C++, Python, GoLang, Java, JavaScript, React, Angular</SkillValue>
        </Grid>
        <Grid item xs={4}>
          <SkillLabel>Frameworks:</SkillLabel>
        </Grid>
        <Grid item xs={8}>
          <SkillValue>Spring Boot, Flask</SkillValue>
        </Grid>
        <Grid item xs={4}>
          <SkillLabel>Databases:</SkillLabel>
        </Grid>
        <Grid item xs={8}>
          <SkillValue>SQL, Relational Databases, DynamoDB</SkillValue>
        </Grid>
        <Grid item xs={4}>
          <SkillLabel>Cloud & DevOps:</SkillLabel>
        </Grid>
        <Grid item xs={8}>
          <SkillValue>AWS Services, Docker, Jenkins, Terraform, CI/CD pipelines</SkillValue>
        </Grid>
        <Grid item xs={4}>
          <SkillLabel>Tools & IDEs:</SkillLabel>
        </Grid>
        <Grid item xs={8}>
          <SkillValue>JWT, Docker, Git, VS Code, Eclipse, JIRA, Datadog</SkillValue>
        </Grid>
        <Grid item xs={4}>
          <SkillLabel>Soft Skills:</SkillLabel>
        </Grid>
        <Grid item xs={8}>
          <SkillValue>Effective communication, teamwork, strategic problem-solving</SkillValue>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Skills;
