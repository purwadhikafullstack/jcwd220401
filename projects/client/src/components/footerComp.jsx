import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Image } from "@chakra-ui/react";

const Logo = props => {
  return (
    <Image
      src={logo}
      w="90px"
      h="70px"
      margin="auto"
    />
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        mt="8"
        position={"relative"}
        height="256px"
        width="auto"
        justifyContent="center"
        borderTopRadius={15}
        borderBottomRadius={15}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          // direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Logo />
          <Text>© 2022 Kompeni Mart. All rights reserved</Text>
          <Stack
            direction={"row"}
            spacing={6}
          >
            <>
              <SocialButton
                label={"Twitter"}
                href={"#"}
              >
                <FaTwitter />
              </SocialButton>
              <SocialButton
                label={"YouTube"}
                href={"#"}
              >
                <FaYoutube />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"#"}
              >
                <FaInstagram />
              </SocialButton>
            </>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
