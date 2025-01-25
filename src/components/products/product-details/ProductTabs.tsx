import OverlaySection from '@/components/OverlaySection';
import { addTimeToDate } from '@/helpers/date';
import { timeToX } from '@/helpers/dayjs';
import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  StackDivider,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

function ProductTabs(props: Readonly<{ product: Product }>) {
  const { product } = props;

  const [tabIndex, setTabIndex] = useState(0);

  const onTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <OverlaySection className='mt-6'>
      <ButtonGroup colorScheme='gray' spacing={2}>
        <Button
          variant={tabIndex === 0 ? 'solid' : 'outline'}
          onClick={() => setTabIndex(0)}
        >
          HISTORY
        </Button>

        <Button
          variant={tabIndex === 1 ? 'solid' : 'outline'}
          onClick={() => setTabIndex(1)}
        >
          BIDS
        </Button>
      </ButtonGroup>

      <Divider mt={4} />

      <Tabs index={tabIndex} onChange={onTabsChange}>
        <TabPanels>
          <TabPanel>
            <VStack spacing={2} align='stretch' divider={<StackDivider />}>
              <Flex justify='space-between' align='center'>
                <Flex alignItems='center' gap={2}>
                  <Box>
                    <Avatar
                      size='sm'
                      src={product.user.avatar.src}
                      name={product.user.name}
                    />
                  </Box>

                  <Box>
                    <Text fontSize='xs' as='b'>
                      {product.user.name}
                    </Text>

                    <Text fontSize='xs' className='text-[#a1a0ae]'>
                      {timeToX(addTimeToDate({ hours: 4 }))}
                    </Text>
                  </Box>
                </Flex>

                <Box>
                  <Text fontSize='sm'>4.75 ETH</Text>
                </Box>
              </Flex>

              <Flex justify='space-between' align='center'>
                <Flex alignItems='center' gap={2}>
                  <Box>
                    <Avatar
                      size='sm'
                      src={product.user.avatar.src}
                      name={product.user.name}
                    />
                  </Box>

                  <Box>
                    <Text fontSize='xs' as='b'>
                      {product.user.name}
                    </Text>

                    <Text fontSize='xs' className='text-[#a1a0ae]'>
                      {timeToX(addTimeToDate({ hours: 12 }))}
                    </Text>
                  </Box>
                </Flex>

                <Box>
                  <Text fontSize='sm'>4.75 ETH</Text>
                </Box>
              </Flex>

              <Flex justify='space-between' align='center'>
                <Flex alignItems='center' gap={2}>
                  <Box>
                    <Avatar
                      size='sm'
                      src={product.user.avatar.src}
                      name={product.user.name}
                    />
                  </Box>

                  <Box>
                    <Text fontSize='xs' as='b'>
                      {product.user.name}
                    </Text>

                    <Text fontSize='xs' className='text-[#a1a0ae]'>
                      {timeToX(addTimeToDate({ hours: 5, days: 1 }))}
                    </Text>
                  </Box>
                </Flex>

                <Box>
                  <Text fontSize='sm'>9.75 ETH</Text>
                </Box>
              </Flex>

              <Flex justify='space-between' align='center'>
                <Flex alignItems='center' gap={2}>
                  <Box>
                    <Avatar
                      size='sm'
                      src={product.user.avatar.src}
                      name={product.user.name}
                    />
                  </Box>

                  <Box>
                    <Text fontSize='xs' as='b'>
                      {product.user.name}
                    </Text>

                    <Text fontSize='xs' className='text-[#a1a0ae]'>
                      {timeToX(addTimeToDate({ hours: 4, days: 2 }))}
                    </Text>
                  </Box>
                </Flex>

                <Box>
                  <Text fontSize='sm'>44.75 ETH</Text>
                </Box>
              </Flex>
            </VStack>
          </TabPanel>

          <TabPanel>
            <Alert status='warning' variant='left-accent'>
              <AlertIcon />
              No bids
            </Alert>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </OverlaySection>
  );
}

export default ProductTabs;
