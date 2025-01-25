'use client';

import Timer from '@/components/auction/Timer';
import Banner from '@/components/Banner';
import GradientTitle from '@/components/GradientTitle';
import Likes from '@/components/Likes';
import OverlaySection from '@/components/OverlaySection';
import ProductTabs from '@/components/products/product-details/ProductTabs';
import Products from '@/components/products/Products';
import { addTimeToDate } from '@/helpers/date';
import Random from '@/helpers/random';
import { PRODUCTS } from '@/MOCK';
import {
  Alert,
  AlertIcon,
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Flex,
  SimpleGrid,
  Spacer,
  Spinner,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

function ExploreProducts(props: Readonly<{ id: string }>) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [bannerItems, setBannerItems] = useState<BannerItem[]>([
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Explore Items',
      url: '/explore',
    },
  ]);

  useEffect(() => {
    getProductInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const getProductInfo = () => {
    setIsLoading(true);

    setTimeout(() => {
      const productItem = PRODUCTS.find((item) => item.id === props.id);

      if (productItem) {
        const productBannerItem: BannerItem = {
          label: productItem.title,
          url: `/explore/${props.id}`,
        };

        setBannerItems((prev) => [...prev, productBannerItem]);

        setProduct(productItem);
      }

      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      {!isLoading && product && <Banner items={bannerItems} />}

      <Container my={100}>
        {isLoading && (
          <Center h={300}>
            <Spinner size='xl' />
          </Center>
        )}

        {!isLoading && !product && (
          <Alert status='error' variant='left-accent'>
            <AlertIcon />
            No product exist with this id!
          </Alert>
        )}

        {!isLoading && product && (
          <>
            <SimpleGrid
              columns={{ sm: 1, lg: 2 }}
              className='mb-28'
              spacing={10}
            >
              <Box>
                <Center>
                  <Box className='border-2 rounded-md border-solid border-[#4d4c5a] bg-[#2c2c39] text-center p-g md:p-20'>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={320}
                      className='inline-block'
                      height={320}
                    />
                  </Box>
                </Center>
              </Box>

              <Box>
                <Flex alignItems='center'>
                  <Text fontSize='3xl'>{product.title}</Text>

                  <Spacer />
                  <Box>
                    <Likes count={product.rating.count} />
                  </Box>
                </Flex>

                <Flex alignItems='center' gap={2} className='mt-3'>
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
                      {product.user.job}
                    </Text>
                  </Box>
                </Flex>

                <Box className='my-6 text-[#a1a0ae]'>{product.description}</Box>

                <OverlaySection>
                  <Stack
                    direction={['column', 'row']}
                    divider={<StackDivider />}
                    spacing={8}
                  >
                    <Box flex='1'>
                      <Stack gap={1}>
                        <Flex justify='space-between' mb={3}>
                          <Text fontSize='md' className='text-[#a1a0ae]'>
                            Artist
                          </Text>

                          <Text fontSize='md'>Mohammed Taysser</Text>
                        </Flex>

                        <Flex justify='space-between' mb={3}>
                          <Text fontSize='md' className='text-[#a1a0ae]'>
                            Created on
                          </Text>

                          <Text fontSize='md'> 04 April , 2021 </Text>
                        </Flex>

                        <Flex justify='space-between' mb={3}>
                          <Text fontSize='md' className='text-[#a1a0ae]'>
                            Size
                          </Text>

                          <Text fontSize='md'>4000x4000</Text>
                        </Flex>
                      </Stack>
                    </Box>

                    <Box flex='1'>
                      <Flex gap={2} justify='center' mb={3}>
                        <Text fontSize='md' className='text-[#a1a0ae]'>
                          Current Bid
                        </Text>

                        <Text fontSize='md'>4.89 ETH</Text>
                      </Flex>

                      <Timer
                        timeout={addTimeToDate({
                          days: 9,
                          minutes: 17,
                          hours: 7,
                        })}
                      />
                    </Box>
                  </Stack>
                </OverlaySection>

                <ProductTabs product={product} />

                <Button size='lg' className='w-full mt-6'>
                  PLACE BID
                </Button>
              </Box>
            </SimpleGrid>

            <GradientTitle
              title='You May Like'
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.'
            />

            <Products products={Random.randomItemsFromArray(PRODUCTS, 3)} />
          </>
        )}
      </Container>
    </>
  );
}

export default ExploreProducts;
