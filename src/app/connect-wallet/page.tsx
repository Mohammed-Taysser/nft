import Banner from '@/components/Banner';
import Wallet from '@/components/wallet/Wallet';
import { Container } from '@chakra-ui/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect Wallet',
};

function ConnectWallet() {
  const bannerItems: BannerItem[] = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Connect Wallet',
      url: '/connect-wallet',
    },
  ];

  return (
    <>
      <Banner items={bannerItems} />

      <Container>
        <Wallet />
      </Container>
    </>
  );
}

export default ConnectWallet;
