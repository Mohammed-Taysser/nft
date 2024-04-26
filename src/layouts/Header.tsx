import blurImage from '@/assets/images/icons/blur.svg';
import {
  Button,
  Container,
  SimpleGrid,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Image from 'next/image';
import heroBG from '@/assets/images/background/hero-bg.png';
import heroImage from '@/assets/images/background/hero-image.svg';

function Header() {
  return (
    <header
      className='header'
      style={{ backgroundImage: `url('${heroBG.src}')` }}
    >
      <div className='shapes'>
        <Image src={blurImage} alt='blur-icon' />
      </div>

      <Container>
        <SimpleGrid
          columns={{ md: 2 }}
          spacing={10}
          justifyContent='space-between'
          alignItems='center'
          height='100vh'
        >
          <div className='info'>
            <div className='title'>
              NFT Template for Marketplace and Web3 Platforms
            </div>
            <div className='subtitle'>
              Template for NFT, Token, and Web3 marketplace projects, based on
              Tailwind CSS. Comes with all the essential UI components and pages
              you need to build an NFT marketplace or all sorts of Web3
              platforms.
            </div>

            <Wrap spacing='30px'>
              <WrapItem>
                <Button size='lg'>Explore now</Button>
              </WrapItem>
              <WrapItem>
                <Button size='lg' variant='outline'>
                  Upload Your Art
                </Button>
              </WrapItem>
            </Wrap>
          </div>

          <div className='image'>
            <Image src={heroImage} width={470} height={450} alt='hero' />
          </div>
        </SimpleGrid>
      </Container>
    </header>
  );
}

export default Header;
