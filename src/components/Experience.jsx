import React from 'react';
import { Title, Text, Grid, Badge, Anchor, Box } from '@mantine/core';

function Experience() {
  const experiences = [
    {
      period: 'Jul 2021 - Present',
      title: 'Software Engineer',
      company: 'Leidos',
      companyLink: 'https://www.leidos.com/',
      project: 'MET Police Cloud Integration Solution',
      description: 'Led the implementation of multiple iterfaces on a secure cloud-based integration for the Metropolitan Police Forces Command & Control system, managing end-to-end interface deployment and ensuring seamless integration with existing systems. I took lead of many stakeholder meetings and testing sessions, facilitated successful deployments and addressed stakeholder needs.',
      skills: ['.NET', 'C#', 'Azure Function Apps', 'Azure Service Bus', 'Azure Key Vault', 'Azure Application Insights', 'Azure SQL Server', 'Micro Service Architecture', 'REST Api', 'Postman', 'JSON/XML', 'NUnit', 'Moq', 'Terraform', 'Jenkins']
    },
    {
      period: 'Jul 2018 - Jul 2021',
      title: 'Software Engineer',
      company: 'Leidos',
      companyLink: 'https://www.leidos.com/',
      project: 'Scottish Government Case Handling System',
      description: 'As a Full Stack Developer, I helped design and implement a React.js case handling system with a .NET Microservice backend for the Scottish Government - which is now live and used by 1000s of users. Using SCRUM and Agile methods, we ensured timely delivery and adaptability while closely collaborating with the client to refine requirements and meet their needs.',
      skills: ['.NET', 'C#', 'NUnit', 'React', 'Redux', 'Jest', 'SQL Management Studio', 'MS Build', 'Team Foundation Server', 'Git' ]
    }
  ];

  return (
    <Box>
      <Title style={{ color: "#248277", paddingBottom: "30px", fontFamily:'Space Mono' }} order={2}>Experience</Title>
      {experiences.map((experience, index) => (
        <Grid key={index} gutter="md" style={{ marginBottom: '60px' }}>
          <Grid.Col span={4}>
            <Text 
              color="dimmed" 
              size="xs" 
              style={{ 
                maxWidth: '100%', 
                wordBreak: 'break-word'
              }}
            >
              {experience.period}
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text weight={700} size="sm">
              {experience.title} - {' '}
              <Anchor href={experience.companyLink} target="_blank" style={{ color: '#248277' }}>
                {experience.company}
              </Anchor>
            </Text>
            <Text size="xs" style={{ marginTop: '15px'}}>
              {experience.project}
            </Text>
            <Text color="dimmed" size="xs" style={{ marginTop: '20px' }}>
              {experience.description}
            </Text>
            <Box style={{ marginTop: '20px' }}>
              {experience.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex} 
                  color="#248277" 
                  size="sm" 
                  style={{ 
                    marginRight: '10px', 
                    marginBottom: '10px',
                    display: 'inline-block'
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </Box>
          </Grid.Col>
        </Grid>
      ))}
    </Box>
  );
}

export default Experience;