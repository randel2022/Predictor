import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';
import { FcNext } from 'react-icons/fc';
import {
  Box,
  Flex,
  Center,
  HStack,
  Container,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Link,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  Form,
  Formik,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
} from '@chakra-ui/react';

export default function Footer() {
  return (
    <>
      <Flex
        flexDirection={{ base: 'column-reverse', md: 'column', lg: 'column' }}
        color={useColorModeValue('white')}
        bg={'#1A1A1A'}
        px={{ base: '5', md: '20', lg: '20' }}
        paddingBottom="7"
      >
        <Flex
          padding={5}
          justifyContent={'center'}
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        >
          <Link px={{ base: '0', md: '5', lg: '5' }}>Contact Us</Link>
          <Link px={{ base: '0', md: '5', lg: '5' }} href="/Privacy">
            Privacy Policy
          </Link>
          <Link px={{ base: '0', md: '5', lg: '5' }}>Terms of Use</Link>
          <Link px={{ base: '0', md: '5', lg: '5' }}>How it Works</Link>
          <Link px={{ base: '0', md: '5', lg: '5' }}>FAQs</Link>
          <Link px={{ base: '0', md: '5', lg: '5' }}>Blogs</Link>
        </Flex>

        <Flex
          paddingStart={{ base: '5', md: '20', lg: '20' }}
          paddingEnd={{ base: '5', md: '20', lg: '20' }}
          paddingBottom="10"
          paddingTop="18"
          borderBottom="1px solid"
          borderColor="gray"
          flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
        >
          <Box
            w={{ base: '100%', md: '50%', lg: '50%' }}
            paddingEnd={{ base: '0', md: '20', lg: '20' }}
          >
            <Flex flexDirection="column">
              <Heading as="h3" size="lg" paddingBottom="3">
                Disclaimers
              </Heading>
              <Text fontSize="sm">
                The Predictor website (“Site”) is for informational and
                educational purposes only. The Site displays existing markets
                deployed on the Polygon blockchain and is a graphical user
                interface for both visualizing data from on-chain activity and
                interacting with smart contracts directly from your own Polygon
                wallet. Adventure One QSS Inc. takes no custody of users' crypto
                assets and does not host any markets. None of the material on
                the Site is intended to be, nor does it constitute, a
                solicitation, recommendation or offer to buy or sell any
                security, commodity interest, derivative, financial product or
                instrument. Users are responsible for complying with all
                applicable laws and should conduct their own analysis and
                consult with professional advisors prior to entering into any
                smart contracts. Trading is not available to Restricted Persons,
                including US Persons. See our Terms of Use.
              </Text>
            </Flex>
          </Box>

          <Box w={{ base: '100%', md: '50%', lg: '50%' }}>
            <Box w="100%">
              <Heading as="h4" size="sm">
                Subcribe to our newsletter
              </Heading>
              <Box paddingTop="7" w="100%">
                <form position="relative">
                  <label className="label">
                    <input
                      className="email"
                      type="text"
                      placeholder="Enter Email Address here..."
                    />
                  </label>
                  <input
                    className="btn-submit"
                    type="submit"
                    value="Subscribe"
                  />
                  {/* <FcNext position="absolute" marginTop="-10" /> */}
                </form>
              </Box>
            </Box>

            <Box paddingTop="8">
              <Heading as="h4" size="sm" paddingBottom="3">
                Bet on your beliefs
              </Heading>
              <Text fontSize="sm">
                Polymarket is a decentralized information markets platform,
                harnessing the power of free markets to demystify the real world
                events that matter most to you.
              </Text>
            </Box>
          </Box>
        </Flex>
        <Center paddingTop="7">© 2022 Predictor. All rights reserved.</Center>
      </Flex>
    </>
  );
}
