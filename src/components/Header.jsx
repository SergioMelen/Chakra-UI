import React from "react";
import { Box, Button, Heading, Flex, Stack } from "@chakra-ui/react";
import imagen from "../assets/imagenes/banner.jpeg";

export default function Header() {
  return (
    <Box
      height="32vh"
      bg="grey"
      bgImage={imagen}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
    >
       <Flex
            direction='column'
            alignItems='center'
            justify='center'
            h='100%'
            bg='rgb(0 0 0 / 50%)'
            p={['0 10%', null, '0 20%']}
        >
        <Heading variant="banner">DOMINA EL TERRENO</Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing="40px"
          mt="30px"
          w={["100%", null, "auto"]}
        >
          <Button variant="outline" 
          size="lg"
          fontWeight='light'
                    color='white'
                    letterSpacing='1px'
          >
            VER DETALLES
          </Button>
          <Button variant="outline" 
          size="lg"
          fontWeight='light'
                    color='white'
                    letterSpacing='1px'
          >
            VER VIDEOS
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}