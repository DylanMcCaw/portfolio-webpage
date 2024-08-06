import React from 'react';
import { Box } from '@mantine/core';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Blogs from './Blogs';
import Skills from './Skills';

function RightSection({ sectionRefs }) {
  const sectionStyle = { marginBottom: '4rem' };

  return (
    <Box>
      <div id="about" ref={(el) => (sectionRefs.current['about'] = el)} style={sectionStyle}>
        <About />
      </div>
      <div id="experience" ref={(el) => (sectionRefs.current['experience'] = el)} style={sectionStyle}>
        <Experience />
      </div>
      <div id="projects" ref={(el) => (sectionRefs.current['projects'] = el)} style={sectionStyle}>
        <Projects />
      </div>
      <div id="skills" ref={(el) => (sectionRefs.current['skills'] = el)} style={sectionStyle}>
        <Skills />
      </div>
      <div id="blogs" ref={(el) => (sectionRefs.current['blogs'] = el)} >
        <Blogs />
      </div>
    </Box>
  );
}

export default RightSection;