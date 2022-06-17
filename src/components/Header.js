import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Box,
  Flex,
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Input,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useWallet } from '../helper/WalletContext';
import {
  CONTRACT_ADDRESS,
  TOKEN_ADDRESS,
  wallet,
  Tezos,
} from '../helper/tezos';
import { TezosToolkit, MichelCodecPacker, compose } from '@taquito/taquito';
import Loading from '../helper/Loading';

const Redeem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submit = async (e) => {
    e.preventDefault();
    const { tokenId, amount } = e.target.elements;
    console.log(tokenId.value, amount.value);
    const contract = await wallet.at(CONTRACT_ADDRESS);

    const op = await contract.methods
      .redeemTokens(parseInt(amount.value), parseInt(tokenId.value))
      .send();
    await op.confirmation(1);
    alert('Redemption Completed!');
  };

  return (
    <>
      <MenuItem onClick={onOpen}>Redeem</MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Redeem Token</ModalHeader>
          <ModalBody>
            <form onSubmit={submit}>
              <FormControl>
                <Input
                  required
                  type="number"
                  name="tokenId"
                  placeholder="Token ID"
                ></Input>
              </FormControl>
              <FormControl>
                <Input
                  required
                  type="number"
                  name="amount"
                  placeholder="Amount"
                />
              </FormControl>
              <Button type="submit">Redeem</Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Header({ links = [] }) {
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { connect, disconnect, activeAccount, connected } = useWallet();
  const { colorMode, toggleColorMode } = useColorMode();

  const whiteListProposer = async () => {
    const contract = await wallet.at(CONTRACT_ADDRESS);
    const op1 = await contract.methods
      .addProposers(activeAccount.address)
      .send();

    await op1.confirmation(1);
    alert('Proposer Whitelisted!');
  };

  return (
    <Box
      color={'white'}
      // bg={useColorModeValue('222737', '222737')}
      backgroundColor="#051B07"
      px={4}
      py={4}
    >
      <Flex
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
        px="20"
        flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
      >
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'center'} w="33%">
          <Text fontSize="2xl" paddingEnd="3" color="white" fontWeight="bold">
            Predict{''}
            <Box as="span" color="#22EF01">
              or.
            </Box>
          </Text>
        </HStack>

        <Flex alignItems={'center'} justifyContent={'center'} w="33%">
          <Link
            fontSize="1xl"
            paddingStart="3"
            paddingEnd="3"
            colorScheme="blue"
            href="/"
          >
            Marketplace
          </Link>
          <Link
            fontSize="1xl"
            paddingStart="3"
            paddingEnd="3"
            colorScheme="blue"
            href="/Portfolio"
          >
            Portfolio
          </Link>
        </Flex>

        <Flex alignItems={'center'} w="33%" justifyContent={'end'}>
          {/* <IconButton
            marginRight="10px"
            icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          /> */}
          <Box display={{ base: 'none', md: 'flex' }}>
            {!connected ? (
              // <Button color={'black'} onClick={connect}>
              //   Connect Wallet
              // </Button>
              <Flex alignItems={'center'} justifyContent={'end'}>
                <Link
                  fontSize="1xl"
                  paddingStart="3"
                  paddingEnd="3"
                  colorScheme="blue"
                >
                  Sign In
                </Link>
                <Link
                  fontSize="1xl"
                  px="10"
                  paddingTop="2"
                  paddingBottom="2"
                  borderRadius="15"
                  colorScheme="blue"
                  href="/Portfolio"
                  bgColor={'white'}
                  color={'black'}
                >
                  Sign Up
                </Link>
              </Flex>
            ) : (
              <Menu>
                <MenuButton as={Button} cursor={'pointer'} minW={0}>
                  <Text
                    maxW="300px"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {activeAccount?.address}
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => history('/mypreds')}>
                    My Predictions
                  </MenuItem>
                  <MenuItem onClick={whiteListProposer}>Whitelist Me</MenuItem>
                  <MenuItem onClick={disconnect}>Disconnect</MenuItem>
                  <Portfolio />
                  <Redeem />
                </MenuList>
              </Menu>
            )}
          </Box>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {!connected ? (
              <Button color={'black'} onClick={connect}>
                Connect Wallet
              </Button>
            ) : (
              <Menu>
                <MenuButton as={Button} cursor={'pointer'} minW={0}>
                  <Text
                    maxW="300px"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {activeAccount?.address}
                  </Text>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => history('/mypreds')}>
                    My Predictions
                  </MenuItem>
                  <MenuItem onClick={disconnect}>Disconnect</MenuItem>
                </MenuList>
              </Menu>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

const Redeem1 = (tokenID) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log('tokenId', tokenID.tokenID.toString());
  const colors = {
    bg: useColorModeValue('purple.300', 'purple.600'),
    text: useColorModeValue('purple', 'white'),
  };
  const submit = async (e) => {
    e.preventDefault();
    const { amount } = e.target.elements;
    console.log(tokenID.tokenID, amount.value);
    const contract = await wallet.at(CONTRACT_ADDRESS);

    await contract.methods.redeemTokens(amount.value, tokenID.tokenID).send();
  };

  return (
    <Popover returnFocusOnClose={false} placement="right" closeOnBlur={false}>
      <PopoverTrigger>
        <Button bg={colors.bg} textColor={colors.text}>
          Redeem
        </Button>
      </PopoverTrigger>
      <PopoverContent textColor={colors.text}>
        <PopoverHeader fontWeight="semibold">Redeem Token</PopoverHeader>
        <PopoverBody>
          <form onSubmit={submit}>
            <FormControl>
              <FormLabel htmlFor="tokenID">
                Token Id : {tokenID.tokenID.toString()}{' '}
              </FormLabel>
            </FormControl>
            <FormControl>
              <Input
                required
                type="number"
                name="amount"
                placeholder="Amount"
              />
            </FormControl>
            <Button type="submit">Redeem</Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
