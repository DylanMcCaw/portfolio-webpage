import React from 'react';
import { Text } from '@mantine/core';
import { MapPin } from 'tabler-icons-react';

const highlightStyle = { color: '#248277', fontWeight:'bold' };

function About() {
  return (
    <>
      <Text mb="md">
        A skilled <span style={highlightStyle}>Full Stack Software Engineer</span> with
        <span style={highlightStyle}> 6+ years of professional experience</span> specializing in 
        <span style={highlightStyle}> .NET</span>, 
        <span style={highlightStyle}> Azure</span>, and 
        <span style={highlightStyle}> React</span>.
        <br /><br />
        My expertise lies in building scalable, high-performance applications that meet complex business needs. 
        <br /><br />
        I am passionate about clean code, cloud-native solutions, and continuously improving the developer experience. 
        <br /><br />
        With a strong foundation in both front-end and back-end development, I thrive on delivering end-to-end solutions that are robust, secure, and user-friendly.
      </Text>
      <br />
      <Text>
        <MapPin style={highlightStyle} size={15} /> Falkirk, Scotland, United Kingdom
      </Text>
    </>
  );
}

export default About;
