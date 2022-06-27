import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Blogs.css';
import { useWallet } from '../../helper/WalletContext';
import Background from '../../components/assets/Blog.png';
import PageLoading from '../../helper/PageLoading';
import {
  Box,
  Container,
  Text,
  Flex,
  Divider,
  Center,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Image,
  Button,
  Select,
  bgImage,
} from '@chakra-ui/react';

const How = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgImage={Background}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      px="20"
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'space-between'}
          height="60vh"
          flexDirection="column"
          w="100%"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            size="4xl"
          >
            Terms of Services
          </Heading>
          <Flex
            alignItems={'center'}
            justifyContent="center"
            flexDirection="column"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
              aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci
              porta dapibus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
              congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec sollicitudin molestie
              malesuada. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec rutrum congue leo eget
              malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec rutrum congue leo eget
              malesuada. Lorem ipsum dolor sit amet, consectetur
            </p>
            <br></br>

            <p>
              adipiscing elit. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec sollicitudin molestie
              malesuada. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus. Pellentesque in ipsum id orci porta dapibus. Vivamus
              suscipit tortor eget felis porttitor volutpat. Pellentesque in
              ipsum id orci porta dapibus. Quisque velit nisi, pretium ut
              lacinia in, elementum id enim. Donec rutrum congue leo eget
              malesuada. Lorem ipsum dolor sit amet. Pellentesque in ipsum id
              orci porta dapibus. Vivamus suscipit tortor eget felis porttitor
              volutpat. Pellentesque in ipsum id orci porta dapibus. Quisque
              velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum
              congue leo eget malesuada. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur non nulla sit amet nisl tempus
              convallis quis ac lectus. Vestibulum ac diam sit amet quam
              vehicula elementum sed sit amet dui. Donec sollicitudin molestie
              malesuada. Curabitur non nulla sit amet nisl tempus convallis quis
              ac lectus. din molestie malesuada. Curabitur non nulla sit amet
              nisl tempus convallis quis ac lectus.
            </p>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default How;
