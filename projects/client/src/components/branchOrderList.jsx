import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  useDisclosure,
  useColorMode,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  InputGroup,
  InputRightElement,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Center,
  Square,
  useColorModeValue,
} from "@chakra-ui/react";
import Axios from "axios";
import { Formik, Form, ErrorMessage, Field } from "formik";

export const BranchOrderList = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await Axios.get(
        `${process.env.REACT_APP_API_BASE_URL_ADMIN}/branchOrder`,
        {
          headers: {
            tokenBranch: `${localStorage.getItem("tokenBranch")}`,
          },
        },
      );
      // console.log("data", res.data);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Axios.get(url, {
  //   headers: {
  //     tokenBranch: `${localStorage.getItem("tokenBranch")}`,
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // });
  // .then(response => {
  //   // return  response;
  //   response.status(200).send(200);
  //   console.log("response", response);
  // })
  // .catch(error => {
  //   //return  error;
  // });

  return (
    <div>
      <Box
        mt={"50px"}
        className="body"
        bgColor="white"
        h={"600px"}
        align={"center"}
        justify={"center"}
      >
        <Box
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "white.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
          border={"2px"}
          borderColor={"gray.200"}
        >
          <Center
            mb={"20px"}
            mt={"20px"}
          >
            <Text
              lineHeight={1.1}
              fontSize={{ base: "2xl", sm: "3xl" }}
              textAlign="center"
            >
              Branch Order List
            </Text>
          </Center>

          <Tabs
            isFitted
            variant="enclosed"
          >
            <TabList mb="1em">
              <Tab>List of Order</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <TableContainer>
                  <Table
                    ml="10px"
                    mr="10px"
                    variant="simple"
                    colorScheme="teal"
                  >
                    <Thead>
                      <Tr>
                        <Th color={"#285430"}>Name</Th>
                        <Th color={"#285430"}>Product name</Th>
                        <Th color={"#285430"}>Stock</Th>
                        <Th color={"#285430"}>Quantity</Th>
                        <Th color={"#285430"}>Price</Th>
                        <Th color={"#285430"}>Total Price</Th>
                        <Th color={"#285430"}>status</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {data?.map((item, index) => {
                        return (
                          <Tr key={index}>
                            <Td color={"#285430"}>{item.name}</Td>
                            <Td color={"#285430"}>{item.product}</Td>
                            <Td color={"#285430"}>{item.stock}</Td>
                            <Td color={"#285430"}>{item.quantity}</Td>
                            <Td color={"#285430"}>{item.price}</Td>
                            <Td color={"#285430"}>{item.total_price}</Td>
                            <Td color={"#285430"}>{item.status_order}</Td>
                          </Tr>
                        );
                      })}
                    </Tbody>
                  </Table>
                </TableContainer>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </div>
  );
};
