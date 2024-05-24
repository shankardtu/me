import React from 'react';
import { Paper, Typography, Box, Divider, Card, CardContent, Grid } from '@mui/material';
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

const ExperienceCard = styled(Card)({
  marginBottom: '20px',
  backgroundColor: '#f5f5f5',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
});

const ExperienceHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

const ProjectSummary = styled(Box)({
  marginBottom: '10px',
  fontWeight: 'bold',
});

const ProjectTitle = styled(Typography)({
  fontWeight: 'bold',
  display: 'inline',
});

const StyledList = styled('ul')({
  paddingLeft: '20px',
  margin: 0,
});

function Experience() {
  return (
    <Paper id="experience" style={{ padding: 20, backgroundColor: '#ffffff', color: '#000000', marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <SectionTitle variant="h6">Experience</SectionTitle>
      <Divider style={{ marginBottom: '20px' }} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <ExperienceCard>
            <CardContent>
              <ExperienceHeader>
                <Typography variant="h6">
                  Software Engineer - II, Cisco, Bengaluru, India
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  July 2022 - Present
                </Typography>
              </ExperienceHeader>
              <ProjectSummary>
                <ProjectTitle>Full Stack Developer (Development of an Advanced Telemetry Dashboard):</ProjectTitle> Engineered a comprehensive dashboard to monitor telemetry data from over 130 million endpoints of AnyConnect VPN.
              </ProjectSummary>
              <StyledList>
                <li>Designed and implemented the user interface using ReactJS, integrating Axios for real-time data fetching to populate interactive components such as tables, histograms, and pie charts.</li>
                <li>Authored RESTful APIs with Python-Flask for executing SQL queries on Athena tables, ensuring efficient data retrieval and seamless integration with the frontend.</li>
                <li>Constructed a scalable data flow architecture utilizing AWS services, including API Gateway for routing, Lambda for serverless operations, S3 for data storage, along with EventBridge, Glue for data orchestration, and CloudWatch for comprehensive monitoring and logging.</li>
              </StyledList>
              <ProjectSummary>
                <ProjectTitle>Cloud Engineer (Automation Framework for NVM Agent):</ProjectTitle> Led the design and development of an advanced test automation framework to enhance testing processes for the NVM Agent, a crucial component of AnyConnect VPN responsible for monitoring user browsing activities and detecting threats.
              </ProjectSummary>
              <StyledList>
                <li>Crafted and deployed an automation framework using Python and Pytest, which consists of 30 utilities and 13 test suites running over 150 test cases on each build trigger.</li>
                <li>Engineered integrations with numerous AWS services such as EC2, Elastic Beanstalk, S3, Glue, Lambda, Auto Scaling Groups, Load Balancers, Firehose, Kinesis, EventBridge, CodeCommit, Route 53, VPC, CloudWatch, Athena, and Datadog, enabling comprehensive data metrics verification and system-wide consistency.</li>
                <li>Configured Jenkins for continuous integration and deployment, setting up a system that allows for manual test job triggers as needed. Established an Allure server for aggregating test reports, providing detailed visual insights and analytics through pie charts and in-depth suite reviews.</li>
                <li>Leveraged Docker technology to streamline the deployment of the Allure reporting server, integrated with Jenkins to automate the attachment of reports to each job run, thereby enhancing the feedback loop for development and testing teams.</li>
                <li>Reduced the manual testing time frame dramatically from 7 days to just 5 hours, significantly speeding up the development lifecycle and increasing the release frequency.</li>
                <li>Implemented a versatile configuration system via config.ini, enabling the framework's operation across multiple environments, which simplified testing processes and improved test coverage.</li>
              </StyledList>
            </CardContent>
          </ExperienceCard>
        </Grid>
        <Grid item xs={12}>
          <ExperienceCard>
            <CardContent>
              <ExperienceHeader>
                <Typography variant="h6">
                  Software Developer, Publicis Sapient, Gurgaon, India
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  June 2021 - July 2022
                </Typography>
              </ExperienceHeader>
              <ProjectSummary>
                <ProjectTitle>Product Engineer (Hotel Booking Service Platform):</ProjectTitle> Spearheaded the frontend architecture and development of an advanced hotel booking platform aimed at improving operational efficiency and user experience.
              </ProjectSummary>
              <StyledList>
                <li>Designed and implemented a responsive, user-friendly interface, facilitating seamless navigation and enhancing aesthetic appeal. Integrated frontend components with backend systems using Axios to efficiently fetch data for the platform.</li>
                <li>Developed backend APIs with Spring Boot, including GetAvailableRooms, BookRoom, and UpdateRoomServices, to handle functionalities such as room bookings and service updates.</li>
                <li>Created a multifunctional Admin dashboard that displays real-time bookings, room availability, additional room services, and food offerings with pricing, enabling hotel administrators to effectively manage operations.</li>
                <li>Automated the generation of detailed invoices post-booking, improving operational efficiency and customer satisfaction also authored comprehensive unit tests to improve code coverage and ensure robust application performance.</li>
              </StyledList>
              <ProjectSummary>
                <ProjectTitle>Backend Developer (Stock Exchange Platform Development):</ProjectTitle> Tasked with developing robust APIs and enhancing code coverage for a high-performance stock exchange platform at Eaton Vance.
              </ProjectSummary>
              <StyledList>
                <li>Authored and maintained multiple backend APIs using Python-Flask, including GetStockData, UpdateStockPrices, ExecuteTrade, and ValidateUserTransactions, which facilitated critical trading operations and data management.</li>
                <li>Implemented comprehensive unit tests to bolster code coverage, ensuring the reliability and robustness of the platform.</li>
                <li>Integrated AWS services such as Lambda for serverless computing, API Gateway for routing and managing API traffic, and DynamoDB for scalable and quick data storage solutions, enhancing the platform's performance and scalability.</li>
                <li>Managed database schema and interactions, ensuring efficient data handling and integrity for transactional processes.</li>
              </StyledList>
            </CardContent>
          </ExperienceCard>
        </Grid>
        <Grid item xs={12}>
          <ExperienceCard>
            <CardContent>
              <ExperienceHeader>
                <Typography variant="h6">
                  Research Intern, Samsung Digital Academy, New Delhi
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  April 2020 - July 2020
                </Typography>
              </ExperienceHeader>
              <StyledList>
                <li>Contributed to a project focusing on scalable security solutions using C and OpenSSL.</li>
                <li>Conducted research on cryptographic algorithms and secure communication system designs.</li>
              </StyledList>
            </CardContent>
          </ExperienceCard>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Experience;
