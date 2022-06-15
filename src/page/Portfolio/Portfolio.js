import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Portfolio.css';
import { useWallet } from '../../helper/WalletContext';
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
} from '@chakra-ui/react';

const Portfolio = () => {
  return (
    <Container
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
    >
      <Button color={'black'}>Connect Wallet</Button>
    </Container>
  );
};

export default Portfolio;
