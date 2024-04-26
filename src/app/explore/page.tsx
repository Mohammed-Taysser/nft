import { PRODUCTS } from '@/MOCK';
import Banner from '@/components/Banner';
import Products from '@/components/products/Products';
import { Container } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore',
};

function Explore() {
  const bannerItems: BannerItem[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Explore Items',
      url: '/explore',
    },
  ];

  return (
    <>
      <Banner items={bannerItems} />

      <Container>
        <Products products={PRODUCTS} />
      </Container>
    </>
  );
}

export default Explore;
