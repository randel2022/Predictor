import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Portfolio.css';
import { useWallet } from '../../helper/WalletContext';
import portfolioBG from '../../components/assets/Portfolio-page-bg.png';
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
  Button,
  Select,
  bgImage,
} from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgImage={portfolioBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
      flexDirection="column"
    >
      <Heading className="htext" as="h2" fontWeight="semibold" size="3xl">
        Portfolio
      </Heading>
      <Box
        bgColor="#051B07"
        w="60%"
        padding="20"
        display="flex"
        justifyContent="center"
        borderRadius="20"
      >
        <Button color={'black'} bgColor="#22EF01">
          Connect Wallet
        </Button>
      </Box>
    </Container>
  );
};

export default Portfolio;
