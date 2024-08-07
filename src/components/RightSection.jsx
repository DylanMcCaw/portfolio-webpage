import React from 'react';
import { Box, Divider } from '@mantine/core';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blogs from './Blogs';
import Skills from './Skills';

function RightSection({ sectionRefs }) {
  const sectionStyle = { marginBottom: '4rem' };
  const dividerStyle = { 
    borderTop: '3px dotted #248277',
    opacity: 0.25,
    margin: '2rem 0'
  };
  
  return (
    <Box>
      <div id="about" ref={(el) => (sectionRefs.current['about'] = el)} style={sectionStyle}>
        <About />
      </div>
      <Divider style={dividerStyle} />
      <div id="experience" ref={(el) => (sectionRefs.current['experience'] = el)}>
        <Experience />
      </div>
      <Divider style={dividerStyle} />
      <div id="projects" ref={(el) => (sectionRefs.current['projects'] = el)} style={sectionStyle}>
        <Projects />
      </div>
      <Divider style={dividerStyle} />
      <div id="skills" ref={(el) => (sectionRefs.current['skills'] = el)} style={sectionStyle}>
        <Skills />
      </div>
      <Divider style={dividerStyle} />
      <div id="blogs" ref={(el) => (sectionRefs.current['blogs'] = el)}>
        <Blogs />
      </div>
    </Box>
  );
}

export default RightSection;