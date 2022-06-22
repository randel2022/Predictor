import { Box } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react';
export default function Loading() {
  return (
    <Box
      display="flex"
      minHeight="100vh"
      height="100%"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row"
      bgGradient="linear(to-r, #25203a, #181125)"
      px="20"
    >
      <Box padding="6" w="30%" boxShadow="lg" bg="white" borderRadius="10px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box padding="6" w="30%" boxShadow="lg" bg="white" borderRadius="10px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
      <Box padding="6" w="30%" boxShadow="lg" bg="white" borderRadius="10px">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    </Box>
  );
}
