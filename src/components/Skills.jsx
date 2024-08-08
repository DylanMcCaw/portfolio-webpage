import React from 'react';
import { skills } from '../data/skills'
import { Title, Badge, Group, Text } from '@mantine/core';

function Skills() {
  return (
    <>
      <Title style={{ color: "#248277", paddingBottom: "15px", fontFamily: 'Space Mono' }} order={2}>
        Skills
      </Title>
      {Object.entries(skills).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: '20px' }}>
          <Text color="dimmed" weight={700} size="md" style={{ marginBottom: '10px' }}>
            {category}
          </Text>
          <Group spacing="xs" style={{ flexWrap: 'wrap' }}>
            {skills.map((skill, index) => (
              <Badge key={index} color="#248277" size="md" style={{ margin: '1px' }}>
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