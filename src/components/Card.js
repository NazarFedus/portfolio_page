import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const imgStyle = {
  borderRadius: "10px",
  width: "100%",
};

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#2a4756",
  borderRadius: "10px",
}
const container__content = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px",
}

const Card = ({ title, description, imageSrc }) => {
  return (
  <HStack style={container}>
    <VStack style={container__content}>
      <Image src={imageSrc} alt={title} style={imgStyle}/>;
      <Heading as="h3" size="md">{title}</Heading>;
      <Text>{description}</Text>;
      <Text style={{cursor: 'pointer'}}>See more <FontAwesomeIcon icon={faArrowRight} /></Text>
    </VStack>
  </HStack>
  );

  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
};

export default Card;
