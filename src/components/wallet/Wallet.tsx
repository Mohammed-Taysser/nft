import { WALLET } from '@/MOCK';
import { SimpleGrid } from '@chakra-ui/react';
import GradientTitle from '../GradientTitle';
import SingleWallet from './SingleWallet';

function Wallet() {
  return (
    <div className='wallet'>
      <GradientTitle
        title='Connect Your Wallet'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a
          lacinia dolor, in pretium nunc. Morbi mollis arcu eget.'
      />

      <SimpleGrid
        columns={{ sm: 2, md: 3 }}
        spacing={10}
        justifyContent='center'
      >
        {WALLET.map((wallet) => (
          <SingleWallet key={wallet.id} wallet={wallet} />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Wallet;
