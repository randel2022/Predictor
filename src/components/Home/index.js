import React from 'react';
import './index.css';
import {
  Box,
  Container,
  Text,
  Center,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Heading,
  Image,
  Select,
  Link,
  Flex,
  Button,
  bgImage,
} from '@chakra-ui/react';
import PredictionContext from '../../helper/PredictionContext';
import { useNavigate } from 'react-router-dom';
import phoneImg from '../assets/phone.png';

import { AiFillCheckCircle } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi';
import HeroBg from '../assets/Herobg.png';

export default function Home() {
  const { predictionsArray } = React.useContext(PredictionContext);
  const history = useNavigate();
  const colors = {
    bg: useColorModeValue('blue.100', 'blue.900'),
    text: useColorModeValue('blue', 'white'),
  };
  const inProgressArray = predictionsArray.filter(function (prediction) {
    return prediction.value.predictionStatus == 'Prediction In-Progress';
  });
  const completedArray = predictionsArray.filter(function (prediction) {
    return prediction.value.predictionStatus != 'Prediction In-Progress';
  });

  return (
    <Container
      width="auto"
      maxWidth="100vw"
      //   bgGradient="linear(to-l, #1B3318 20%, #0C4A02 20%)"
      // bgGradient="linear(to-r, #202b2f, #121b19)"
      //   bgColor="#202b2f"
      className="main-container"
      height="auto"
      maxHeight="1000vh"
      // paddingTop="10vh"
      paddingBottom="15vh"
      paddingStart="0"
      paddingEnd="0"
    >
      <Box
        display="flex"
        bgGradient="linear(to-r, #202433, #181c27)"
        width="100%"
        paddingStart={{ base: '5vh', md: '25vh', lg: '25vh' }}
        paddingEnd={{ base: '5vh', md: '25vh', lg: '25vh' }}
        paddingTop="10vh"
        bgImage={HeroBg}
        bgPosition="center"
        bgSize="cover"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <Box
          w={{ base: 'auto', md: '55%', lg: '55%' }}
          display="flex"
          flexDirection={{ base: 'column', md: 'column', lg: 'column' }}
        >
          <Heading
            className="mainfont"
            as="h2"
            fontWeight="semibold"
            size="4xl"
          >
            Predict your Finances
          </Heading>
          <Text color="gray" marginTop="7">
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            width="70%"
            marginTop="7"
          >
            <Box display="flex" alignItems="center">
              <AiFillCheckCircle color="#AEF8A2" fontSize="21" />
              &nbsp;&nbsp;<p>100% Guarantee</p>
            </Box>
            <Box display="flex" alignItems="center">
              <AiFillCheckCircle color="#AEF8A2" fontSize="21" />
              &nbsp;&nbsp;<p>Safe Payment</p>
            </Box>
            <Box display="flex" alignItems="center">
              <AiFillCheckCircle color="#AEF8A2" fontSize="21" />
              &nbsp;&nbsp;<p>24/7 Support</p>
            </Box>
          </Box>
          <Box
            marginTop="10"
            display="flex"
            flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
          >
            <Link
              py="3"
              px="10"
              bgColor="#22EF01"
              color="#343538"
              borderRadius="15"
            >
              Get Started
            </Link>
            <Box display="flex" alignItems="center">
              <Link py="3" paddingStart="10" paddingEnd="3">
                Learn more
              </Link>
              <FaLongArrowAltRight fontSize="20" paddingTop="20" />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="70%"
            marginTop="10"
          >
            <Box display="flex" flexDirection="column" alignItems="start">
              <Heading as="h3" fontWeight="semibold" size="xl" color="#AEF8A2">
                200+
              </Heading>
              <p>Markets</p>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Heading as="h3" fontWeight="semibold" size="xl" color="#AEF8A2">
                9000+
              </Heading>
              <p>Active Users</p>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="start">
              <Heading as="h3" fontWeight="semibold" size="xl" color="#AEF8A2">
                10M+
              </Heading>
              <p>Transactions</p>
            </Box>
          </Box>
        </Box>
        <Box w="45%">
          <Image
            boxSize={{ base: '400px', md: '700px', lg: '700px' }}
            objectFit="cover"
            marginTop={{ base: '0px', md: '-100px', lg: '-100px' }}
            src={phoneImg}
          />
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        flexWrap="wrap"
        paddingStart="25vh"
        paddingEnd="26vh"
        paddingTop="6vh"
      >
        <Heading as="h3" fontWeight="semibold" margin="0px" size="lg">
          FEATURED MARKETS
        </Heading>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          marginTop="5vh"
        >
          {inProgressArray.map((pred, i) => {
            return (
              <Box
                key={i}
                onClick={() => history('/predict/' + pred.id)}
                display="flex"
                w="29%"
                borderRadius="10px"
                flexDirection="row"
                padding="20px"
                backgroundColor="#12231b"
              >
                <Box display="flex" flexDirection="row" flexWrap="wrap">
                  {/* <Text color={'white'}>
                    {' '}
                    <b>ID </b>: {pred.value.predictionRef}
                  </Text> */}
                  <Box w="20%">
                    <Image
                      height="50px"
                      width="50px"
                      objectFit="cover"
                      borderRadius="50%"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Box>

                  <Box w="80%">
                    <Text
                      color={'#AEF8A2'}
                      fontSize="lg"
                      fontWeight={'bold'}
                      paddingStart="2"
                    >
                      {' '}
                      {pred.value.predictionName}{' '}
                    </Text>
                  </Box>

                  {/* <Text color={'white'}>
                    <b>Status </b>: {pred.value.predictionStatus}
                  </Text> */}
                </Box>
              </Box>
            );
          })}
          {inProgressArray.map((pred, i) => {
            return (
              <Box
                key={i}
                onClick={() => history('/predict/' + pred.id)}
                display="flex"
                w="29%"
                borderRadius="10px"
                flexDirection="row"
                padding="20px"
                backgroundColor="#12231b"
              >
                <Box display="flex" flexDirection="row" flexWrap="wrap">
                  {/* <Text color={'white'}>
                    {' '}
                    <b>ID </b>: {pred.value.predictionRef}
                  </Text> */}
                  <Box w="20%">
                    <Image
                      height="50px"
                      width="50px"
                      objectFit="cover"
                      borderRadius="50%"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Box>

                  <Box w="80%">
                    <Text
                      color={'#AEF8A2'}
                      fontSize="lg"
                      fontWeight={'bold'}
                      paddingStart="2"
                    >
                      {' '}
                      {pred.value.predictionName}{' '}
                    </Text>
                  </Box>

                  {/* <Text color={'white'}>
                    <b>Status </b>: {pred.value.predictionStatus}
                  </Text> */}
                </Box>
              </Box>
            );
          })}
          {inProgressArray.map((pred, i) => {
            return (
              <Box
                key={i}
                onClick={() => history('/predict/' + pred.id)}
                display="flex"
                w="29%"
                borderRadius="10px"
                flexDirection="row"
                padding="20px"
                backgroundColor="#12231b"
              >
                <Box display="flex" flexDirection="row" flexWrap="wrap">
                  {/* <Text color={'white'}>
                    {' '}
                    <b>ID </b>: {pred.value.predictionRef}
                  </Text> */}
                  <Box w="20%">
                    <Image
                      height="50px"
                      width="50px"
                      objectFit="cover"
                      borderRadius="50%"
                      src="https://bit.ly/dan-abramov"
                      alt="Dan Abramov"
                    />
                  </Box>

                  <Box w="80%">
                    <Text
                      color={'#AEF8A2'}
                      fontSize="lg"
                      fontWeight={'bold'}
                      paddingStart="2"
                    >
                      {' '}
                      {pred.value.predictionName}{' '}
                    </Text>
                  </Box>

                  {/* <Text color={'white'}>
                    <b>Status </b>: {pred.value.predictionStatus}
                  </Text> */}
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box w="100%" display="flex" marginTop="20vh">
          <Box w="33.33%">
            <div>
              <div className="wrapper">
                <div className="search">
                  <input
                    id="search"
                    type="search"
                    placeholder="Search markets"
                  />
                  <i class="fas fa-search"></i>
                </div>
              </div>
            </div>
          </Box>
          <Box w="33.33%" paddingStart="3" paddingEnd="3">
            <Select placeholder="CATEGORY" color="black" bgColor="white">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
          <Box w="33.33%">
            <Select placeholder="SORT BY: VOLUME" color="black" bgColor="white">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          w="100%"
          paddingStart="10"
          paddingEnd="10"
          paddingTop="5"
          paddingBottom="5"
          bgColor="white"
          borderRadius="10"
          marginTop="3"
        >
          <Box w="70%">
            <Text color="black">Market</Text>
          </Box>
          <Box w="10%">
            <Center color="black">Volume</Center>
          </Box>
          <Box w="10%">
            <Center color="black">Yes</Center>
          </Box>
          <Box w="10%">
            <Center color="black">No</Center>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" flexWrap="wrap" w="100%">
          {completedArray.map((pred, i) => {
            return (
              <Box
                key={i}
                onClick={() => history('/predict/' + pred.id)}
                display="flex"
                maxWidth="100%"
                borderBottom="1px solid"
                borderColor="gray"
                flexDirection="row"
                // borderRadius="20px"
                padding="20px"
                margin="10px"
              >
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  flexWrap="wrap"
                  w="100%"
                >
                  <Box w="5%">
                    <Text color={colors.text}>
                      {/* <b>ID </b>: {pred.value.predictionRef} */}
                      <Image
                        height="50px"
                        width="50px"
                        objectFit="cover"
                        borderRadius="50%"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                        border="1px solid"
                        borderColor="#22EF01"
                      />
                    </Text>
                  </Box>

                  <Box w="55%" paddingEnd="10" paddingStart="3">
                    <Text color="white"> {pred.value.predictionName} </Text>
                  </Box>

                  <Box w="10%">
                    <Center color={'#15803D'}>
                      {/* <b>Status </b>: {pred.value.predictionStatus} */}
                      100%
                    </Center>
                  </Box>
                  <Box w="10%">
                    <Center color={'#6EFB57'}>
                      {/* <b>Status </b>: {pred.value.predictionStatus} */}
                      $1,003,797
                    </Center>
                  </Box>
                  <Box w="10%">
                    <Center color={'#6EFB57'}>
                      {/* <b>Status </b>: {pred.value.predictionStatus} */}
                      $0.41
                    </Center>
                  </Box>
                  <Box w="10%">
                    <Center color={'#6EFB57'}>
                      {/* <b>Status </b>: {pred.value.predictionStatus} */}
                      $0.59
                    </Center>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Flex justifyContent="center" alignItems="center" marginTop="6vh">
          <Button
            bgColor="#3B3A3A"
            color="white"
            px="4"
            py="2"
            borderColor="white"
            border="1px solid"
            className="h-btn"
          >
            <HiOutlineArrowSmLeft fontSize="22" />
          </Button>

          <Box display="flex" alignItems="center">
            <Text px="3">Page</Text>
            <Button
              bgColor="#3B3A3A"
              color="white"
              px="4"
              py="2"
              borderColor="white"
              border="1px solid"
              className="h-btn"
            >
              64
            </Button>
            <Text px="3">of 835</Text>
          </Box>

          <Button
            bgColor="#3B3A3A"
            color="white"
            px="4"
            py="2"
            borderColor="white"
            border="1px solid"
            className="h-btn"
          >
            <HiOutlineArrowSmRight fontSize="22" />
          </Button>
        </Flex>
      </Box>
    </Container>
  );
}
