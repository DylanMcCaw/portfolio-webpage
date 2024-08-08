import React from 'react';
import { education } from '../data/education';
import { Title, Text, Grid, Anchor, Box } from '@mantine/core';

function Education() {
  return (
    <Box>
      <Title style={{ color: "#248277", paddingBottom: "30px", fontFamily: 'Space Mono' }} order={2}>Education</Title>
      {education.map((edu, index) => (
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
              {edu.period}
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text weight={700} size="md">
              {edu.degree}
            </Text>
            <Text weight={700} size="md" color='dimmed'>
              <span style={{ fontStyle: 'italic' }}>{edu.honors}</span>
            </Text>
            <Anchor 
              href={edu.institutionLink} 
              target="_blank" 
              style={{ color: '#248277', display: 'block', marginTop: '5px' }}
            >
              {edu.institution}
            </Anchor>
          </Grid.Col>
        </Grid>
      ))}
    </Box>
  );
}

export default Education;
