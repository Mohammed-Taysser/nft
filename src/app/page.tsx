import { ARTISTS, AUCTIONS, PRODUCTS } from '@/MOCK';
import SectionTitle from '@/components/SectionTitle';
import Artists from '@/components/artist/Artists';
import Auctions from '@/components/auction/Auctions';
import Collections from '@/components/collections/Collections';
import Features from '@/components/feature/Features';
import Products from '@/components/products/Products';
import Header from '@/layouts/Header';
import { Box, Container, Wrap, WrapItem } from '@chakra-ui/react';
import { Metadata } from 'next';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

export const metadata: Metadata = {
  title: 'NFT | Homepage',
};

function Homepage() {
  return (
    <>
      <Header />

      <Container>
        <SectionTitle title='Artists'>
          <Wrap>
            <WrapItem>
              <button className='artist-btn artist-prev-btn' title='prev'>
                <FaArrowLeftLong />
              </button>
            </WrapItem>
            <WrapItem>
              <button className='artist-btn artist-next-btn' title='next'>
                <FaArrowRightLong />
              </button>
            </WrapItem>
          </Wrap>
        </SectionTitle>

        <Artists artists={ARTISTS} />

        <Box my={70}></Box>

        <SectionTitle title='Live Auctions' url='/auctions' />

        <Auctions auctions={AUCTIONS.slice(0, 3)} />

        <Box my={70}></Box>

        <SectionTitle title="Today's Picks" url='/products' />

        <Products products={PRODUCTS.slice(0, 6)} />

        <Box my={70}></Box>

        <Features />

        <Collections />
      </Container>
    </>
  );
}

export default Homepage;
