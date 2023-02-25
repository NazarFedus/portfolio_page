import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const sections = [
  {
    name: "Projects",
    anchor: "projects",
  },
  {
    name: "Contact Me",
    anchor: "contactme",
  }
]

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: nazarfedus5@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/NazarFedus",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/nazarii-fedus-b05a30232/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "#",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={1}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={{display: "flex", gap: "15px"}}>
            {socials.map((social) => <a href={social.url} key={socials.indexOf(social)}><FontAwesomeIcon icon={social.icon}/></a>)}
          </nav>
          <nav>
            <HStack spacing={8}>
              {sections.map((section) => <button  key = {section.anchor} id={section.anchor} onClick={handleClick(section.anchor)}>{section.name}</button>)}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
