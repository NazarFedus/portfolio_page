import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Nazarii!";
const bio1 = "A Frontend Developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" src={require("../images/avatar.jpg")} />
      <Heading as="h4" size="md">
        {greeting}
      </Heading>
      <Heading as="h1" size="2xl">
        {bio1}
      </Heading>
      <Heading as="h1" size="2xl">
        {bio2}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
