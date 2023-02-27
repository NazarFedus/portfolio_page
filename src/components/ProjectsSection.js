import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Online Store",
    description:
      "Pet project to learn React by building something like online store",
    getImageSrc: () => require("../images/online shopping.jpeg"),
    url: "https://github.com/NazarFedus/app-react-"
  },
  {
    title: "React Calculator",
    description:
      "Pet project to learn React by building calculator with basic functionality",
    getImageSrc: () => require("../images/calculator.png"),
    url: "https://github.com/NazarFedus/React-Calculator"
  },
  {
    title: "Project in progress",
    description:
      "",
    getImageSrc: () => require("../images/thirdphoto.jpeg"),
    url: "#"
  },
  {
    title: "Project in progress",
    description:
      "",
    getImageSrc: () => require("../images/4photo.jpeg"),
    url: "#"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
