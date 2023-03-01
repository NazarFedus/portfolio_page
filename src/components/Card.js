import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const imgStyle = {
  borderRadius: "10px",
  width: "100%",
};
const container__content = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "20px",
}

const Card = ({ title, description, imageSrc, url }) => {
  return (

    <VStack color="black" backgroundColor="white" cursor="pointer" borderRadius="xl" >
      <Image src={imageSrc} alt={title} style={imgStyle}/>;
      <VStack spacing={4} p={4} alignItems="flex-start">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h3" size="md">{title}</Heading>;
        </HStack>
        <Text color="#64748b" fontSize="lg">{description}</Text>
        <HStack spacing={2} alignItems="center">
          <Text style={{cursor: 'pointer'}}>
            <a href={url}>See more</a>
            <FontAwesomeIcon icon={faArrowRight} />
          </Text>
        </HStack>
      </VStack>



    </VStack>

  );
};

export default Card;
