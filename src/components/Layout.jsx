import React, { useState, useEffect, useRef } from 'react';
import { Container, Box, ActionIcon } from '@mantine/core';
import { Sun, Moon } from 'tabler-icons-react';
import { isMobile } from 'react-device-detect';
import LeftSection from './LeftSection';
import RightSection from './RightSection';


function Layout({ toggleColorScheme, colorScheme }) {
  const [activeSection, setActiveSection] = useState('about');
  const sectionRefs = useRef({});

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <Container
      size="xl"
      px={isMobile ? "xs" : "md"}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: isMobile ? '60px' : '20px',
      }}
    >
      <ActionIcon
        variant="outline"
        color={colorScheme === 'dark' ? 'white' : '#248277'}
        onClick={() => toggleColorScheme()}
        title="Toggle color scheme"
        style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}
      >
        {colorScheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
      </ActionIcon>
      {isMobile ? (
        <>
          <Box
            style={{
              width: '100%',
              marginBottom: '50px',
            }}
          >
            <LeftSection activeSection={activeSection} />
          </Box>
          <Box
            style={{
              width: '100%',
            }}
          >
            <RightSection sectionRefs={sectionRefs} />
          </Box>
        </>
      ) : (
        <Box
          style={{
            width: '100%',
            maxWidth: '1300px',
            display: 'flex',
            position: 'relative',
          }}
        >
          <Box
            style={{
              width: '30%',
              position: 'fixed',
              top: 200,
              left: 'calc(55% - 600px)',
              height: 'calc(100vh - 160px)',
              overflowY: 'auto',
            }}
          >
            <LeftSection activeSection={activeSection} />
          </Box>
          <Box
            style={{
              width: '100%',
              marginLeft: '50%',
              paddingLeft: 'calc(50% - 900px + 20%)',
              paddingTop: '180px',
              paddingBottom: '20px',
            }}
          >
            <RightSection sectionRefs={sectionRefs} />
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default Layout;