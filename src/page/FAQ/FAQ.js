import React, { useEffect, useState } from 'react';
import PageLoading from '../../helper/PageLoading';
// import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './FAQ.css';
import { useWallet } from '../../helper/WalletContext';
import privacyBG from '../../components/assets/FAQ-Background.png';
import {
  Box,
  Container,
  Text,
  Flex,
  Divider,
  Center,
  useColorModeValue,
  Heading,
  Image,
  Button,
  Select,
  bgImage,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const FAQ = () => {
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
      height="auto"
      bgImage={privacyBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      px={{ base: '10', md: '20', lg: '20' }}
      py="40"
    >
      {loading ? (
        <PageLoading />
      ) : (
        <Flex
          justifyContent={'space-between'}
          height="auto"
          flexDirection="column"
          w="100%"
          flexWrap="nowrap"
          gap="10"
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            size="4xl"
            textAlign="left"
          >
            FAQs
          </Heading>
          <Flex
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            display="flex"
            w="100%"
            gap="10"
          >
            <Box w="100%">
              <Heading
                className="mainfont"
                as="h3"
                fontWeight="semibold"
                size="3xl"
                textAlign="center"
              >
                Services
              </Heading>
              <Accordion w="100%" defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>

            <Box w="100%">
              <Heading
                className="mainfont"
                as="h3"
                fontWeight="semibold"
                size="3xl"
                textAlign="center"
              >
                Services
              </Heading>
              <Accordion w="100%" defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Section 2 title
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Flex>
        </Flex>
      )}
    </Container>
  );
};

export default FAQ;
