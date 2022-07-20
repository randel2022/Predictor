import React, { useEffect, useState } from 'react';
import PageLoading from '../../helper/PageLoading2';
import PredictionContext from '../../helper/PredictionContext';
import portfolioBG from '../assets/Predictions-Background.png';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  Popover,
  Heading,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useWallet } from '../../helper/WalletContext';
import Loading from '../../helper/Loading';
import {
  CONTRACT_ADDRESS,
  wallet,
  Tezos,
  TOKEN_ADDRESS,
} from '../../helper/tezos';

const AddPredRes = ({ pred }) => {
  const colors = {
    bg: useColorModeValue('blue.200', 'blue.700'),
    text: useColorModeValue('blue', 'white'),
  };

  const submit = async (e) => {
    e.preventDefault();
    const { option } = e.target.elements;
    console.log(option.value);
    const contract = await wallet.at(CONTRACT_ADDRESS);
    const result = await contract.methods
      .predictResults(pred.predictionRef, option.value)
      .send();
    await result.confirmation(1);
    alert('Result Updated!');
  };

  return (
    <Popover returnFocusOnClose={false} placement="right" closeOnBlur={false}>
      <PopoverTrigger>
        <Button bg={colors.bg} textColor={colors.text} marginLeft="10px">
          Result
        </Button>
      </PopoverTrigger>
      <PopoverContent textColor={colors.text}>
        <PopoverHeader fontWeight="semibold">
          Update Prediction Result
        </PopoverHeader>
        <PopoverBody>
          <form onSubmit={submit}>
            <FormControl>
              <FormLabel htmlFor={pred.id + '_status'}>Options</FormLabel>
              <RadioGroup name="option">
                <Stack direction="column">
                  {pred.predictionOptions.map((option, i) => {
                    return (
                      <Radio key={i} value={option}>
                        <Box
                          borderWidth="1px"
                          borderColor="purple.400"
                          p="2"
                          borderRadius="2xl"
                        >
                          {option}
                        </Box>
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const UpdatePredStatus = ({ pred }) => {
  const colors = {
    bg: "useColorModeValue('blue.200', 'blue.700')",
    text: useColorModeValue('blue', 'white'),
  };

  const submit = async (e) => {
    e.preventDefault();
    const { status } = e.target.elements;

    const contract = await wallet.at(CONTRACT_ADDRESS);
    const st = await contract.methods
      .updateStatus(pred.predictionRef, status.value)
      .send();
    st.confirmation();
    alert('Status Updated!');
  };
  return (
    <Popover returnFocusOnClose={false} placement="right" closeOnBlur={false}>
      <PopoverTrigger>
        <Button bg={colors.bg} textColor={colors.text}>
          Update
        </Button>
      </PopoverTrigger>
      <PopoverContent textColor={colors.text}>
        <PopoverHeader fontWeight="semibold">
          Update Prediction Status
        </PopoverHeader>
        <PopoverBody>
          <form onSubmit={submit}>
            <FormControl>
              <FormLabel htmlFor={pred.id + '_status'}>Status</FormLabel>
              <RadioGroup name="status">
                <Stack direction="column">
                  {[
                    'Prediction In-Progress',
                    'Prediction Ended',
                    'Result Declared',
                    'Cancelled',
                  ].map((option, i) => {
                    return (
                      <Radio key={i} value={option}>
                        <Box
                          borderWidth="1px"
                          borderColor="purple.400"
                          p="2"
                          borderRadius="2xl"
                        >
                          {option}
                        </Box>
                      </Radio>
                    );
                  })}
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

const AddNewPrediction = () => {
  const [num, setNum] = React.useState(0);
  // const { connected, connect, activeAccount } = useWallet();
  const [options, setOptions] = React.useState({});
  const { connect, disconnect, activeAccount, connected } = useWallet();

  const submit = async (e) => {
    e.preventDefault();
    const { prediction, resultRef, start, end } = e.target.elements;

    const contract = await wallet.at(CONTRACT_ADDRESS);
    const endValue = new Date(end.value).toISOString();
    const startValue = new Date(start.value).toISOString();

    const op = await contract.methods
      .addprediction(
        endValue,
        resultRef.value,
        prediction.value,
        Object.keys(options).map((key) => options[key]),
        startValue
      )
      .send({ amount: 2 });
    await op.confirmation(1);
    alert('Prediction Created!');
  };
  return (
    <Box
      display="flex"
      justifyContent="center"
      w={{ base: '100%', md: '32%', lg: '32%' }}
    >
      {!connected ? (
        <Box
          padding="20"
          bgColor="#180F2Bed"
          borderRadius="10"
          w="100%"
          flexWrap="wrap"
          display="flex"
          justifyContent="center"
        >
          <Button
            onClick={connect}
            color="black"
            px="20"
            borderRadius="20"
            bgColor="white"
          >
            Connect Wallet
          </Button>
        </Box>
      ) : (
        <Popover
          position="relative"
          display="flex"
          flexWrap="wrap"
          height="auto"
        >
          <PopoverTrigger>
            <Box
              py="20"
              px={{ base: '10', md: '20', lg: '20' }}
              bgColor="#180F2Bed"
              borderRadius="10"
              w={{ base: '100%', md: '100%', lg: '100%' }}
              display="flex"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Button bgColor="white" color="black" px="20" borderRadius="20">
                Add New Predictions
              </Button>
            </Box>
          </PopoverTrigger>
          <PopoverContent
            padding="4"
            bgColor="#1A1A1A"
            // position="absolute"
            top="-300"
            left="-160"
            _focus={{ outline: 'red' }}
          >
            <form onSubmit={submit}>
              <FormControl>
                <FormLabel htmlFor="prediction">Prediction</FormLabel>
                <Input
                  name="prediction"
                  id="prediction"
                  _focus={{ color: 'white' }}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="resultRef">Result Reference</FormLabel>
                <Input
                  name="resultRef"
                  id="resultRef"
                  _focus={{ color: 'white' }}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="start">Start</FormLabel>
                <Input
                  type="datetime-local"
                  name="start"
                  id="start"
                  _focus={{ color: 'white' }}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="end">End</FormLabel>
                <Input
                  type="datetime-local"
                  name="end"
                  id="end"
                  _focus={{ color: 'white' }}
                ></Input>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="number_options">
                  Number of Options
                </FormLabel>
                <Input
                  onChange={(e) => {
                    console.log(e);
                    setNum(parseInt(e.target.value) || 0);
                  }}
                  name="number_options"
                  id="number_options"
                  type="number"
                  _focus={{ color: 'white' }}
                ></Input>
              </FormControl>
              {[...Array(num).keys()].map((i) => {
                return (
                  <FormControl>
                    <FormLabel htmlFor={'option_' + i}>Option {i}</FormLabel>
                    <Input
                      onChange={(e) =>
                        setOptions((options) => {
                          var opt = options;
                          opt[`option_${i}`] = e.target.value;
                          return opt;
                        })
                      }
                      name={`option_${i}`}
                      id={`option_${i}`}
                      _focus={{ color: 'white' }}
                    ></Input>
                  </FormControl>
                );
              })}
              <Button marginTop="5" type="submit" bgColor="#9C4FFF">
                Submit
              </Button>
            </form>
          </PopoverContent>
        </Popover>
      )}
    </Box>
  );
};

export default function MyPreds() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const { predictionsArray } = React.useContext(PredictionContext);
  const { connected, connect, activeAccount } = useWallet();
  const [myPreds, setMyPreds] = React.useState([]);
  const colors = {
    bg: useColorModeValue('blue.100', 'blue.900'),
    text: useColorModeValue('blue', 'white'),
  };

  React.useEffect(() => {
    (async function () {
      if (!connected) {
        await connect();
      }
      const contract = await wallet.at(CONTRACT_ADDRESS);
      const storage = await contract.storage();
      const admin = storage.admin;
      console.log(admin);
      if (activeAccount) {
        const _ = [];
        for (let x = 0; x < predictionsArray.length; x++) {
          let item = predictionsArray[x].value;
          if (
            item.proposer === activeAccount.address ||
            admin === activeAccount.address
          ) {
            _.push(item);
          }
        }
        console.log(_);
        setMyPreds(_);
      }
    })();
  }, [activeAccount]);

  return myPreds ? (
    <Container
      px={{ base: '8', md: '20', lg: '20' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="auto"
      bgImage={portfolioBG}
      bgPosition="center"
      bgSize="cover"
      w="100%"
      maxWidth="100%"
    >
      <Box
        display="flex"
        justifyContent={'space-between'}
        py={{ base: '10vh', md: '35vh', lg: '35vh' }}
        w="100%"
        flexDirection="column"
      >
        <Heading
          className="mainfont"
          as="h2"
          fontWeight="semibold"
          fontSize={{ base: '4xl', md: '4xl', lg: '7xl' }}
          textAlign={{ base: 'center', md: 'left', lg: 'left' }}
        >
          Predictions
        </Heading>
        <Box display="flex" justifyContent="center">
          {loading ? (
            <Box
              display={{ base: 'flex', md: 'flex' }}
              flexWrap="wrap"
              w={{ base: '100%', md: '32%', lg: '32%' }}
            >
              <PageLoading />
            </Box>
          ) : (
            <AddNewPrediction />
          )}
        </Box>

        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {myPreds.map((pred, i) => {
            return (
              <Box
                key={i}
                // onClick={}
                display="flex"
                maxWidth="300px"
                border="1px solid"
                borderRadius="15px"
                padding="20px"
                margin="10px"
              >
                <Text color={colors.text}>{pred.predictionName}</Text>
                <UpdatePredStatus pred={pred} />
                <AddPredRes pred={pred} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  ) : (
    <Loading />
  );
}

const Portfolio = () => {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const colors = {
    bg: useColorModeValue('blue.100', 'blue.900'),
    text: useColorModeValue('blue', 'white'),
  };
  const { connect, disconnect, activeAccount, connected } = useWallet();
  const [data, setData] = React.useState(null);
  let ledger = [];
  React.useEffect(async () => {
    if (!connected) {
      await connect();
    }
    if (activeAccount) {
      console.log(activeAccount);
      console.log(activeAccount.address);
      const tokenContract = await Tezos.contract.at(TOKEN_ADDRESS);
      const tokenStore = await tokenContract.storage();
      const tokenLedger = tokenStore.ledger;
      console.log(tokenLedger);
      let tokens = tokenStore.all_tokens.toString().split(',').map(Number);
      console.log(tokens);

      for (let tokenId = tokens.length - 1; tokenId >= 0; tokenId--) {
        console.log(tokenId, tokens[tokenId]);
        await tokenLedger
          .get([activeAccount.address, tokens[tokenId]])
          .then((value) => {
            ledger.push({ id: tokens[tokenId], balance: value.toString() });
          })
          .catch((error) =>
            console.log(`Error: ${tokens[tokenId]} ${activeAccount.address}`)
          );
        console.log(ledger);
      }

      setData(ledger);
    }
  }, [activeAccount]);
  return data ? (
    <Container
      width="100%"
      maxWidth="100vw"
      // bg={colors.bg}
      bgColor="red"
      height="auto"
      maxHeight="100vh"
    >
      <Text color={colors.text}>Portfolio</Text>
      <Box display="flex" flexDirection="column" flexWrap="wrap" bgColor="blue">
        {data.map((pred, i) => {
          return (
            <Box
              key={i}
              // onClick={}
              display="flex"
              maxWidth="300px"
              flexDirection="row"
              border="1px solid"
              borderRadius="15px"
              padding="20px"
              margin="10px"
            >
              <Text color={colors.text}>
                Token id &nbsp;: &nbsp; {pred.id} &nbsp;
              </Text>
              <Text color={colors.text}>
                Balance &nbsp; :&nbsp; {pred.balance}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Container>
  ) : (
    <Loading />
  );
};
