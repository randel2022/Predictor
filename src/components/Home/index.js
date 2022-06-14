import React from 'react';
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
} from '@chakra-ui/react';
import PredictionContext from '../../helper/PredictionContext';
import { useNavigate } from 'react-router-dom';

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
      bgGradient="linear(to-r, #202b2f, #121b19)"
      //   bgColor="#202b2f"
      height="auto"
      maxHeight="1000vh"
      paddingTop="10vh"
      paddingStart="25vh"
      paddingEnd="25vh"
      paddingBottom="15vh"
    >
      <Box display="flex" flexDirection="column" flexWrap="wrap">
        {/* <Text color={'colors.text'}>
          <b>Current Predictions </b>
        </Text> */}
        <Heading as="h3" fontWeight="semibold" margin="10px" size="lg">
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
                      fontSize="xl"
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
                      fontSize="xl"
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
                      fontSize="xl"
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
            <Select placeholder="Search Markets" color="black" bgColor="white">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
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
      </Box>
    </Container>
  );
}
