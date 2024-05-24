import React from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './components/Header';
import ProfileSummary from './components/ProfileSummary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <div id="profile-summary">
          <ProfileSummary />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="education">
          <Education />
        </div>
        <Contact />
      </Container>
    </React.Fragment>
  );
}

export default App;
