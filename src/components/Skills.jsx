import React from 'react';
import { Title, Badge, Group, Text } from '@mantine/core';

function Skills() {
  const skillCategories = {
    Languages: [
      'C#',
      'JavaScript',
      'Java',
      'Python',
      'HTML',
      'CSS',
      'SQL',
    ],
    Technologies: [
      '.NET',
      'ASP.NET',
      'React',
      'REST API',
      'Azure Cloud Technologies',
      'Git',
      'Jenkins',
      'Jira',
      'BitBucket',
      'Confluence',
      'Terraform',
      '...'
    ],
    Principles: [
      'Agile Methodology',
      'Object-Oriented Programming',
      'SOLID Principles',
      'CI/CD',
      'Design Patterns',
      '...'
    ]
  };

  return (
    <>
      <Title style={{ color: "#248277", paddingBottom: "15px", fontFamily: 'Space Mono' }} order={2}>
        Skills
      </Title>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <Text color="dimmed" weight={700} size="md" style={{ marginBottom: '10px' }}>
            {category}
          </Text>
          <Group spacing="xs" style={{ flexWrap: 'wrap' }}>
            {skills.map((skill, index) => (
              <Badge key={index} color="#248277" size="md" style={{ margin: '5px' }}>
                {skill}
              </Badge>
            ))}
          </Group>
        </div>
      ))}
    </>
  );
}

export default Skills;