import React from 'react';
import { experiences } from '../data/experiences'
import { Title, Text, Grid, Badge, Anchor, Box } from '@mantine/core';

function Experience() {
  return (
    <Box>
      <Title style={{ color: "#248277", paddingBottom: "30px", fontFamily:'Space Mono' }} order={2}>Experience</Title>
      {experiences.map((experience, index) => (
        <Grid key={index} gutter="md" style={{ marginBottom: '60px' }}>
          <Grid.Col span={4}>
            <Text 
              color="dimmed" 
              size="sm" 
              style={{ 
                maxWidth: '100%', 
                wordBreak: 'break-word'
              }}
            >
              {experience.period}
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text weight={700} size="md">
              {experience.title} - {' '}
              <Anchor href={experience.companyLink} target="_blank" style={{ color: '#248277' }}>
                {experience.company}
              </Anchor>
            </Text>
            <Text size="sm" style={{ marginTop: '15px'}}>
              {experience.project}
            </Text>
            <Text color="dimmed" size="sm" style={{ marginTop: '20px' }}>
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