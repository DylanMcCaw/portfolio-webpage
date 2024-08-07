import React from 'react';
import { Title, Text, SimpleGrid, Badge, ActionIcon } from '@mantine/core';
import { ExternalLink } from 'tabler-icons-react';

function Projects() {
  const projects = [
    {
      title: 'moola',
      description: 'A web app for tracking personal finances',
      skills: ['.NET Core', 'ASP.NET', 'Entity Framework', 'Automapper', 'SQL Server Management Studio', 'REST API', 'React'],
      image: '/moola-home-screenshot.png',
      githubUrl: 'https://github.com/DylanMcCaw/moola'
    },
  ];

  return (
    <>
      <Title style={{ color: "#248277", paddingBottom: "30px", fontFamily: 'Space Mono' }} order={2}>
        Projects
      </Title>
      <SimpleGrid
        cols={1}
        spacing="lg"
        breakpoints={[
          { maxWidth: 'lg', cols: 1, spacing: 'sm' },
        ]}
      >
        {projects.map((project, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Title order={3} style={{ fontFamily: 'Space Mono' }}>{project.title}</Title>
              <ActionIcon 
                color="none" 
                variant="transparent" 
                size="lg" 
                className="icon-hover" 
                component="a" 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </ActionIcon>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                style={{ paddingTop:"5px", width: '200px', height: 'auto', borderRadius: '8px' }}
              />
              <div style={{ flex: 1 }}>
                <Text size="sm" style={{ marginBottom: '10px' }}>
                  {project.description}
                </Text>
                <div>
                  {project.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} color="#248277" size="sm" style={{ marginRight: '5px', marginBottom: '5px' }}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Projects;